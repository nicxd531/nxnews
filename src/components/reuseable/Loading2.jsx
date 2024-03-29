import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

function Loading2() {
    // second loading component
    return (
        <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress color="secondary" sx={{color:"#ff9800"}}/>
        </Box>
    )
}

export default Loading2