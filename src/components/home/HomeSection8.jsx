import { Box, Typography, Button, Divider } from '@mui/material'
import React from 'react'
import HomePostTemplate from "../reuseable/HomePostTemplate"
import NoPost from '../reuseable/NoPost'
import { AnimatePresence, motion } from 'framer-motion'
import AlertSuccess from '../reuseable/AlertSuccess'
import AlertError from '../reuseable/AlertError'
import Link from 'next/link'

function HomeSection8({ post, error }) {
    // home section 8 component and const for filtered data,sliced data and map data 
    const filteredData = post?.filter((data) => data.categories == "Sport")
    const sliced = filteredData?.slice(0, 3)
    const mapData = !error && (
        <>
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
            {( Array.isArray(filteredData) && filteredData?.length > 0) ? (
                post &&
                <>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
                        <Typography variant='h4' sx={{ fontWeight: "bold", fontSize: { xs: "1.3rem", lg: "2.5rem" } }}> Sport</Typography>
                        <Button variant='contained' sx={{ textTransform: "capitalize", fontSize: { xs: "0.7rem", lg: "1rem" } }}><Link href={"/sport"}>View All</Link> </Button>
                    </Box>
                    <hr />

                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: { xs: 2, lg: 4 }, flexWrap: "wrap" }}>

                        {
                            sliced?.map((data, index) => {
                                return (
                                    <HomePostTemplate data={data} key={index} />
                                )
                            })
                        }

                    </Box>
                </>)
                : (
                    <NoPost />
                )}
        </>
    );
    return (
        <Box sx={{ p: { xs: 2, lg: 6 } }}>
            {mapData}
        </Box>
    )
}

export default HomeSection8