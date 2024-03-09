import mongoose from "mongoose"


const postSchema = new mongoose.Schema({
    mainHeading:{
        type:String,
        required:true
    },
    slug:{
        type:String,
        required:true,
        unique:true
    },
    mainImage:{
        type:String
       
    },
    pH1:{
        type:String
    },
    p1:{
        type:String,
        required:true
    },
    imageP1:{
        type:String
    },
    pH2:{
        type:String
    },
    p2:{
        type:String
    },
    imageP2:{
        type:String
    },
    pH3:{
        type:String
    },
    p3:{
        type:String
    },
    imageP3:{
        type:String
    },
    likes: [String]
    ,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{
    timestamps:true
}
)

mongoose.models={}


export default mongoose.model("Post",postSchema)