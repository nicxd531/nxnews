"use client"
import React, { useEffect } from 'react';
import { Avatar, Box, Divider, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import XIcon from '@mui/icons-material/X';
import InsertLinkIcon from '@mui/icons-material/InsertLink';


function SocialCompReal({ data }) {
    // social component for real time user data 
    // states for data ,timer for handling slippage
    const [time, setTime] = React.useState(new Date());
    const [timer, setTimer] = React.useState(false);
    // constant for getting following and followers array data lenght
    const following = data?.following == [] ? 0 : data?.following
    const followers = data?.followers == [] ? 0 : data?.followers
    // use effect hook for for getting real time Time 
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
            setTimer(true)
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);
    return (
        <Box sx={{ width: "100%" }}>
            <Box>
                <Avatar alt="Remy Sharp" src={data.avatarImage} sx={{ width: 200, height: 200, mx: "auto" }} />
            </Box>
            <Box>
                <Box sx={{ mt: 4, mb: 1 }}>
                    <Typography variant='h5'>{data?.name}</Typography>
                </Box>
                <Box >
                    <Typography variant='h6' className='text-muted'>{data?.userName}</Typography>
                </Box>
                <Box sx={{ mt: 2, mb: 1 }}>

                    <Typography variant='h6' sx={{ fontSize: { xs: "12px" } }}>{data.about}</Typography>
                </Box>
            </Box>
            <Divider sx={{ bgcolor: "gray" }} />
            <Box>
                <Box sx={{ display: "flex", mt: 2 }}>
                    <PeopleIcon sx={{ mr: 1 }} />
                    <Typography>{followers.length}<span className='text-muted  ms-1'>Followers</span> </Typography>
                    <Typography sx={{ ml: 2 }}>{following.length}<span className='text-muted ms-1'>Following</span> </Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Box sx={{ display: "flex", mt: 1 }}><BusinessIcon sx={{ mr: 2 }} /> <Typography variant='h6'>{data?.occupation}</Typography></Box>
                    <Box sx={{ display: "flex", mt: 1 }}><LocationOnIcon sx={{ mr: 2 }} /> <Typography variant='h6'>{data?.location}</Typography></Box>
                    {timer && <Box sx={{ display: "flex", mt: 1 }}><AccessTimeIcon sx={{ mr: 2 }} /><Typography variant='h6'>{time.toLocaleTimeString()}</Typography></Box>}
                    <Box sx={{ display: "flex", mt: 1 }}><MailIcon sx={{ mr: 2 }} /> <Typography variant='h6'>{data?.email}</Typography></Box>
                    <Box sx={{ display: "flex", mt: 1 }}><InsertLinkIcon sx={{ mr: 2 }} /> <Link href={data?.linkUrl ? data?.linkUrl : ""}><Typography variant='h6'> {data?.linkName}</Typography></Link></Box>
                    <Box sx={{ display: "flex", mt: 1 }}><XIcon sx={{ mr: 2 }} /> <Link href={data?.twitterLink ? data?.twitterLink : ""}><Typography variant='h6'>{data?.twitterUsername}</Typography></Link></Box>
                    <Box sx={{ display: "flex", mt: 1 }}><InstagramIcon sx={{ mr: 2 }} /><Link href={data?.instaLink ? data?.instaLink : ""}><Typography variant='h6'> {data?.instaUsername}</Typography></Link></Box>
                </Box>
            </Box>
        </Box >
    )
}

export default SocialCompReal