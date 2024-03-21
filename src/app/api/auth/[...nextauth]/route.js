import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../../models/User";
import bcrypt from "bcryptjs";
import { dbConnect } from "../../../../../lib/db-connect";
import { validateAllOnce } from "../../../../../utils/common";
// next auth for sign in authentication
const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      // authorization method for verifying credentials
      async authorize(credentials) {
        try {
          // connect to database
          await dbConnect();
          // destructuring of credentials
          const { email, password } = credentials;
          // validate that emaail and password has been inputed
          validateAllOnce({ email, password });
          // find exact user
          const user = await User.findOne({ email }).exec();
          // confirm user is available
          if (!user) {
            throw new Error("something went wrong");
          }
          const userDoc = user._doc;
          // match password
          const isMatched = await bcrypt.compare(password, userDoc.password);
          // if user and password is valid
          if (user && isMatched) {
            delete userDoc.password;
            return userDoc;
          } else {
            // return null
            throw new Error("Email or Password incorrect");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],

  callbacks: {
    async session({ session, user, token }) {
      // check if token and token.id is available
      if (token && token.id) {
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      // if user and use._id is available
      if (user && user._id) {
        token.id = user._id;
      }
      // return token;
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
