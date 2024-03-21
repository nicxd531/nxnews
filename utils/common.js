// error handling function
export const errorhandler=(data)=>{
   const  error={
        hasError:true,
        errorMessage:data
    }
    return error
}
// response handler function
export const responsehandler=(data)=>{
    const newData={
        hasError:false,
        body:data
    }
    return newData
}
// validation function
export const validateAllOnce = (fields)=>{
    for (let key in fields){
        if (fields[key].trim() === ""){
            console.log(key)
            throw `${key} required`
        }
    }
}
// get value function
export const getValue =(obj,path,defaultValue)=>{
    try{

        if(!(obj instanceof Array)){
            let myValue = obj
            for(let key of path){
                if(!(key in myValue)){
                    return defaultValue;
                }else{
                    myValue=myValue[key]
                }
            }
            return myValue
        }
    }catch(error){
        return defaultValue;
    }

}