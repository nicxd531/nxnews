import { Box, Typography,Button, Divider } from '@mui/material'
import React from 'react'
import HomePostTemplate from "../reuseable/HomePostTemplate"


function HomeSection6({ post }) {
    const filteredData = post?.filter((data) => data.categories == "Entertainment")
    const sliced = filteredData.slice(1, 4)
    return (
        <Box sx={{p:{xs:2,lg:6}}}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
                <Typography variant='h4' sx={{ fontWeight: "bold", fontSize: { xs: "1.3rem", lg: "2.5rem" } }}> Entertainment</Typography>
                <Button variant='contained' sx={{ textTransform: "capitalize", fontSize: { xs: "0.7rem", lg: "1rem" } }}> View All</Button>
            </Box>
            <hr/>
           
            <Box sx={{ display: "flex", justifyContent:"space-between" ,mt:{xs:2,lg:4},flexWrap:"wrap"}}>

                {
                    sliced?.map((data, index) => {
                        return (
                            <HomePostTemplate data={data} key={index} />
                        )
                    })
                }

            </Box>
        </Box>
    )
}

export default HomeSection6