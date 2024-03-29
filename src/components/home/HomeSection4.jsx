import { Box } from '@mui/material'
import React from 'react'
import HomeSection4a from "./HomeSection4a"
import HomeSection4b from "./HomeSection4b"
import NoPost from '../reuseable/NoPost'
import { AnimatePresence, motion } from 'framer-motion'
import AlertSuccess from '../reuseable/AlertSuccess'
import AlertError from '../reuseable/AlertError'



function HomeSection4({ post, noPost, error }) {
    // home section4 component and states for holding data and map data 
    const data = post?.slice(1, 6)
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
            {( Array.isArray(data) && data?.length > 0) ? (
                post &&
                <>
                    <HomeSection4a data={data} />
                    <HomeSection4b data={data} />
                </>)
                : (
                    <NoPost />
                )}
        </>
    );

    return (
        <Box sx={{mt:{xs:2,lg:0}, py: 3, mb: 2, height: { xs: "690px", lg: "500px" }, display: "flex", justifyContent: "space-around", backgroundColor: "black", flexDirection: { xs: "column", lg: "row" } }}>
            {mapData}
        </Box>
    )
}

export default HomeSection4