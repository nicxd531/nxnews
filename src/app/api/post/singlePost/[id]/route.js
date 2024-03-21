import { dbConnect } from "../../../../../../lib/db-connect";
import Post from "../../../../../../models/Post";
import { errorhandler, responsehandler } from "../../../../../../utils/common";

export async function GET(req, { params }) {
  // function for getting single post
  try {
    // converting request and distructuring body,connect to database,find that particular post
    await dbConnect();
    const body = params;
    const { id } = body;
    const posts = await Post.findOne({ _id: id })
      .select(
        "_id mainHeading categories slug mainImage pH1 p1  image1 pH2 p2 image2 pH3 p3 image3 cH cP likes user createdAt"
      )
      .populate("user", "_id name")
      .exec();
    // if post is true handle the result and return a reponse
    if (posts) {
      const result = responsehandler({ posts });
      return Response.json(result);
    }
  } catch (error) {
    // if error occurs, handle it and return a response
    const err = errorhandler(error);
    return Response.json(err);
  }
}
