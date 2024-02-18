import { DatabaseUser, Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import { db } from "@/config/db";


const adapter = new PrismaAdapter(db.session, db.user);;

export const auth = new Lucia(adapter, {
    sessionCookie: {
        expires: false,
        attributes: {
            secure: process.env.NODE_ENV === "production",
        },
    },
    getUserAttributes: (attributes) => {
        return {
            // attributes has the type of DatabaseUserAttributes
            githubId: attributes.github_id,
            username: attributes.username
        }
    }

});

declare module "lucia" {
    interface Register {
        Lucia: typeof auth;
        DatabaseUserAttributes: DatabaseUserAttributes;
    }
}

interface DatabaseUserAttributes {
	github_id: number;
	username: string;
}