"use client"
import React, { useEffect } from 'react';
import { Avatar, Box, Divider, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import XIcon from '@mui/icons-material/X';
import InsertLinkIcon from '@mui/icons-material/InsertLink';


function SocialCompfake() {
    // social component for fake data 
    // states for handling time and timer for handling time slippage
    const [time, setTime] = React.useState(new Date());
    const [timer, setTimer] = React.useState(false);
    // use effect hook for constantly getting real time TIME
    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
        setTimer(true)
      }, 1000); // Update every second
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ width: "100%" }}>
                <Avatar alt="Remy Sharp" sx={{ width: 200, height: 200, mx: "auto" }} />
            </Box>
            <Box>
                <Box sx={{ mt: 4, mb: 1 }}>
                    <Typography variant='h5'> {"User's name"}</Typography>
                </Box>
                <Box >
                    <Typography variant='h6' className='text-muted'>{"user's username"}</Typography>
                </Box>
                <Box sx={{ mt: 2, mb: 1 }}>
                    <Typography variant='h6' sx={{ fontSize: { xs: "12px" } }}>About User</Typography>
                </Box>
            </Box>
            <Divider sx={{ bgcolor: "gray" }} />
            <Box>
                <Box sx={{ display: "flex", mt: 2 }}>
                    <PeopleIcon sx={{ mr: 1 }} />
                    <Typography>N/a<span className='text-muted  ms-1'>Followers</span> </Typography>
                    <Typography sx={{ ml: 2 }}>N/a<span className='text-muted ms-1'>Following</span> </Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Box sx={{ display: "flex", mt: 1 }}><BusinessIcon sx={{ mr: 2 }} /><Typography variant='h6'> {"User's Occupation"}</Typography></Box>
                    <Box sx={{ display: "flex", mt: 1 }}><LocationOnIcon sx={{ mr: 2 }} /><Typography variant='h6'>{"User's Location"}</Typography></Box>
                   {timer &&  <Box sx={{ display: "flex", mt: 1 }}><AccessTimeIcon sx={{ mr: 2 }} /><Typography variant='h6'>{time.toLocaleTimeString()}</Typography></Box>}
                    <Box sx={{ display: "flex", mt: 1 }}><MailIcon sx={{ mr: 2 }} /><Typography variant='h6'>{"User's Email"}</Typography> </Box>
                    <Box sx={{ display: "flex", mt: 1 }}><InsertLinkIcon sx={{ mr: 2 }} /> <Typography variant='h6'> Link</Typography> </Box>
                    <Box sx={{ display: "flex", mt: 1 }}><XIcon sx={{ mr: 2 }} /> <Typography variant='h6'>Twitter</Typography> </Box>
                    <Box sx={{ display: "flex", mt: 1 }}><InstagramIcon sx={{ mr: 2 }} /><Typography variant='h6'> Instagram</Typography> </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SocialCompfake