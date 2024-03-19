import { Box, Typography } from '@mui/material'
import React from 'react'

function HomeSection3() {
  return (
    <Box sx={{height:"500px",width:"100%",mb:3}}>
        <Box sx={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <Typography variant="h4" sx={{textAlign:"center",fontWeight:"bold",textTransform:"capitalize",width:{lg:"30%"},fontSize:{xs:"1.4rem"},lg:"5rem"}}>the audience's top choice of best films</Typography>
        </Box>
    </Box>
  )
}

export default HomeSection3