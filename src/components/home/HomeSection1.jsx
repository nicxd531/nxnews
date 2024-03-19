import { ArrowRight } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'


function HomeSection1({ post }) {
    const hotTopic = post?.slice(0, 1)
    const others = post?.slice(2, 5)
    console.log(hotTopic[0]?.mainImage)


    return (
        <Box sx={{ p: { xs: 2, lg: 4 } }}>
            <Box sx={{ width: "100%", height: { xs: "120px", lg: "250px" }, display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Box sx={{ height: "100%", width: { xs: "49%", lg: "39%" }, objectFit: "cover" }}>
                    <img src={hotTopic[0]?.mainImage} alt='post image' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
                <Box sx={{ height: "100%", width: { xs: "49%", lg: "59%" } }}>
                    <Typography variant='h5' sx={{ display: "flex", alignItems: "center", fontSize: { xs: "1rem", lg: "1.7rem" }, mb: { xs: 1, lg: 3 } }}><Box sx={{ height: { xs: "10px", lg: "15px" }, width: { xs: "10px", lg: "15px" }, backgroundColor: "black", borderRadius: "50%", marginRight: "6px" }}></Box> Hot Topic</Typography>
                    <Typography variant="h4" sx={{ fontSize: { xs: "1.5rem", lg: "3.5rem" }, fontWeight: "bold", mb: { xs: 2, lg: 4 } }}>{hotTopic[0]?.mainHeading}</Typography>
                    <Typography variant="h6" sx={{ fontSize: { xs: "0.8rem", lg: "2rem" }, textTransform: "capitalize", mb: { lg: 4 } }}>{hotTopic[0]?.user?.location}, {hotTopic[0]?.createdAt}</Typography>
                    <Button sx={{ textTransform: "capitalize", color: "black", fontSize: { xs: "0.7rem", lg: "1rem" } }}>Read more <ArrowRight /></Button>
                </Box>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
                {others?.map((data,index) => {
                    return (
                        <Box key={index} sx={{width:{xs:"100%",lg:"33%"},height:{xs:"70px",lg:"100px"},mb:1,display:"flex"}}>
                            <Box sx={{width:"30%",height:"100%", objectFit: "cover" }}>
                                <img src={data?.mainImage} alt='post image'  style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
                            </Box>
                            <Box sx={{ml:2}}>
                                <Typography variant="h5" sx={{fontSize: { xs: "1.3rem", lg: "1.7rem" },fontWeight:"bold",mb:3}}>{data?.mainHeading}</Typography>
                                <Typography sx={{fontWeight:"bold",fontSize: { xs: "0.9rem", lg: "1rem" }}}>{data?.createdAt}<span className='text-muted'>- 15 minutes ago</span></Typography>
                            </Box>
                        </Box>
                    )
                })

                }
            </Box>
        </Box>
    )
}

export default HomeSection1