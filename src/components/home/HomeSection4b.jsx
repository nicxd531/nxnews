import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import Link from 'next/link'

function HomeSection4b({ data }) {
    // home section 4b component
    return (
        <Box sx={{ width: { xs: "100%", lg: "30%" }, color: "white", height: { xs: "fit-content", lg: "100%" }, display: "flex", justifyContent: "space-between", flexWrap: "wrap", mt: { xs: 2, lg: 0 }, px: { xs: 1, lg: 0 } }}>
            {data?.map((data, index) => {
                return (
                    <Box key={index} sx={{ height: "18%", width: "100%", display: "flex" }}>
                        <Link href={`/post/${data?._id}/${data?.slug}`}>
                            <IconButton sx={{ textAlign: "start", color: "inherit", p: 0, borderRadius: 0, height: "100%", width: "100%" }}>
                                <Box sx={{ width: "30%", objectFit: "cover", height: "100%" }}>
                                    <img src={data.mainImage} alt='post image' style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                                </Box>
                                <Box sx={{ ml: 2 }}>
                                    <Typography sx={{ mb: { xs: 0 },fontSize:{xs:"0.9rem",lg:"1rem"} }}>{data.mainHeading}</Typography>
                                    <Typography sx={{ mt: {xs:3 ,lg:3}, fontSize: { xs: "0.7rem", lg: "1rem" } }}>{data.createdAt} <span style={{ color: "grey" }}>-15 minutes ago</span></Typography>
                                </Box>
                            </IconButton>
                        </Link>
                    </Box>
                )
            })}
        </Box >
    )
}

export default HomeSection4b