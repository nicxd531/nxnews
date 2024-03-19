"use client"
import { Box, Button, Typography } from '@mui/material'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';



function HomeSection4a({ data }) {
    return (
        <Box sx={{ height: "100%", width: { xs: "100%", lg: "62%" } }}>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                {data?.map((data, index) => {
                    return (
                        <SwiperSlide key={index} style={{ position: "relative" }}>
                            <img src={data.mainImage} alt='post image' />
                            <Box sx={{ color:"white",position: "absolute",top:0,width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"100%",flexDirection:"column"}}>
                                <Typography  sx={{ display: "flex", alignItems: "center", fontSize: { xs: "0.8rem", lg: "1.2rem" }, mb: { xs: 1, lg: 3 } }}><Box sx={{ height: { xs: "10px", lg: "15px" }, width: { xs: "10px", lg: "15px" }, backgroundColor: "grey", borderRadius: "50%", marginRight: "6px" }}></Box> {data.categories} Topic</Typography>
                                <Typography variant="h4" sx={{width:"30%",mb:2}}>{data.mainHeading}</Typography>
                                <Button variant="outlined" sx={{color:"white",borderColor:"white",fontSize:"1rem",textTransform:"capitalize"}}> Read More</Button>
                            </Box>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </Box>
    )
}

export default HomeSection4a