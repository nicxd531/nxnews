import React from 'react'
import { Box, Skeleton,Typography,Button } from '@mui/material'


export default function Hs2skelenton() {
    // home loading skelenton 2
    const array = ["1", "2"]
    return (
       <Box sx={{mt:{xs:2,lg:4},px:{xs:2,lg:4}}}>
         <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" ,mb:4}}>
                <Typography variant='h4' sx={{ fontWeight: "bold", fontSize: { xs: "1.3rem", lg: "2.5rem" } }}> Latest Releases</Typography>
                <Button variant='contained' sx={{ textTransform: "capitalize", fontSize: { xs: "0.7rem", lg: "1rem" } }}> View All</Button>
            </Box>
       </Box>
    )
}
