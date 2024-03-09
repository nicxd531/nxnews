"use client"
import { Avatar, Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import XIcon from '@mui/icons-material/X';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

function ProfilePanel() {
    const [active, setActive] = React.useState("post")
    return (
        <Box sx={{ width: "20%", display: { xs: "none", lg: "inline" }, p: 4 }}>
            <Box sx={{ width: "100%" }}>
                <Avatar alt="Remy Sharp" sx={{ width: 200, height: 200, mx: "auto" }} />
            </Box>
            <Box>
                <Box sx={{ mt: 4 ,mb:1}}>
                    <Typography variant='h5'>Ola Olasunkanmi</Typography>
                </Box>
                <Box >
                    <Typography variant='h6' className='text-muted'>nicxd531</Typography>
                </Box>
                <Box sx={{ mt: 2, mb: 1 }}>
                    <Typography variant='h6' sx={{fontSize:{xs:"12px"}}}>Lagos-based front-end developer skilled in mobile-first approach, problem-solving and React. Always pushing boundaries and exploring new technologies.</Typography>
                </Box>

            </Box>
            <Divider />
            <Box>
                <Box sx={{ display: "flex", mt: 2 }}>
                    <PeopleIcon sx={{mr:1}}/>
                    <Typography>23<span className='text-muted  ms-1'>Followers</span> </Typography>
                    <Typography sx={{ ml: 2 }}>40<span className='text-muted ms-1'>Following</span> </Typography>
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Box sx={{ display: "flex", mt: 1 }}><BusinessIcon sx={{ mr: 2 }}/><Typography variant='h6'>Occupation</Typography></Box>
                    <Box sx={{ display: "flex", mt: 1 }}><LocationOnIcon sx={{ mr: 2 }}/><Typography variant='h6'>Location</Typography></Box>
                    <Box sx={{ display: "flex", mt: 1 }}><AccessTimeIcon sx={{ mr: 2 }}/><Typography variant='h6'>Time</Typography></Box>
                    <Box sx={{ display: "flex", mt: 1 }}><MailIcon sx={{ mr: 2 }} /><Typography variant='h6'>Email</Typography></Box>
                    <Box sx={{ display: "flex", mt: 1 }}><InsertLinkIcon sx={{ mr: 2 }}/><Typography variant='h6'> Link</Typography></Box>
                    <Box sx={{ display: "flex", mt: 1 }}><XIcon sx={{ mr: 2 }} /><Typography variant='h6'>Twitter</Typography></Box>
                    <Box sx={{ display: "flex", mt: 1 }}><InstagramIcon sx={{ mr: 2 }} /><Typography variant='h6'> Instagram</Typography></Box>
                </Box>
                <Divider variant='inset' sx={{ ml: 0, mt: 2 }} />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Link href="/profile" > <Button onClick={() => setActive("post")} variant={active == "post" ? "contained" : "outlined"} sx={{ p: 1, mt: 2,width:"100%" }}>Articles</Button></Link>
                    <Link href="/profile/EditProfile"> <Button onClick={() => setActive("edit")} variant={active == "edit" ? "contained" : "outlined"} sx={{ p: 1, width: "100%", mt: 2 }}>Edit Profile</Button></Link>
                    <Link href="/profile/CreateNews"><Button onClick={() => setActive("create")} variant={active == "create" ? "contained" : "outlined"} sx={{ p: 1, mt: 2,width:"100%" }}>Create News</Button></Link>
                </Box>
            </Box>
        </Box>
    )
}

export default ProfilePanel