import { dbConnect } from "../../../../../../../lib/db-connect";
import Post from "../../../../../../../models/Post";
import { errorhandler, responsehandler } from "../../../../../../../utils/common";



export async function DELETE(req,{params}) {
  try {
    // converting request and distructuring body
    await dbConnect();
    const body =  params
    console.log(body,"from api")
    
    

    const { id }= body
    const posts = await Post.deleteOne({ _id:id })
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
 