import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

import dns from "node:dns/promises";
import { jwt } from "better-auth/plugins";
dns.setServers(["8.8.8.8", "8.8.4.4"]);


const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('petadopt');

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
    emailAndPassword: {
        enabled: true,
    },
    plugins: [
        jwt(),
    ],
    session: {
        cookieCache: {
            enabled: true,
            strategy: "jwt",
            maxAge: 60 * 24 * 60 * 60
        }
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },

});