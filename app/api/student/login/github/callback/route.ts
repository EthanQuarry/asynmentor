import { github } from "@/config/providers";
import { auth } from "@/auth";
import { cookies } from "next/headers";
import { OAuth2RequestError } from "arctic";
import { generateId } from "lucia";
import { db } from "@/config/db";
import { user } from "@nextui-org/theme";


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

        if (!githubUserResponse.ok) {
            throw new Error(`GitHub API request failed with status: ${githubUserResponse.status}`);
        }

        const githubUserData = await githubUserResponse.json();
        
        const githubId = githubUserData.id;
        const username = githubUserData.login
        const email = githubUserData.email;

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
                    location: "/"
                }
            });
        }

        const userId = generateId(15);

        await db.user.create({
            data: {
                id: userId,
                github_id: githubId,
                username: username,
                email: email
            }
        })

        const session = await auth.createSession(userId, {
            username: username,
            email: email,
        });
        
        // const sessionCookie = auth.createSessionCookie(session.id);
        // cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)
        // return new Response("User Created", {
        //     status: 302,
        //     headers: {
        //         location: "/"
        //     }
        // });

        return new Response(JSON.stringify(session), {
            headers: { 'Content-Type': 'application/json' },
            status: 302
        });
    } catch (error) {
        console.error(error);
        return new Response("Error fetching user data from GitHub", { status: 500 });
    }
}