"use client"
import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import SubscribePricesMax from './SubscribePricesMax'
import SubscribeMini from './SubscribeMini'


function SubscribeMain() {
    // subscribe component for both big screens and small screens 
    const [prices, setPrices] = React.useState("monthly")
    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <Box sx={{ textAlign: "center", width: "100%", mt: { xs: 4, lg: 6 }, mb: 4 }}>
                <Button sx={{ mr: { xs: 1, lg: 1 } }} onClick={() => setPrices("monthly")} variant={prices == "monthly" ? "contained" : "outlined"}> monthly</Button>
                <Button sx={{ ml: { xs: 1, lg: 1 } }} onClick={() => setPrices("yearly")} variant={prices == "yearly" ? "contained" : "outlined"}>yearly</Button>
            </Box>
            <SubscribePricesMax prices={prices} setPrices={setPrices} />
            <SubscribeMini prices={prices} setPrices={setPrices} />
        </Box>
    )
}

export default SubscribeMain