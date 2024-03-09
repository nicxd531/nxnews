import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../../../models/user";
import bcrypt from "bcryptjs"
import { dbConnect } from "../../../../../lib/db-connect";
import { validateAllOnce } from "../../../../../utils/common";


const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      // credentials:{
      //   email:{label:"Email",placeholder:"Enter Email"},
      //   password:{label:"Password",placeholder:"Password"}

      // },
      async authorize(credentials) {
        try{
          await dbConnect()
        const  {email, password} =credentials
        validateAllOnce({email,password})
           const user = await User.findOne({email}).exec();
           if(!user){
            throw new Error("something went wrong")
           }
           const userDoc = user._doc;
          const isMatched= await  bcrypt.compare(password,userDoc.password);

          if(user && isMatched){
            delete userDoc.password
    
            return userDoc
          }else{
            // return null
            throw new Error("Email or Password incorrect")
          }
        }catch(error){
              throw new Error(error)
        }

        

      },
    }),
  ],
 
  callbacks:{
    
    
    async session ({session, user, token}){
      console.log('session',{token});
      if(token && token.id ){
        session.user.id =  token.id
      }
      return session
    },
    async jwt ({token,user,account,profile,isNewUser}){
      
      if(user && user._id ){
        token.id =  user._id
      }
      console.log('jwt',{token});
      return token 
    }
  },
  secret: process.env.NEXTAUTH_SECRET
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
