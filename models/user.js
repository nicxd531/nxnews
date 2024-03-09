import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        index:true

    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    userName:{
        type:String,
    },
    about:{
        type:String,
    },
    followers: [String],
    following: [String],
    occupation:{
        type:String,
    },
    location:{
        type:String,
    },
    email:{
        type:String,
    },
    LinkName:{
        type:String,
    },
    LinkUrl:{
        type:String,
    },
    twitterUsername:{
        type:String,
    },
    twitterUrl:{
        type:String,
    },
    instagramUsername:{
        type:String,
    },
    instagramUrl:{
        type:String,
    }
},{
    timestamps:true
})
mongoose.models={};
export default mongoose.model("User",UserSchema);