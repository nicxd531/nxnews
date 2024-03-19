import { Box } from '@mui/material'
import React from 'react'
import HomeSection4a from "./HomeSection4a"
import HomeSection4b from "./HomeSection4b"
import post from "../../../data/post.json"
function HomeSection4() {
    const data = post?.slice(1,6)
    return (
        <Box sx={{ py:3, mb: 2, height:{xs:"690px",lg: "500px" },display:"flex",justifyContent:"space-around",backgroundColor:"black",flexDirection:{xs:"column",lg:"row"}}}>
            <HomeSection4a data={data}/>
            <HomeSection4b data={data}/>
        </Box>
    )
}

export default HomeSection4