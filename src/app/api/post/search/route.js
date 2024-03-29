import {
  errorhandler,
  responsehandler,
} from "../../../../../utils/common";
import { getAllPost } from "../../../../../client/request";

export async function GET(req) {
  
  // function for getting user data
  try {
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query");
    const posts = await getAllPost();
    const data =posts?.body?.posts
    const filteredPost = query
      ? data?.filter((post) => post?.mainHeading.toLowerCase().includes(query.toLowerCase()))
      : data;
    return Response.json(responsehandler(filteredPost));
  } catch (error) {
    // if error occurs, handle it and return a response
    const err = errorhandler("error from search api");
    return Response.json(err);
  }
}
