import { dbConnect } from "../../../../../../../lib/db-connect";
import Post from "../../../../../../../models/Post";
import {
  errorhandler,
  responsehandler,
} from "../../../../../../../utils/common";

export async function DELETE(req, { params }) {
  // function for deleting post
  try {
    // converting request and distructuring body,connectin to data based,find post and delete it 
    await dbConnect();
    const body = params;
    const { id } = body;
    const posts = await Post.deleteOne({ _id: id });
    // if post is deleted ,handle the result and return the 
    if (posts) {
      const result = responsehandler({ posts });
      return Response.json(result);
    }
  } catch (error) {
    // if error occurs handle it and return it 
    const err = errorhandler(error);
    return Response.json(err);
  }
}
