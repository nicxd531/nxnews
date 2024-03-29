import { dbConnect } from "../../../../../lib/db-connect";
import { errorhandler, responsehandler } from "../../../../../utils/common";
import Post from "../../../../../models/Post";

export async function POST(req) {
  // function for getting user data
  try {
    // converting request and distructuring body,connect to database,find that particular post
    const body = await req?.json();
    const { postId, userId, action, postLikes } = body;
    await dbConnect();
    const post = await Post?.findOne({ _id: postId });

    // check if user liked it already or not and check if post didnot come in
    const checkLikes = postLikes.includes(userId);
    if (!post) {
      return Response.json(errorhandler("user Not Found"));
    }
    // like functions
    if (postLikes && !checkLikes && action == "like") {
      const newData = [...postLikes, userId];
      if (postLikes && newData) post.likes = newData;
      const result = await post.save();
      const data = { liked: true, newLikes: result?.likes };
      return Response.json(responsehandler(data));
    }
    // unLike Functions
    if (postLikes && checkLikes && action == "unlike") {
      const newData = postLikes.filter((item) => item !== userId);
      if (postLikes && newData) post.likes = newData;
      const result = await post.save();
      const data = { liked: false, newLikes: result?.likes };
      return Response.json(responsehandler(data));
    }
    // if any of the above condition fails default to this
    const data = { liked: false, newLikes: postLikes };
    return Response.json(responsehandler(data));
  } catch (error) {
    // if error occurs, handle it and return a response
    const err = errorhandler(error);
    return Response.json(err);
  }
}
