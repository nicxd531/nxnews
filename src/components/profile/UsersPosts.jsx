import { Box, Button, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import React from 'react'

function UsersPosts({ data }) {
    const colour = "sports"
    let bgColor 
    if(colour== "sports"){
        bgColor ="#ffde37"
    }else if(colour== "Health"){
        bgColor ="#b64aef"
    }else if(colour== "political"){
        bgColor ="#d83c3c"
    }else if(colour== "business"){
        bgColor ="#54e0e2"
    }else if(colour== "finence"){
        bgColor ="#df7c20"
    }else if(colour== "life"){
        bgColor ="#28d01a"
    }else if(colour== "entertainment"){
        bgColor = "#814de5"
    }
    return (
        <Box sx={{ p: { xs: 2, lg: 4 } }}>
            <Box sx={{width:{xs:"45%",lg:"25%"},position:"relative"}}>
                <Box sx={{position:"relative",width:"100%",height:"120px",objectFit:'cover'}}>
                    <Box sx={{overFlow:"hidden",width:"100%",height:"100%"}}>
                         <img src="/images/no image.avif" alt="post image" style={{objectFit:'cover',width:"100%",height:"100%",overFlow:"hidden"}} />
                    </Box>
                    <Box sx={{height:"25px",backgroundColor:bgColor ,position:"absolute",top:0,right:0,mr:1,mt:1,p:1}}><Typography sx={{textTransform:"capitalize",fontSize:{xs:"0.8rem",lg:"0.9rem"}}}> entertinment</Typography></Box>
                    <Typography sx={{position:"absolute",bottom:0,mb:1,ml:1}}>Ukraine, 24 april 2022</Typography>
                </Box>
                <Typography> Lorem ipsum. Lorem ipsum.</Typography>
                <Typography sx={{fontSize:{xs:"0.9rem"},textAlign:"justify" ,mt:1}}>Lorem ipsum dolor sit amet consectetur adipiscing elit tristique nam nunc, himenaeos sapien in interdum lectus eros potenti rutrum sed, justo bibendum eleifend mattis nullam platea facilisis taciti suscipit. </Typography>
                <Box className="d-flex" sx={{mt:2,justifyContent:"space-between",alignItems:"center"}}>
                    <Button variant='contained' sx={{backgroundColor:"#000000",color:"whitesmoke" ,fontSize:{xs:"0.7rem"},p:1}}> read more <ArrowOutwardIcon/></Button>
                    <Typography className="text-muted" sx={{fontSize:"1rem"}}>likes 15k</Typography>
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Box>

            </Box>
        </Box>
    )
}

export default UsersPosts