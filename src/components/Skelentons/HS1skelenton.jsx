import { Box, Skeleton } from '@mui/material'
import React from 'react'


function HS1skelenton() {
    // home loading skelenton
    const arr = ["1", "2", "3"]
    return (
        <Box sx={{ mt: { xs: 2, lg: 4 }, px: { xs: 2, lg: 4 },pt:6}}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Skeleton variant="rectangular" width={"48%"} sx={{ height: { xs: "150px", lg: "250px" } }} />
                <Box sx={{ width: "48%" }}>
                    <Skeleton width="35%" sx={{ mb: { xs: 1, lg: 1 }, height: { xs: "20px", lg: "30px" } }} />
                    <Skeleton width="100%" sx={{ height: { xs: "70px", lg: "150px" } }} />
                    <Skeleton width="50%" sx={{ mb: { xs: 2, lg: 2 }, height: { lg: "30px" } }} />
                    <Skeleton width="20%" />
                </Box>
            </Box>
            <Box className="d-flex " sx={{ flexWrap: "wrap", justifyContent: "space-around" }}>
                {
                    arr.map((index) => {
                        return (
                            <Box key={index} sx={{ width: { xs: "100%", lg: "32%" }, mt: 4, display: "flex", flexDirection: { xs: "row", lg: "row" }, justifyContent: "space-between" }}>
                                <Skeleton variant="rectangular" width={"49%"} sx={{ height: "80px" }} />
                                <Box sx={{ width: { xs: "49%" } }}>
                                    <Skeleton width="100%" height={50} />
                                    <Skeleton width="30%" height={30} />
                                </Box>
                            </Box>
                        )
                    })}
            </Box>
        </Box>
    )
}

export default HS1skelenton