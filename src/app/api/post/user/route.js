import { dbConnect } from "../../../../../lib/db-connect";
import Post from "../../../../../models/Post";
import { errorhandler, responsehandler } from "../../../../../utils/common";



export async function POST(req) {
  try {
    // converting request and distructuring body
    await dbConnect();
    const body = await req.json();
    console.log(body)
    const { userId }= body
    const posts = await Post.find({user:userId} ).select("slug mainHeading categories likes cP mainImage createdAt").exec();
    if(posts){
        const result =responsehandler({posts})
        return new Response(JSON.stringify(result));
    }
  } catch (error) {
    const err = errorhandler({ error, body });
    return new Response(JSON.stringify(err));
  }
 
}
