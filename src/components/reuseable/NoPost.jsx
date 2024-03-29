import { Box, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

function NoPost() {
    // no post component
    return (
        <Box sx={{height:"100vh",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Typography variant='h4'>No Post available 😥 <Link href={"/profile/CreateNews"} className='d-color'>Create Post</Link></Typography>
        </Box>
    )
}

export default NoPost