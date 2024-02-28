export const errorhandler=(data)=>{
   const  error={
        hasError:true,
        errorMessage:data
    }
    return error
}

export const responsehandler=(data)=>{
    const newData={
        hasError:false,
        body:data
    }
    return newData
}


export const validateAllOnce = (fields)=>{
    for (let key in fields){
        if (fields[key].trim() === ""){
            console.log(key)
            throw `${key} required`
        }
    }
}


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
        console.log(error)
        return defaultValue;
    }

}