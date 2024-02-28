import axios from "axios"
import { baseUrl } from "./config"
import { errorhandler, getValue } from "../utils/common"

export const signUp = async (payload)=>{
    try{
        const res = await axios.post(baseUrl+`/signup`,payload)
        return res.data
    }catch(error){
        return getValue(error,["response","data"])
    }
}