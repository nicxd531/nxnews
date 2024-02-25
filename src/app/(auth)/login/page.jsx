"use client"
import LoginEmail from '@/components/auth/LoginEmail';
import LoginForm from '@/components/auth/LoginForm';
import LatestNews from '@/components/reuseable/LatestNews';
import { Box } from '@mui/material'
import React from 'react'

function LogIn() {


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