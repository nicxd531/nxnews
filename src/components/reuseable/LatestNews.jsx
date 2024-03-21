"use client"
import React, { useRef, useEffect } from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import post from "../../../data/post.json"
import HomePostTemplate2 from "./HomePostTemplate2"
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'



function LatestNews() {
  const [showTopBtn, setShowTopBtn] = React.useState(false)
  const filteredData = post.slice(0, 5)
  const containerRef = useRef(null);
  // scroll right function 
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };
  // scroll left function 
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -100, behavior: 'smooth' });

    }
  };

  // use effect for monitoring scroll behaviour to hide button
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false)
      }
    })


  }, [])

  return (
    <Box sx={{ width: { xs: "100%", lg: "60%" }, mt: { xs: 6, lg: 6 }, display: "flex", flexDirection: "column" }}>
      <Typography variant='h3' sx={{ fontSize: { xs: "20px", lg: "40px" }, width: { x: "100%", lg: "80%" }, mx: { xs: 2, lg: "auto" }, fontWeight: "bold" }}>Welcome back, here is the latest news today!!</Typography>
      <Box ref={containerRef} sx={{ overflow: "hidden", p: {xs:2,lg:4}, width: "100%", position: "relative", scrollBehavior: 'smooth' }}>
        <IconButton className="shadow" onClick={scrollLeft} sx={{ display: {xs:"none",lg:showTopBtn ? "none" : "block"}, position: "fixed", zIndex: 3, top: 350, borderRadius: "50%", bgcolor: "#fff", p: 0 }}><KeyboardArrowLeft sx={{ width: "44px", height: "44px" }} /></IconButton>
        <IconButton className="shadow" onClick={scrollRight} sx={{ display:{xs:"none",lg:showTopBtn ? "none" : "block"}, position: "fixed", zIndex: 3, top: 350, right: 500, borderRadius: "50%", bgcolor: "#fff", p: 0 }}><KeyboardArrowRight sx={{ width: "44px", height: "44px" }} /></IconButton>
        <Box component="div" ref={containerRef} sx={{ display: "flex", width:{xs:"100%",lg: "1900px"}, flexDirection:{xs:"column", lg:"row"}, justifyContent: "space-around" }}>
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