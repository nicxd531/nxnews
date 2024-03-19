import { Box, Typography } from '@mui/material'
import React from 'react'
import post from "../../../data/post.json"

function AsideNews() {
    const data = post?.slice(1,6)
  return (
   <Box sx={{pt:3, width:"100%",height:{xs:"fit-content",lg:"100%"},display:"flex",justifyContent:"space-between",flexWrap:"wrap",mt:{xs:2,lg:0},px:{xs:1,lg:0}}}>
       {data?.map((data,index)=>{
        return(
            <Box key={index}sx={{height:"16%",width:"100%",display:"flex"}}>
                <Box sx={{width:"30%",objectFit:"cover",height:"100%"}}>
                    <img src={data.mainImage} alt='post image' style={{height:"100%",width:"100%",objectFit:"cover"}}/>
                </Box>
                <Box sx={{ml:2}}>
                    <Typography variant="h6">{data.mainHeading}</Typography>
                    <Typography sx={{mt:2,fontSize:"0.8rem"}}>{data.createdAt} <span style={{color:"grey"}}>-15 minutes ago</span></Typography>
                </Box>
            </Box>
        )
       })}
   </Box>
  )
}

export default AsideNews