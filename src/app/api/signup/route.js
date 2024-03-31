import { dbConnect } from "../../../../lib/db-connect";
import User from "../../../../models/user";
import {
  errorhandler,
  responsehandler,
  validateAllOnce,
} from "../../../../utils/common";
import bcrypt from "bcryptjs";
// Post function for signing up and recieving request
export async function POST(req) {
  if (req.method !== "POST") {
    //return error
    return new Response.json(errorhandler("Invalid Request type"));
  } else {
    try {
      const body = await req.json();
      // distructure body
      const { name, email, password } = body;
      validateAllOnce(body);
      //no error connect to database ,hash password create new user and save user
      await dbConnect();
      const hashPassword = await bcrypt.hash(password, 8);
      const user = new User({ ...body, password: hashPassword });
      const saveUser = await user.save();
      // if save user is true ,get data ,delete password ,create response and send response
      if (saveUser) {
        const userDoc = saveUser._doc;
        delete userDoc.password;
        const main = responsehandler(userDoc);
        return Response.json(main);
      } else {
        // if save user is false get error and return the erroe response
        const error = errorhandler("something went wrong");
        return Response.json(error);
      }
    } catch (error) {
      // catch the error then return the error through the handler
      const err = errorhandler(error);
      return  Response.json(err);
    }
  }
}
