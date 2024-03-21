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
    avatarImage:{
        type:String,
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
    linkName:{
        type:String,
    },
    linkUrl:{
        type:String,
    },
    twitterUsername:{
        type:String,
    },
    twitterLink:{
        type:String,
    },
    instaUsername:{
        type:String,
    },
    instaLink:{
        type:String,
    }
},{
    timestamps:true
})
mongoose.models={};
export default mongoose.model("User",UserSchema);