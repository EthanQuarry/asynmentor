import { PrismaClient } from "@prisma/client";
import { Lucia } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
declare global {
    var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;

if ( process.env.NODE_ENV === 'production') {
    prisma = new PrismaClient();
} else {
    if (!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient();
    }
    prisma = global.cachedPrisma;
}

export const db = prisma;
export const adapter = new PrismaAdapter(db.user, db.session);