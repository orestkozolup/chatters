import NextAuth from "next-auth/next";
import { NextAuthOptions } from "next-auth";

import { authOptions } from "../../../../../lib/authOptions";

const handler = NextAuth(authOptions as NextAuthOptions);

export { handler as GET, handler as POST }