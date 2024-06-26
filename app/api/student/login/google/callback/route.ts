import { google } from "@/config/providers";
import { auth } from "@/auth";
import { cookies } from "next/headers";
import { generateId } from "lucia";
import { db } from "@/config/db";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const storedState = cookies().get("google_oauth_state")?.value;
    const codeVerifier = cookies().get("google_oauth_code_verifier")?.value;

    if (!code || !state || !storedState || !codeVerifier || state !== storedState) {
        return new Response("State mismatch", { status: 400 });
    }

    try {
        const tokens = await google.validateAuthorizationCode(code, codeVerifier);

        const response = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
            headers: {
                Authorization: `Bearer ${tokens.accessToken}`
            }
        });
        const user = await response.json();

        const googleId = user.sub;
        const username = user.given_name;
        const email = user.email;
        const profileImg: string = user.picture;



        const userExists = await db.oauthAccount.findMany({
            where: {
                AND: [
                    {
                        provider_id: "google"
                    },
                    {
                        provider_user_id: googleId
                    }
                ]
            }
        })


        if (userExists.length > 0) {
            const user = await db.user.findUnique({
                where: {
                    id: userExists[0].user_id
                }
            });

            if (user) {
                const session = await auth.createSession(user.id, {});
                const sessionCookie = auth.createSessionCookie(session.id);
    
                cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
                return new Response("User already exists", {
                    status: 302,
                    headers: {
                        location: "/quiz"
                    }
                });
            }
        }


        const userId = generateId(15);

        await db.user.create({
            data: {
                id: userId,
                username: username,
                email: email,
                profile_img: profileImg
            }
        })

        await db.oauthAccount.create({
            data: {
                provider_id: "google",
                provider_user_id: googleId,
                user_id: userId
            }
        })

        const session = await auth.createSession(userId, {});
        
        const sessionCookie = auth.createSessionCookie(session.id);
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
        return new Response("User Created", {
            status: 302,
            headers: {
                location: "/quiz"
            }
        });
        // TODO: Configure incorrect credentials page.
    } catch (error) {
        console.error(error);
        return new Response("Error fetching user data from Google", { status: 500 });
    }
}