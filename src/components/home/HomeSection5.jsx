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
import NoPost from '../reuseable/NoPost'
import { AnimatePresence, motion } from 'framer-motion'
import AlertSuccess from '../reuseable/AlertSuccess'
import AlertError from '../reuseable/AlertError'
import Link from 'next/link';


function HomeSection5({ post, noPost, error }) {
  // home section 5 component and const for holding data,mapdata 
  const data = post?.slice(7, 12)
  const mapData = !error && (
    <>
      {error && (
        <AnimatePresence>
          {error && (
            <motion.div
              exit={{ scale: 0.0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            >
              {error == "Log in sucessful" ? (
                <AlertSuccess message={error} />
              ) : (
                <AlertError message={error} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      )}
      {( Array.isArray(data) && data?.length > 0)  ? (
        post &&
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
                  <Box sx={{ position: "absolute", top: 280, left: 50, width: { lg: "50%" }, textAlign: "start" }}>
                    <Typography sx={{ display: "flex", alignItems: "center", fontSize: { xs: "0.8rem", lg: "1.2rem" }, mb: { xs: 1, lg: 3 } }}><Box component="span" sx={{ height: { xs: "10px", lg: "15px" }, width: { xs: "10px", lg: "15px" }, backgroundColor: "red", borderRadius: "50%", marginRight: "6px" }}></Box> {data.categories} Topic</Typography>
                    <Typography variant="h3" sx={{ width: "100%", mb: 4, fontSize: { xs: "1.5rem", lg: "3rem" } }}>{data.mainHeading}</Typography>
                    <Button variant="outlined" sx={{ color: "white", borderColor: "white", fontSize: "1rem", textTransform: "capitalize" }}> <Link  href={`/post/${data?._id}/${data?.slug}`}>Read More</Link></Button>
                  </Box>
                </SwiperSlide>
              )
            })}

          </Swiper>
        </>)
        : (
          <NoPost />
        )}
    </>
  );
  return (
    <Box sx={{ height: "500px", mb: 3, mt: 10 }}>
      {mapData}
    </Box>
  )
}

export default HomeSection5