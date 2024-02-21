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
        console.log("Access token: ", tokens.accessToken);

        const response = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
            headers: {
                Authorization: `Bearer ${tokens.accessToken}`
            }
        });
        const user = await response.json();

        console.log("User: ", user);    




        return new Response(`Google API request failed with status: `, { status: 500 });

    }

    catch (e: any) {
        return new Response(e, { status: 500 });
    }

}