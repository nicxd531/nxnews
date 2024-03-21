"use client"
import React, { useEffect } from 'react'
import { Box, Typography, Divider, Button } from '@mui/material'
import { KeyboardArrowRight, KeyboardArrowLeft } from '@mui/icons-material'



function SubscribeMini({ prices, setPrices }) {
    // component for small screens
    // use state hook for the price card slider slider
    const [currentSlide, setcurrentSlide] = React.useState(0)
    // scroll functions and states 
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;
    const nextSlide = () => {
        setcurrentSlide(currentSlide === 2 ? 0 : currentSlide + 1)
    }
    const prevSlide = () => {
        setcurrentSlide(currentSlide === 0 ? 2 : currentSlide - 1)
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
        <Box sx={{
            display: { xs: "block", lg: "none" }, mb: 8, width: "100%", position: "relative", p: 6
        }}>
            <KeyboardArrowLeft sx={{ position: "absolute", width: "64px", height: "64px", top: 200, left: 5 ,cursor:"pointer"}} onClick={() => prevSlide()} />
            <Box className={`${currentSlide == 0 ? "imageSwapIn" : "imageSwapOut"}`} sx={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "start", flexDirection: "column", height: "350px", border: "1px solid ", p: 4 }}>
                <Typography variant="h4">Starter</Typography>
                {prices == "monthly" ? <Typography variant="h4" sx={{ fontWeight: "bold " }}>$20 <Box component="span" sx={{ fontSize: "0.8rem", fontWeight: "normal" }}>/ Month</Box></Typography> : <Typography variant="h4" sx={{ fontWeight: "bold " }}>$240 <Box component="span" sx={{ fontSize: "0.8rem", fontWeight: "normal" }}>/ Month</Box></Typography>}
                <Divider variant="inset" />
                <Typography > access all news</Typography>
                <Typography >latest news notification</Typography>
                <Typography >send news article </Typography>
                <Typography >latest movie recomendation </Typography>
                <Typography >updated news </Typography>
                <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
                    <Button variant="outlined" sx={{ mx: "auto", px: 4 }}>
                        Subscribe
                    </Button>
                </Box>
            </Box>
            <Box className={`${currentSlide == 1 ? "imageSwapIn" : "imageSwapOut"}`} sx={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "start", flexDirection: "column", height: "350px", border: "1px solid ", p: 4 }}>
                <Typography variant="h4">Starter</Typography>
                {prices == "monthly" ? <Typography variant="h4" sx={{ fontWeight: "bold " }}>$100 <Box component="span" sx={{ fontSize: "0.8rem", fontWeight: "normal" }}>/ Month</Box></Typography> : <Typography variant="h4" sx={{ fontWeight: "bold " }}>$1200 <Box component="span" sx={{ fontSize: "0.8rem", fontWeight: "normal" }}>/ Month</Box></Typography>}
                <Divider variant="inset" />
                <Typography > access all news</Typography>
                <Typography >latest news notification</Typography>
                <Typography >send news article </Typography>
                <Typography >latest movie recomendation </Typography>
                <Typography >updated news </Typography>
                <Box sx={{ width: "100%", alignItems: "center", display: "flex" }}>
                    <Button variant="outlined" sx={{ mx: "auto", px: 4 }}>
                        Subscribe
                    </Button>
                </Box>
            </Box>
            <Box className={`${currentSlide == 2 ? "imageSwapIn" : "imageSwapOut"}`} sx={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "start", flexDirection: "column", height: "350px", border: "1px solid ", p: 4 }}>
                <Typography variant="h4">Starter</Typography>
                {prices == "monthly" ? <Typography variant="h4" sx={{ fontWeight: "bold " }}>$200 <Box component="span" sx={{ fontSize: "0.8rem", fontWeight: "normal" }}>/ Month</Box></Typography> : <Typography variant="h4" sx={{ fontWeight: "bold " }}>$2400 <Box component="span" sx={{ fontSize: "0.8rem", fontWeight: "normal" }}>/ Month</Box></Typography>}
                <Divider variant="inset" />
                <Typography > access all news</Typography>
                <Typography >latest news notification</Typography>
                <Typography >send news article </Typography>
                <Typography >latest movie recomendation </Typography>
                <Typography >updated news </Typography>
                <Box sx={{ display: "flex", width: "100%", alignItems: "center", }}>
                    <Button variant="outlined" sx={{ mx: "auto", px: 4 }}>
                        Subscribe
                    </Button>
                </Box>
            </Box>
            <KeyboardArrowRight sx={{ position: "absolute", width: "64px", height: "64px", top: 200, right: 5 ,cursor:"pointer"}} onClick={() => nextSlide()} />

        </Box>
    )
}

export default SubscribeMini