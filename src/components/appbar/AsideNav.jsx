"use client"
import { Box, Button } from '@mui/material'
import React from 'react'

function AsideNav() {
    const [clicked ,setClicked]= React.useState("New Released")
  return (
    <Box sx={{width:"100%"}}>
        <Button className={`text-muted ${clicked == "New Released"?"clicked":null}`} sx={{textTransform:"capitalize"}} onClick={()=>setClicked("New Released")}>New Released</Button>
        <Button  className={`text-muted ${clicked == "Hot Topic"?"clicked":null}`} sx={{textTransform:"capitalize"}}  onClick={()=>setClicked("Hot Topic")}>Hot Topic</Button>
        <Button  className={`text-muted ${clicked == "Popular"?"clicked":null}` }sx={{textTransform:"capitalize"}}  onClick={()=>setClicked("Popular")}> Popular</Button>
    </Box>
  )
}

export default AsideNav