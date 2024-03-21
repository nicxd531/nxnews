"use client"
import { Box, Button, Typography, Divider } from '@mui/material'
import React from 'react'

function SubscribePricesMax({ prices, setPrices }) {
    // main component for large sized screens and also state for managing click 
    const [clicked, setClicked] = React.useState("second")
    return (
        <Box sx={{
            display: { xs: "none", lg: "flex" }, mt: 8, mb: 8, width: "100%", justifyContent: "center"
        }}>
            <Box onClick={() => setClicked("first")} className={` ${clicked == "first" ? "subscribe-clicked" : "subscribe"}`} sx={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "start", flexDirection: "column", height: "350px", border: "1px solid ", p: 4 }}>
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
            <Box onClick={() => setClicked("second")} className={` ${clicked == "second" ? "subscribe-clicked" : "subscribe"}`} sx={{ cursor: "pointer", ml: 6, mr: 6, display: "flex", justifyContent: "space-between", alignItems: "start", flexDirection: "column", height: "350px", border: "1px solid ", p: 4 }}>
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
            <Box onClick={() => setClicked("third")} className={` ${clicked == "third" ? "subscribe-clicked" : "subscribe"}`} sx={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "start", flexDirection: "column", height: "350px", border: "1px solid ", p: 4 }}>
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

        </Box>
    )
}

export default SubscribePricesMax