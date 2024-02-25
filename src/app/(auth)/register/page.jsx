import RegistrationForm from '@/components/auth/RegistrationForm'
import HotTopics from '@/components/reuseable/HotTopics'
import { Box, Typography } from '@mui/material'
import React from 'react'

function Register() {
  return (
    <Box sx={{ p: { xs: 2, lg: 4 } }}>
      <Box sx={{ mt: { xs: 4, lg: 6 } }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" ,fontSize:{lg:"34px"}}}>Join  the Nxnews Community</Typography>
        <Typography sx={{ width: { xs: "100%", lg: "400px" }, mx: "auto", textAlign: "center", mt: 2, lineHeight: "25px" }}>Lorem ipsum dolor sit amet consectetur adipiscing elit ornare, vehicula nulla dictumst eget cum rhoncus neque primis, dictum blandit sagittis at molestie non orci.</Typography>
      </Box>
      <RegistrationForm />
      <HotTopics/>
    </Box>
  )
}

export default Register