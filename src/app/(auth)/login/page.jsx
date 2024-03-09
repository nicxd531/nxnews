"use client"
import LoginForm from '../../.././components/auth/LoginForm';
import LatestNews from '../../.././components/reuseable/LatestNews';
import { Box } from '@mui/material'
import React from 'react'
import { useStore } from '../../../../client/context'
import { getValue } from '../../../../utils/common'
import { useRouter } from 'next/navigation';
import Loading from '../../.././components/reuseable/Loading'



function LogIn() {
  const [state, dispatch] = useStore()
    const user = getValue(state,["user"],null)
    const router = useRouter()
    if (user && user.authenticating){
        return  <Box sx={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}><Loading height={"400px"} width={"400px"}/></Box>
    }
    if(user && user.authenticated){
      router.replace("/");
      return null
  }
  return (
    <Box sx={{mb:6}}>
      <Box sx={{display:"flex",flexDirection:{xs:"column-reverse",lg:"row"}}}>
        <LatestNews/>
        <LoginForm />
      </Box>
    </Box>
  )
}

export default LogIn