import { Box } from '@mui/material'
import React from 'react'

function Loading() {
    // first loading component
    return (
        <Box sx={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",mt:6}}>
            <div className="lds-ellipsis" >
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Box>
    )
}

export default Loading