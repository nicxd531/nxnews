import { errorhandler, responsehandler, validateAllOnce } from "../../../../../utils/common";
import Post from "../../../../../models/Post";
import slugify from "slugify";
import { dbConnect } from "../../../../../lib/db-connect";
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };



export async function POST(req, ctx) {
  const body =await req.json()
  const mainHeading=body.mainHeading
  const p1=body.p1
  if (req.method !== "POST") {
    return new Response(errorhandler("Invalid Request type"));
  } else {
    
    try{
      if(!body.user){
        errorhandler("Access denied",res)
      }else{
        validateAllOnce({mainHeading,p1})
        await dbConnect()
        console.log("connection secessful")
        const slug = slugify(body.mainHeading,{remove:/[*+~.()'"!:@]/g})
        console.log({slug})
        console.log({body})
        const post = new Post({
          ...body,
          slug,
        });
        const savePost = await post.save();
        if(savePost){
          responsehandler(savePost,body)
        }else{
          errorhandler(savePost,body);
        }
        const result =responsehandler(savePost,body)
        return new Response(JSON.stringify(result));
      }
    }catch(error){
      const err =errorhandler(error,body)
      return new Response(JSON.stringify(err));
    }
}
}