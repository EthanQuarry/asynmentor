import { auth, validateRequest } from "@/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(): Promise<void | Response> {
    const { session } = await validateRequest();

    if (!session) {
        return redirect("/login");
    }
	await auth.invalidateSession(session.id);

	const sessionCookie = auth.createBlankSessionCookie();
	cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
	return redirect("/login");
 }

