import RegistrationForm from '@/components/auth/RegistrationForm'
import HotTopics from '@/components/reuseable/HotTopics'
import { Box, Typography } from '@mui/material'
import React from 'react'
import RegisterMiddleMan from '@/components/auth/RegisterMiddleMan'

function Register() {
  // main page for registring users
  return (
    <Box sx={{ p: { xs: 2, lg: 4 } }}>
      <RegisterMiddleMan />
    </Box>
  )
}

export default Register