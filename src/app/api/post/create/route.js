import { errorhandler, responsehandler, validateAllOnce } from "../../../../../utils/common";
import Post from "../../../../../models/Post";
import slugify from "slugify";
import { dbConnect } from "../../../../../lib/db-connect";


export async function POST(req, ctx) {
  // converting request and distructuring body
  const body =await req.json()
  const mainHeading=body.mainHeading
  const cP = body.cP
  const categories =body.categories
  // confirming it a post request
  if (req.method !== "POST") {
    return new Response(errorhandler("Invalid Request type"));
  } else {
    try{
      const Access ="Access denied"
      if(!body.user){
        errorhandler({Access,res})
      }else{
        validateAllOnce({mainHeading,categories,cP})
        // connect to database
        await dbConnect()
        console.log("connection secessful")
        const slug = slugify(body.mainHeading,{remove:/[*+~.()'"!:@]/g})
        const post = new Post({
          ...body,
          slug:slug.toLowerCase(),
        });
        const savePost = await post.save();
        if(savePost){
          responsehandler({savePost,body})
        }else{
          errorhandler({savePost,body});
        }
        const result =responsehandler({savePost,body})
        return new Response(JSON.stringify(result));
      }
    }catch(error){
      const err =errorhandler({error,body})
      return new Response(JSON.stringify(err));
    }
}
}