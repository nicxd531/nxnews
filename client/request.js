import axios from "axios"
import { baseUrl } from "./config"
import { errorhandler, getValue } from "../utils/common"
// sign up function for handing api connection and sending request
export const signUp = async (payload)=>{
    try{
        const res = await axios.post(baseUrl+`/signup`,payload)
        return res.data
    }catch(error){
        return getValue(error,["response","data"])
    }
}
// create post function for handling post creation and sending request to the server
export const CreatePost = async (form)=>{
    try{
       
        const res = await axios.post(baseUrl+`/post/create`,form)
        return res.data
    }catch(error){
        return getValue(error,["response","data"])
    }
}
 
// get user post function for handling post creation and sending request to the server
export const getUserPost = async (payload)=>{
    
    try{
        const res = await axios.post(baseUrl+`/post/user`,payload)
        return res.data
    }catch(error){
        return errorhandler(error)
    }
}
// get user post function for handling post creation and sending request to the server
export const deletePost = async (payload)=>{
    try{
        const res = await axios.delete(baseUrl+`/post/user/delete/${payload}`)
        return res.data
    }catch(error){
        return errorhandler(error)
    }
}
 
// get user post function for handling post creation and sending request to the server
export const getSinglePost = async (id)=>{
    console.log(id,"from request")
    try{
        const res = await axios.get(baseUrl+`/post/singlePost/${id}`)
        return res.data
    }catch(error){
        return errorhandler(error)
    }
}
 

 
