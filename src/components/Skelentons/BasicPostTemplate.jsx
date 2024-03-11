import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';


function BasicPostTemplate() {
    const arr = ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12"]
    return (
        <Box className="d-flex " sx={{flexWrap:"wrap",justifyContent:"space-around"}}>
            {
                arr.map((index) => {
                    return (
                        <Box key={index} sx={{width:{xs:"45%",lg:"23%"},mt:4}}>
                            <Skeleton variant="rectangular" width={"100%"} height={80} />
                            <Skeleton width="100%" />
                            <Skeleton width="100%"height={30} />
                            <Skeleton width="30%" height={30}/>
                        </Box>
                    )
                })}
        </Box>


    )
}

export default BasicPostTemplate