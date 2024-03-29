"use client"
import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import movie from "../../../data/movie.json"
import Movies from '../reuseable/Movies'

function HomeSection3() {
  // home section 3 component
  const [currentSlide, setcurrentSlide] = React.useState(0)
  // scroll functions and states 
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;
  const nextSlide = () => {
    setcurrentSlide(currentSlide === 7 ? 0 : currentSlide + 1)
  }
  const prevSlide = () => {
    setcurrentSlide(currentSlide === 0 ? 7 : currentSlide - 1)
  }
  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }
  // use effect hook to call the auto funtion and also clear interval function to clear errors
  useEffect(() => {
    if (autoScroll) {
      auto()
    }
    return () => { clearInterval(slideInterval) }
  }, [currentSlide])

  return (
    <Box sx={{ height: { xs: "350px", lg: "800px" }, width: "100%", mb: {xs:3,lg:0}, display: "block", mt: { xs: 2, lg: 4 }, overflow: "hidden" }}>
      <Box sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", textTransform: "capitalize", width: { lg: "50%" }, fontSize: { xs: "1.4rem", lg: "4rem" } }}>the audience&apos;s top choice of best films</Typography>
      </Box>
      <Box>
        <Box sx={{ width: "100%", height: "100%", objectFit: "cover" ,position:"relative"}}>
         
            {
              movie.map((data, index) => {
                return (

                   <motion.div
                    key={index}
                     style={{height:"100%", display: currentSlide == index ? "block" : "none" , objectFit: "cover"}}
                    transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
                  >
                    <img style={{ height: "100%", width: "100%", objectFit: "cover" }} src={data?.image} />
                  </motion.div>
                )


              })
            }
          <Movies movie={movie}/>
        </Box>

      </Box>
    </Box>
  )
}

export default HomeSection3