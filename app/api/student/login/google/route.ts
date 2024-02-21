import { google } from "@/config/providers";
import { cookies } from "next/headers";
import { generateCodeVerifier, generateState } from "arctic";

export async function GET(request: Request): Promise<Response> {
    const state = generateState();
    const codeVerifier = generateCodeVerifier();
    const url = await google.createAuthorizationURL(state, codeVerifier, {
        scopes: ["openid", "email", "profile"],
    });

    cookies().set("google_oauth_state", state, {
        path: "/",
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 60 * 10,
        sameSite: "lax",  
    })
    cookies().set("google_oauth_code_verifier", codeVerifier, {
        path: "/",
        secure: process.env.NODE_ENV === "production",
        httpOnly: true,
        maxAge: 60 * 10,
        sameSite: "lax",  
    })
    return Response.redirect(url)
}