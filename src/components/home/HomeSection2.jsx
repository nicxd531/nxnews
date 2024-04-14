import { Box, Button, Typography, Divider } from '@mui/material'
import React from 'react'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import NoPost from '../reuseable/NoPost'
import { AnimatePresence, motion } from 'framer-motion'
import AlertSuccess from '../reuseable/AlertSuccess'
import AlertError from '../reuseable/AlertError'
import Link from 'next/link';
import { DateTime } from 'luxon';
import { formatDistanceToNow } from 'date-fns';

function HomeSection2({ post, noPost, error }) {
    // home section 2 component and const that make up home section 2
    const hotTopic = post?.slice(5, 6)
    const others = post?.slice(7, 9)
    const longText = hotTopic && hotTopic[0]?.cP
    const colour = hotTopic && hotTopic[0]?.categories
    // Parse the MongoDB date string into a DateTime object
    const dateTime = DateTime.fromISO(hotTopic[0]?.createdAt);
    // Format the date as desired (e.g., 'May 1, 2022')
    const formattedDate = dateTime.toFormat('MMMM d, yyyy');
    // paragraph reduction function
    function truncateText(text, maxLength) {
        return text && text?.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }
    const truncatedText = truncateText(longText, 100); // Truncate to 20 characters
    // color conditions for categories
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
    const mapData = !error && (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                p: 2,
            }}
        >
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
            {(Array.isArray(others) && others?.length > 0) ? (
                post &&
                <>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0, width: "100%" }}>
                        <Typography variant='h4' sx={{ fontWeight: "bold", fontSize: { xs: "1.3rem", lg: "2.5rem" } }}> Latest Releases</Typography>
                        <Button variant='contained' sx={{ textTransform: "capitalize", fontSize: { xs: "0.7rem", lg: "1rem" } }}><Link href={"/sport"}> View All</Link></Button>
                    </Box>
                    <hr style={{ width: "100%" }} />
                    <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between", height: { xs: "fit-content", lg: "400px" }, flexDirection: { xs: "column", lg: "row" } }}>
                        <Box sx={{ width: { xs: "100%", lg: "55%" } }}>
                            <Box sx={{ height: "60%", width: { xs: "100%", lg: "100%" }, objectFit: "cover", position: "relative", mb: 2 }}>
                                <img src={hotTopic[0]?.mainImage} alt='post image' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                <Box sx={{ height: "25px", backgroundColor: bgColor, position: "absolute", top: 0, right: 0, mr: 1, mt: 1, p: 1, color: "whitesmoke", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", px: 2 }}><Typography sx={{ textTransform: "capitalize", fontSize: { xs: "1rem", lg: "1rem" } }}> {hotTopic[0].categories}</Typography></Box>
                                <Typography variant="h6" sx={{ color: "whiteSmoke", fontSize: { xs: "0.5rem", lg: "1rem" }, textTransform: "capitalize", mb: { lg: 4 }, position: "absolute", bottom: 0, mb: 1, ml: 1, }}>{hotTopic[0]?.user?.location}, {formattedDate}</Typography>
                            </Box>
                            <Box sx={{ height: "100%", width: { xs: "100%", lg: "100%" } }}>
                                <Typography variant="h4" sx={{ fontSize: { xs: "0.8rem", lg: "2rem" }, fontWeight: "bold", mb: { lg: 2 } }}>{hotTopic[0]?.mainHeading}</Typography>
                                <Typography className="text-muted" sx={{ fontSize: { xs: "0.8rem", lg: "1rem" }, width: "100%", mb: 2 }}>{truncatedText}</Typography>
                                <Button variant='contained' sx={{ textTransform: "capitalize", color: "white", fontSize: { xs: "0.7rem", lg: "1rem" }, bgcolor: "black" }}><Link href={`/post/${hotTopic[0]?._id}/${hotTopic[0]?.slug}`}>Read more</Link> <ArrowOutwardIcon sx={{ ml: 1 }} /></Button>
                            </Box>
                        </Box>
                        <Box sx={{ width: { xs: "100%", lg: "44%" }, display: "flex", justifyContent: "space-between", flexWrap: "wrap", mt: { xs: 2, lg: 0 } }}>
                            {others?.map((data, index) => {
                                const dateTime = DateTime.fromISO(data?.createdAt);
                                const formattedDate = dateTime.toFormat('MMMM d, yyyy');
                                const createdAt = new Date(data?.createdAt);
                                // Calculate the time since the post was created
                                const timeSinceCreation = formatDistanceToNow(createdAt);
                                function truncateText(text, maxLength) {
                                    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
                                }
                                // Usage example
                                const longText = data.cP
                                const truncatedText = truncateText(longText, 100); // Truncate to 20 characters
                                return (
                                    <Box key={index} sx={{ width: { xs: "100%", lg: "100%" }, height: { xs: "200px", lg: "170px" }, mb: 1, display: "flex" }}>
                                        <Box sx={{ width: "40%", height: "100%", objectFit: "cover" }}>
                                            <img src={data?.mainImage} alt='post image' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                        </Box>
                                        <Box sx={{ ml: 2, width: { xs: "60%", } }}>
                                            <Typography sx={{ fontWeight: "bold", fontSize: { xs: "0.7rem", lg: "1rem" } }}>{formattedDate}<span className='text-muted'>- {timeSinceCreation}</span></Typography>
                                            <Typography variant="h5" sx={{ fontSize: { xs: "1rem", lg: "1.3rem" }, fontWeight: "bold", mb: { xs: 1, lg: 3 } }}>{data?.mainHeading}</Typography>
                                            <Typography className="text-muted" sx={{ fontSize: { xs: "0.6rem", lg: "1rem" }, mb: { lg: 2 } }}>{truncatedText}</Typography>
                                            <Button variant='contained' size={"small"} sx={{ mt: { xs: 2, lg: 0 }, textTransform: "capitalize", color: "white", fontSize: { xs: "0.6em", lg: "1rem" }, bgcolor: "black", px: 1 }}><Link href={`/post/${data?._id}/${data?.slug}`}>Read more <ArrowOutwardIcon sx={{ ml: 1 }} /></Link></Button>
                                        </Box>
                                    </Box>
                                )
                            })

                            }
                        </Box>
                    </Box>
                </>)
                : (
                    <NoPost />
                )}
        </Box>
    );
    return (
        <Box sx={{ p: { xs: 2, lg: 4 }, mb: { xs: 4, lg: 4 } }}>
            {mapData}
        </Box>
    )
}

export default HomeSection2