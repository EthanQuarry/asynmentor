import { github } from "@/config/providers";
import { auth } from "@/auth";
import { cookies } from "next/headers";
import { generateId } from "lucia";
import { db } from "@/config/db";


export async function GET(request: Request) {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const storedState = cookies().get("github_oauth_state")?.value;

    if (!code || !state || !storedState || state !== storedState) {
        return new Response("State mismatch", { status: 400 });
    }


    try {
        const tokens = await github.validateAuthorizationCode(code);

        const githubUserResponse = await fetch("https://api.github.com/user", {
            headers: {
                Authorization: `Bearer ${tokens.accessToken}`
            }
        });


        const githubUserData = await githubUserResponse.json();
        
        const githubId = githubUserData.id;
        const username = githubUserData.login
        const email = githubUserData.email;
        const profileImg: string = githubUserData.avatar_url;

        const userExists = await db.user.findUnique({
            where: {
                github_id: githubId
            }
        })

        if (userExists) {
            const session = await auth.createSession(userExists.id, {});
            const sessionCookie = auth.createSessionCookie(session.id);

            cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
            return new Response("User already exists", {
                status: 302,
                headers: {
                    location: "/dashboard"
                }
            });
        }

        const userId = generateId(15);

        await db.user.create({
            data: {
                id: userId,
                github_id: githubId,
                username: username,
                email: email,
                profile_img: profileImg
            }
        })

        const session = await auth.createSession(userId, {});
        
        const sessionCookie = auth.createSessionCookie(session.id);
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
        return new Response("User Created", {
            status: 302,
            headers: {
                location: "/dashboard"
            }
        });
        // TODO: Configure incorrect credentials page.
    } catch (error) {
        console.error(error);
        return new Response("Error fetching user data from GitHub", { status: 500 });
    }
}