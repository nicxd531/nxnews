import { Box, Typography } from '@mui/material'
import React from 'react'

function HomeSection4b({data}) {
  return (
   <Box sx={{width:{xs:"100%",lg:"30%"},color:"white" ,height:{xs:"fit-content",lg:"100%"},display:"flex",justifyContent:"space-between",flexWrap:"wrap",mt:{xs:2,lg:0},px:{xs:1,lg:0}}}>
       {data?.map((data,index)=>{
        return(
            <Box key={index}sx={{height:"16%",width:"100%",display:"flex"}}>
                <Box sx={{width:"30%",objectFit:"cover",height:"100%"}}>
                    <img src={data.mainImage} alt='post image' style={{height:"100%",width:"100%",objectFit:"cover"}}/>
                </Box>
                <Box sx={{ml:2}}>
                    <Typography variant="h6">{data.mainHeading}</Typography>
                    <Typography sx={{mt:3}}>{data.createdAt} <span style={{color:"grey"}}>-15 minutes ago</span></Typography>
                </Box>
            </Box>
        )
       })}
   </Box>
  )
}

export default HomeSection4b