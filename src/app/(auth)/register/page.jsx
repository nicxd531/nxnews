import RegistrationForm from '@/components/auth/RegistrationForm'
import { Box, Typography } from '@mui/material'
import React from 'react'

function Register() {
  return (
    <Box>
      <Box>
        <Typography>Join  the Nxnews Community</Typography>
        <Typography>Lorem ipsum dolor sit amet consectetur adipiscing elit ornare, vehicula nulla dictumst eget cum rhoncus neque primis, dictum blandit sagittis at molestie non orci. Eros purus urna nisi aliquam hac interdum per ut, torquent imperdiet leo turpis quam mollis in nam phasellus, nibh senectus scelerisque mi iaculis bibendum aenean.</Typography>
      </Box>
      <RegistrationForm/>
    </Box>
  )
}

export default Register