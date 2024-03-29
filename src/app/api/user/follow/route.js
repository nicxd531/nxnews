import { dbConnect } from "../../../../../lib/db-connect";
import { errorhandler, responsehandler } from "../../../../../utils/common";
import User from "../../../../../models/user";

export async function POST(req) {
  // function for getting user data , content creators dat and follow and following 
  try {
    // converting request and distructuring body,connect to database,find that particular post
    const body =  await req?.json();
    const { contentCreatorId,userId } = body;
    await dbConnect();
    const contentCreator = await User?.findOne({ _id: contentCreatorId })
    const user = await User?.findOne({ _id: userId })
    // if user is true handle the result and return a reponse
    const checkContentCreator= contentCreator?.followers?.includes(userId)
    const checkUser= user?.following?.includes(contentCreatorId)
    if (!user || !contentCreator) {
      return new Response.json(errorhandler("user Not Found"));
    }
    //for content creator 
    if(contentCreator?.followers && !checkContentCreator){
      const newData = [...contentCreator?.followers,userId]
      if(contentCreator?.followers && newData) contentCreator.followers = newData
      const result= contentCreator.save()
    }
    // check for user
    if(user?.following && !checkUser){
      const newData2 =[ ...user.following,contentCreatorId]
      if(user?.following && newData2) user.following = newData2
      const result= await user.save()
    }
    // return tru when you get here that we are following content creator
    return Response.json(responsehandler(true));

  } catch (error) {
    // if error occurs, handle it and return a response
    const err = errorhandler(error);
    return Response.json("api error");
  }
}
