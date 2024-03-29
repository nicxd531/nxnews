import { dbConnect } from "../../../../../../../lib/db-connect";
import { errorhandler, responsehandler } from "../../../../../../../utils/common";
import User from "../../../../../../../models/user";

export async function GET(req, { params }) {
  // function for getting user data
  try {
    // converting request and distructuring body,connect to database,find that particular post
    await dbConnect();
    const body = params;
    const { id } = body;
    const user = await User.findOne({ _id: id })
    // if user is true handle the result and return a reponse
    if (user) {
      const result = responsehandler(user);
      return Response.json(result);
    }
  } catch (error) {
    // if error occurs, handle it and return a response
    const err = errorhandler(error);
    return Response.json(err);
  }
}
