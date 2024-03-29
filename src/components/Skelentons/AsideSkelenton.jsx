import React from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
function AsideSkelenton() {
    // aside component loading skelenton
    const arr = ["1", "2", "3", "4", "5"]
    return (
        arr?.map((index) => {
            return (
                <Box key={index} sx={{ height: "16%", width: "100%", display: "flex" }}>
                    <Box sx={{ width: "30%", objectFit: "cover", height: "100%" }}>
                        <Skeleton variant="rectangular" width={"100%"} height={80} />
                    </Box>
                    <Box sx={{ ml: 2 ,width:"69%"}}>
                        <Skeleton width="100%" height={50} sx={{mb:1}}/>
                        <Skeleton width="100%" />
                    </Box>
                </Box>
            )
        })
    )
}

export default AsideSkelenton