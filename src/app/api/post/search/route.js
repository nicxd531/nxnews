import { errorhandler, responsehandler } from "../../../../../utils/common";
import Post from "../../../../../models/Post";
import { dbConnect } from "../../../../../lib/db-connect";
export async function GET(req) {
  // function for getting user data
  try {
    await dbConnect();
    const searchParams = req.nextUrl.searchParams;
    const query = searchParams.get("query");
    const posts = await Post.find({})
    .select(
      "_id mainHeading categories slug mainImage pH1 p1  image1 pH2 p2 image2 pH3 p3 image3 cH cP likes user createdAt"
    )
    .exec();
    const data = posts
    const filteredPost = query
      ? data?.filter((post) =>
          post?.mainHeading.toLowerCase().includes(query.toLowerCase())
        )
        : data;
        // console.log("im here fp")
        // console.log(filteredPost)
    return Response.json(responsehandler(filteredPost));
  } catch (error) {
    // if error occurs, handle it and return a response
    const err = errorhandler("error from search api");
    return Response.json(err);
  }
}
