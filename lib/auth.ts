import {
  Awaitable,
  NextAuthOptions,
  RequestInternal,
  User,
  getServerSession,
} from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import prisma from "./prismadb";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "ornek@ornek.com" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials || !credentials.password || !credentials.email) {
          return null;
        }

        const dbUser = await prisma.user.findFirst({
          where: { email: credentials.email },
        });

        if (dbUser && dbUser.hashedPassword === credentials.password) {
          const { hashedPassword, createdAt, id, ...dbUserWithoutPassword } =
            dbUser;

          return Promise.resolve({
            id: id,
            ...dbUserWithoutPassword,
          });
        }

        return Promise.resolve(null);
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
};
