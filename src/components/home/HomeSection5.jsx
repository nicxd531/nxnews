"use client"
import { Box, Button, Typography } from '@mui/material'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';


function HomeSection5({ post }) {
  const data = post.slice(7, 12)
  return (
    <Box sx={{ height: "500px", mb: 3 ,mt:10}}>
      <>
        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {data?.map((data, index) => {
            return (
              <SwiperSlide key={index} style={{ position: "relative" }}>
                <img src={data.mainImage} alt='post image' sx={{ width: "100%", height: "100%" }} />
                <Box sx={{ position: "absolute",top:280,left:50,width:{lg:"30%"} ,textAlign:"start"}}>
                  <Typography sx={{ display: "flex", alignItems: "center", fontSize: { xs: "0.8rem", lg: "1.2rem" }, mb: { xs: 1, lg: 3 } }}><Box sx={{ height: { xs: "10px", lg: "15px" }, width: { xs: "10px", lg: "15px" }, backgroundColor: "red", borderRadius: "50%", marginRight: "6px" }}></Box> {data.categories} Topic</Typography>
                  <Typography variant="h3" sx={{ width: "100%", mb: 4 }}>{data.mainHeading}</Typography>
                  <Button variant="outlined" sx={{ color: "white", borderColor: "white", fontSize: "1rem", textTransform: "capitalize" }}> Read More</Button>
                </Box>
              </SwiperSlide>
            )
          })}

        </Swiper>
      </>
    </Box>
  )
}

export default HomeSection5