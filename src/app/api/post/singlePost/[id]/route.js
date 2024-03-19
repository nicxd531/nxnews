import { dbConnect } from "../../../../../../lib/db-connect";
import Post from "../../../../../../models/Post";
import { errorhandler, responsehandler } from "../../../../../../utils/common";



export async function GET(req,{params}) {
  try {
    // converting request and distructuring body
    await dbConnect();
    const body =  params
    console.log(body,"from api")
    const { id }= body
    const posts = await Post.findOne({ _id:id }).select("_id mainHeading categories slug mainImage pH1 p1  image1 pH2 p2 image2 pH3 p3 image3 cH cP likes user createdAt").populate("user","_id name").exec()
    if(posts){
        const result =responsehandler({posts})
        return new Response(JSON.stringify(result));
    }
  } catch (error) {
    const err = errorhandler(error );
    console.log(err,"this is the session")
    return new Response(JSON.stringify(err));
  }
}
 