import { dbConnect } from "../../../../../lib/db-connect";
import Post from "../../../../../models/Post";
import { errorhandler, responsehandler } from "../../../../../utils/common";

export async function POST(req) {
  // fuction for getting user post
  try {
    // converting request and distructuring body,connect database and find all users post
    await dbConnect();
    const body = await req.json();
    const { userId } = body;
    const posts = await Post.find({ user: userId })
    .select("slug mainHeading categories likes cP mainImage createdAt")
    .exec();
    // if the user has posts  handle the response and return the response
    if (posts) {
      const result = responsehandler({ posts });
      return Response.json(result);
    }
  } catch (error) {
    // if sn erroe occurs handle the error and return the error
    const err = errorhandler(error);
    return Response.json(err);
  }
}
