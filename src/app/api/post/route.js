import { dbConnect } from "../../../../lib/db-connect";
import Post from "../../../../models/Post";
import { errorhandler, responsehandler } from "../../../../utils/common";

export async function GET(req) {
  // fuction for getting user post
  try {
    // connect database 
    await dbConnect();
    const posts = await Post.find({})
    .select( "_id mainHeading categories slug mainImage pH1 p1  image1 pH2 p2 image2 pH3 p3 image3 cH cP likes user createdAt")
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
