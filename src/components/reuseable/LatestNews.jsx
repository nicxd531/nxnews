import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import post from "../../../data/post.json"
import HomePostTemplate2 from "./HomePostTemplate2"
import { KeyboardArrowLeft,KeyboardArrowRight } from '@mui/icons-material'
KeyboardArrowLeft

function LatestNews() {
  const filteredData = post.slice(0, 5)
  return (
    <Box sx={{ width: { xs: "100%", lg: "60%" }, mt: { xs: 6, lg: 6 }, display: "flex", flexDirection: "column" }}>
      <Typography variant='h3' sx={{ fontSize: { xs: "20px", lg: "40px" }, width: { x: "100%", lg: "80%" }, mx: { xs: 2, lg: "auto" }, fontWeight: "bold" }}>Welcome back, here is the latest news today!!</Typography>
      <Box sx={{ overflow: "hidden" ,p:4,width:"100%",position:"relative"}}>
        <IconButton sx={{position:"absolute",zIndex:3,top:120,borderRadius:"50%",bgcolor:"#fff",p:0}}><KeyboardArrowLeft sx={{width:"44px",height:"44px"}}/></IconButton>
        <IconButton sx={{position:"absolute",zIndex:3,top:120,right:0,borderRadius:"50%",bgcolor:"#fff",p:0}}><KeyboardArrowRight sx={{width:"44px",height:"44px"}}/></IconButton>
        <Box sx={{display: "flex",width:"1500px",flexDirection:"row",justifyContent:"space-between"}}>
          {
            filteredData?.map((data, index) => {
              return (
                <HomePostTemplate2 data={data} key={index} />
              )
            })
          }
        </Box>
      </Box>
    </Box>
  )
}

export default LatestNews