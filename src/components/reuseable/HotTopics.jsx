import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'

function HotTopics() {
  return (
    <Box sx={{width:"100%",mt:6}}>
        <Box sx={{width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <Typography variant="h4" sx={{fontWeight:"bold",fontSize:{xs:"20px",lg:"32px"}}}>Hot Topics News</Typography>
            <Button variant="contained">View All</Button>
        </Box>
        <Divider variant="inset" sx={{mt:2,ml:0,height:"2px",size:"2px"}}/>
    </Box>
  )
}

export default HotTopics