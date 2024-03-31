import { KeyboardArrowRight } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import React from 'react'
import Link from 'next/link';


function HomePostTemplate({ data }) {
    // home post template 3 and truncating text function for cuttind down paragraph
    function truncateText(text, maxLength) {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }
   // const for holding trncated text data and color
    const longText = data?.cP
    const truncatedText = truncateText(longText, 100); // Truncate to 100 characters
    const colour = data.categories
    // conditions for categories tags
    let bgColor
    if (colour == "Sport") {
        bgColor = "#ffde37"
    } else if (colour == "Health") {
        bgColor = "#b64aef"
    } else if (colour == "Political") {
        bgColor = "#d83c3c"
    } else if (colour == "Business") {
        bgColor = "#54e0e2"
    } else if (colour == "Finance") {
        bgColor = "#df7c20"
    } else if (colour == "Life") {
        bgColor = "#28d01a"
    } else if (colour == "Entertainment") {
        bgColor = "#814de5"
    }
    return (
        <Box sx={{ height: {xs:"420px",lg:"350px"},width:{xs:"100%",lg:"32%"} }}>
            <Box sx={{ height: "50%", width: { xs: "100%", lg: "100%" }, objectFit: "cover", position: "relative", mb: 2 }}>
                <img src={data?.mainImage} alt='post image' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <Box sx={{ height: "25px", backgroundColor: bgColor, position: "absolute", top: 0, right: 0, mr: 1, mt: 1, p: 1, color: "whitesmoke", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", px: 2 }}><Typography sx={{ textTransform: "capitalize", fontSize: { xs: "1rem", lg: "1rem" } }}> {data.categories}</Typography></Box>
                <Typography variant="h6" sx={{ color: "whiteSmoke", fontSize: { xs: "0.5rem", lg: "1rem" }, textTransform: "capitalize", mb: { lg: 4 }, position: "absolute", bottom: 0, mb: 1, ml: 1, }}>{data?.user?.location}, {data?.createdAt}</Typography>
            </Box>
            <Box sx={{ height: "100%", width: { xs: "100%", lg: "100%" } }}>
                <Typography variant="h4" sx={{ fontSize: { xs: "1rem", lg: "1.5rem" }, fontWeight: "bold", mb: { lg: 2 } }}>{data?.mainHeading}</Typography>
                <Typography className="text-muted" sx={{ fontSize: { xs: "0.8rem", lg: "1rem" }, width: "100%", mb: 2 }}>{truncatedText}</Typography>
                <Button variant='contained' sx={{ textTransform: "capitalize", color: "white", fontSize: { xs: "0.7rem", lg: "1rem" }, bgcolor: "black" }}><Link href={`/post/${data?._id}/${data?.slug}`}> Read more  <ArrowOutwardIcon sx={{ml:1}}/></Link></Button>
            </Box>
        </Box>
    )
}

export default HomePostTemplate