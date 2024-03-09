import { dbConnect } from "../../../../lib/db-connect"
import User from "../../../../models/user"
import { errorhandler, responsehandler, validateAllOnce } from "../../../../utils/common"
import bcrypt from "bcryptjs"

export  async  function POST(req){
    
    
//   const data = await req.json()
//   const {name ,email,password}= data
//   console.log( responsehandler(data))

 
    if(req.method !== "POST"){
        //return error
      return new Response(errorhandler("Invalid Request type"))
    }else{
        try{
            const body =await req.json()
            const {name ,email,password}= body
          
            validateAllOnce(body)
            
            //no error connect
            await dbConnect()
    
            const hashPassword = await bcrypt.hash(password, 8)
            const user = new User({...body,password:hashPassword});
            const saveUser = await user.save()
            if(saveUser){
                console.log("success")
                const userDoc= saveUser._doc
                delete userDoc.password
                const main =responsehandler(userDoc)
               return new Response(JSON.stringify(main))
            }else{
              const error= errorhandler("something went wrong")
               return new Response(JSON.stringify(error))
            }
           
        }catch(error){
           
            const err =errorhandler(error)
            return new Response (JSON.stringify(err))
        }
    }
   
  

    }