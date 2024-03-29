import React from 'react'
import { Box, Button, IconButton, Typography } from '@mui/material'
import EastIcon from '@mui/icons-material/East';
import NoPost from '../reuseable/NoPost'
import { AnimatePresence, motion } from 'framer-motion'
import AlertSuccess from '../reuseable/AlertSuccess'
import AlertError from '../reuseable/AlertError'
import Link from 'next/link';


function HomeSection1({ post, noPost, error }) {
    // home section component and const for holding hottopics ,others and mapdata
    const hotTopic = post?.slice(0, 1)
    const others = post?.slice(2, 5)
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
            {( Array.isArray(others) && others?.length > 0)  ? (
                post &&
                <>
                    <Box sx={{ width: "100%", height: { xs: "120px", lg: "250px" }, display: "flex", justifyContent: "space-between", mb: 2 }}>
                        <Box sx={{ height: "100%", width: { xs: "49%", lg: "39%" }, objectFit: "cover" }}>
                            <img src={hotTopic[0]?.mainImage} alt='post image' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </Box>
                        <Box sx={{ height: "100%", width: { xs: "49%", lg: "59%" } }}>
                            <Typography variant='h5' sx={{ display: "flex", alignItems: "center", fontSize: { xs: "1rem", lg: "1.7rem" }, mb: { xs: 1, lg: 3 } }}><Box component="span" sx={{ height: { xs: "10px", lg: "15px" }, width: { xs: "10px", lg: "15px" }, backgroundColor: "black", borderRadius: "50%", marginRight: "6px" }}></Box> Hot Topic</Typography>
                            <Typography variant="h4" sx={{ fontSize: { xs: "1rem", lg: "2.5rem" }, fontWeight: "bold", mb: { xs: 2, lg: 2 } }}>{hotTopic[0]?.mainHeading}</Typography>
                            <Typography variant="h6" sx={{ fontSize: { xs: "0.8rem", lg: "2rem" }, textTransform: "capitalize", mb: { lg: 2 } }}>{hotTopic[0]?.user?.location}, {hotTopic[0]?.createdAt}</Typography>
                            <Button sx={{ textTransform: "capitalize", color: "black", fontSize: { xs: "0.7rem", lg: "1rem" } }}><Link href={`/post/${hotTopic[0]?._id}/${hotTopic[0]?.slug}`}>Read more</Link> <EastIcon sx={{ ml: 1, width: { xs: "15px", lg: "25px" }, height: { xs: "15px", lg: "25px" } }} /></Button>
                        </Box>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", mt: { xs: 1, lg: 3 } }}>
                        {others?.map((data, index) => {
                            return (
                                <Box key={index} sx={{ width: { xs: "100%", lg: "33%" }, height: { xs: "70px", lg: "100px" }, mb: 1, display: "flex" }}>
                                    <Link  href={`/post/${data?._id}/${data?.slug}`}>
                                        <IconButton sx={{textAlign:"start",color:"inherit",p:0,borderRadius:0,height:"100%",width:"100%"}}>
                                            <Box sx={{ width: "30%", height: "100%", objectFit: "cover" }}>
                                                <img src={data?.mainImage} alt='post image' style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                            </Box>
                                            <Box sx={{ ml: 2, width: "69%" }} >
                                                <Typography variant="h5" sx={{ fontSize: { xs: "1rem", lg: "1.3rem" }, fontWeight: "bold", mb: 3 }}>{data?.mainHeading}</Typography>
                                                <Typography sx={{ fontWeight: "bold", fontSize: { xs: "0.7rem", lg: "1rem" } }}>{data?.createdAt}<span className='text-muted'>- 15 minutes ago</span></Typography>
                                            </Box>
                                        </IconButton>
                                    </Link>
                                </Box>
                            )
                        })

                        }
                    </Box>
                </>)
                : (
                    <NoPost />
                )}
        </Box>
    );
    return (
        <Box sx={{ p: { xs: 2, lg: 4 } }}>
            {mapData}
        </Box>
    )
}

export default HomeSection1