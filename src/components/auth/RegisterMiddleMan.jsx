"use client"
import React from 'react'
import { Box, Typography } from '@mui/material'
import RegistrationForm from './RegistrationForm'
import HotTopics from '../reuseable/HotTopics'
import { useStore } from '../../../client/context'
import { getValue } from '../../../utils/common'
import { useRouter } from 'next/navigation'
import Loading from '../reuseable/Loading'

function RegisterMiddleMan() {
  // middle component between component and main page
  // states , getuser and router
  const [state, dispatch] = useStore()
  const user = getValue(state, ["user"], null)
  const router = useRouter()
  // authenticating & authentication verification
  if (user && user.authenticating) {
    return <Box sx={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}><Loading height={"400px"} width={"400px"} /></Box>
  }
  if (user && user.authenticated) {
    router.replace("/");
    return null
  }
  return (
    <>
      <Box sx={{ mt: { xs: 4, lg: 6 } }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center", fontSize: { lg: "34px" } }}>Join  the Nxnews Community</Typography>
        <Typography sx={{ width: { xs: "100%", lg: "400px" }, mx: "auto", textAlign: "center", mt: 2, lineHeight: "25px" }}>Lorem ipsum dolor sit amet consectetur adipiscing elit ornare, vehicula nulla dictumst eget cum rhoncus neque primis, dictum blandit sagittis at molestie non orci.</Typography>
      </Box>
      <RegistrationForm />
      <HotTopics />
    </>
  )
}

export default RegisterMiddleMan