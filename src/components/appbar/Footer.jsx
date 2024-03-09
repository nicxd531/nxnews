
import { Box, Button, Divider, IconButton, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import React from 'react'

function Footer() {
    const data = [
        {
            title: "World",
            content: ["Politics", "Health", "Business", "Tech", "Entertainment"]
        },
        {
            title: "Tech",
            content: ["Science", "Magazine", "Start up", "Crypto"]
        },
        {
            title: "life",
            content: ["Food", "Style", "Sport", "Movie", "Music"]
        },
        {
            title: "Magazine",
            content: ["Fashion", "Boggers", "People"]
        },
        {
            title: "Others",
            content: ["About", "Contact us", "People"]
        },
    ]
    return (
        <Box sx={{ p: { xs: 2, lg: 4 }, bgcolor: "black", color: "white", display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", lg: "row" }, mb: 6 }}>
                <Box sx={{ width: { xs: "100%", lg: "40%" } }}>
                    <Typography
                        variant="h4"
                        noWrap
                        component="h4"
                        sx={{
                            mr: 2,

                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow: 1, mr: {xs:0,lg:6},
                            textAlign:{xs:"center",lg:"start"}
                        }}
                    >
                        Nxnews
                    </Typography>
                    <Typography sx={{ width: { xs: "100%", lg: "70%" }, lineHeight: "30px" ,textAlign:{xs:"center",lg:"start"}}}>
                        Semper varius ac tortor dapibus id aenean nulla dictumst laoreet, suspendisse quisque erat ad torquent sem imperdiet nisi, rhoncus facilisis convallis feugiat diam himenaeos nunc non.
                    </Typography>
                </Box>
                {data.map((data, index) => {
                    return (
                        <Box key={index} sx={{ display: "flex", textAlign: { xs: "center", lg: "Start" }, flexDirection: "column", flexGrow: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", ml: {xs:0,lg:1} }}>{data.title}</Typography>
                            <Box sx={{ display: "flex", textAlign: "center", flexDirection: { xs: "row", lg: "column" }, justifyContent: { xs: "center", lg: "Start" }, alignItems: "start" }}>
                                {data.content.map((data, index) => <IconButton sx={{ color: "whitesmoke" }} key={index}><Typography >{data}</Typography></IconButton>)}
                            </Box>
                        </Box>
                    )
                })}
            </Box>
            <Divider variant='inset' sx={{ bgcolor: "whiteSmoke", ml: 0 }} />
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: { xs: 2, lg: 4 } }}>
                <Typography> Copyright Nxnews &copy; {new Date().getFullYear()} | All Rights Reserved</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <FacebookIcon sx={{ mx: 2, width: 20, height: 20 }} />
                    <InstagramIcon sx={{ mx: 2, width: 20, height: 20 }} />
                    <XIcon sx={{ mx: 2, width: 20, height: 20 }} />
                </Box>
            </Box>
        </Box>
    )
}

export default Footer