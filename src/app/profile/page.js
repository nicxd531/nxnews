"use client"
import React, { useEffect, useState } from "react";
import { Alert, Box, Typography } from "@mui/material";
import { getSession } from "next-auth/react";
import {getUserPost} from "../../../client/request";
import { errorhandler, responsehandler } from "../../../utils/common";
import { useRouter } from "next/navigation";
import BasicPostTemplate from "../../components/Skelentons/BasicPostTemplate"
import UsersPosts from "../../components/profile/UsersPosts"




const  ProfileArticles =  ()=> {
  const [data,setdata]=React.useState(null)
  const [session,setSession]=React.useState(false)
  const [error,setError]=React.useState(null)
  const [loading,setLoading]=React.useState(true)
  const route =useRouter()
 
  
   console.log(data,"real post",session)
   console.log(error)
  
 useEffect(()=>{
  const fetchId = async ()=>{
    try{
      setError(false)
      setLoading(true)
      const session = await getSession();
      const userId=session.user.id
      const post = await getUserPost({userId})
      console.log(post ,"nextpost")
     setdata(post)
     setSession(session)
     if(!session){
      route.replace("/")
     }
     if(post.hasError){[
      setError("failed to load")
     ]}
     setLoading(false)
    }catch(error){

      setError( errorhandler(error))
    }
  }
  fetchId()

 },[])
const main =!error && <UsersPosts data={data}/>
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Typography variant="h3" sx={{textAlign:"center",mt:{xs:2,lg:4},fontWeight:"Bold",fontSize:{xs:"1.7rem",lg:"3rem"},textTransform:"capitalize"}}> Welcome to Posts {session ? session.user.name : "user"} </Typography>
      {error && <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
        <Alert severity={error == "Log in sucessful" ? "success" : "error"} sx={{ width: "80%", fontSize: { xs: "12px", lg: "16px", textTransform: "capitalize" }, mt: 1 }}> {error}</Alert>
      </Box>}
          {   loading ? <BasicPostTemplate/> : main }
    </Box>
  );
}

export default ProfileArticles;
