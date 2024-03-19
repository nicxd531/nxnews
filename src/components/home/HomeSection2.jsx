import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { KeyboardArrowRight} from '@mui/icons-material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function HomeSection2({ post }) {
    const hotTopic = post?.slice(5, 6)
    const others = post?.slice(7, 9)
    function truncateText(text, maxLength) {
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }
    // Usage example
    const longText = hotTopic[0]?.cP
    const truncatedText = truncateText(longText, 100); // Truncate to 20 characters
    const colour = hotTopic[0].categories
    let bgColor
    if (colour == "Sports") {
        bgColor = "#ffde37"
    } else if (colour == "Health") {
        bgColor = "#b64aef"
    } else if (colour == "Political") {
        bgColor = "#d83c3c"
    } else if (colour == "Business") {
        bgColor = "#54e0e2"
    } else if (colour == "Finence") {
        bgColor = "#df7c20"
    } else if (colour == "Life") {
        bgColor = "#28d01a"
    } else if (colour == "Entertainment") {
        bgColor = "#814de5"
    }
    console.log(hotTopic[0]?.mainImage)
    return (
        <Box sx={{ p: { xs: 2, lg: 4 } ,mb:8}}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" ,mb:4}}>
                <Typography variant='h4' sx={{ fontWeight: "bold", fontSize: { xs: "1.3rem", lg: "2.5rem" } }}> Latest Releases</Typography>
                <Button variant='contained' sx={{ textTransform: "capitalize", fontSize: { xs: "0.7rem", lg: "1rem" } }}> View All</Button>
            </Box>
            <Box sx={{display:"flex",justifyContent:"space-between",height:{xs:"200px",lg:"400px"}}}>
                <Box sx={{ width: "39%"}}>
                    <Box sx={{ height: "60%", width: { xs: "100%", lg: "100%" }, objectFit: "cover",position:"relative" ,mb:2}}>
                        <img src={hotTopic[0]?.mainImage} alt='post image' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <Box sx={{ height: "25px", backgroundColor: bgColor, position: "absolute", top: 0, right: 0, mr: 1, mt: 1, p: 1, color: "whitesmoke",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center", px:2}}><Typography sx={{ textTransform: "capitalize", fontSize: { xs: "1rem", lg: "1rem" }}}> {hotTopic[0].categories}</Typography></Box>
                        <Typography variant="h6" sx={{ color:"whiteSmoke",fontSize: { xs: "0.5rem", lg: "1rem" }, textTransform: "capitalize", mb: { lg: 4 } ,position: "absolute",bottom: 0, mb: 1, ml: 1,}}>{hotTopic[0]?.user?.location}, {hotTopic[0]?.createdAt}</Typography>
                    </Box>
                    <Box sx={{ height: "100%", width: { xs: "100%%", lg: "100%" } }}>
                        <Typography variant="h4" sx={{ fontSize: { xs: "0.8rem", lg: "2rem" }, fontWeight: "bold", mb: {  lg: 2 } }}>{hotTopic[0]?.mainHeading}</Typography>
                        <Typography className="text-muted" sx={{fontSize:{ xs: "0.8rem", lg: "1rem" },width:"100%",mb:2}}>{truncatedText}</Typography>
                        <Button variant='contained' sx={{ textTransform: "capitalize", color: "white", fontSize: { xs: "0.7rem", lg: "1rem" },bgcolor:"black" }}>Read more <ArrowOutwardIcon sx={{ml:1}}/></Button>
                    </Box>
                </Box>
                <Box sx={{ width: "59%",display:"flex",justifyContent:"space-between" ,flexWrap:"wrap"}}>
                    {others?.map((data, index) => {
                        function truncateText(text, maxLength) {
                            return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
                        }
                        // Usage example
                        const longText = data.cP
                        const truncatedText = truncateText(longText, 100); // Truncate to 20 characters
                        return (
                            <Box key={index} sx={{ width: { xs: "100%", lg: "100%" }, height: { xs: "120px", lg: "170px" }, mb: 1, display: "flex" }}>
                                <Box sx={{ width: "40%", height: "100%", objectFit: "cover" }}>
                                    <img src={data?.mainImage} alt='post image' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </Box>
                                <Box sx={{ ml: 2,width:{xs:"60%",} }}>
                                    <Typography sx={{ fontWeight: "bold", fontSize: { xs: "0.7rem", lg: "1rem" } }}>{data?.createdAt}<span className='text-muted'>- 15 minutes ago</span></Typography>
                                    <Typography variant="h5" sx={{ fontSize: { xs: "1rem", lg: "1.7rem" }, fontWeight: "bold", mb: {xs:1,lg:3} }}>{data?.mainHeading}</Typography>
                                    <Typography className="text-muted" sx={{fontSize:{ xs: "0.6rem", lg: "1rem" },mb:{lg:2}}}>{truncatedText}</Typography>
                                    <Button variant='contained' sx={{ textTransform: "capitalize", color: "white", fontSize: { xs: "0.5em", lg: "1rem" },bgcolor:"black" ,px:1}}>Read more <ArrowOutwardIcon sx={{ml:1}}/></Button>
                                </Box>
                            </Box>
                        )
                    })

                    }
                </Box>
            </Box>
        </Box>
    )
}

export default HomeSection2