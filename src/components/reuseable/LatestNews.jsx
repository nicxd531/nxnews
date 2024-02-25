import { Box, Typography } from '@mui/material'
import React from 'react'


function LatestNews() {
  return (
    <Box sx={{width:{xs:"100%",lg:"60%"}, mt: { xs: 6, lg: 6 }}}>
        <Typography variant='h3' sx={{fontSize:{xs:"20px",lg:"40px"},width:{x:"100%",lg:"80%"},mx:{xs:2,lg:"auto"},fontWeight:"bold"}}>Welcome back, here is the latest news today!!</Typography>
    </Box>
  )
}

export default LatestNews