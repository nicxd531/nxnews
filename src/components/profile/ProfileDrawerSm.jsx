"use client"
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Avatar, Box, Button, Divider, Typography } from '@mui/material'
import Link from 'next/link';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InsertLinkIcon from '@mui/icons-material/InsertLink';



export default function ProfileDrawerSm() {
    const [state, setState] = React.useState(false);
    const [type, setType] = React.useState("post")


    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    const list =
        <Box
            sx={{ width: 250, p: 2 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}

        >
            <Box sx={{ width: "20%", display: { xs: "inline", lg: "none" }, p: 4 }}>
                <Box sx={{ width: "100%" }}>
                    <Avatar alt="Remy Sharp" sx={{ width: 200, height: 200, mx: "auto" }} />
                </Box>
                <Box>
                    <Box sx={{ mt: 4, mb: 1 }}>
                        <Typography variant='h5'>Ola Olasunkanmi</Typography>
                    </Box>
                    <Box >
                        <Typography variant='h6' className='text-muted'>nicxd531</Typography>
                    </Box>
                    <Box sx={{ mt: 2, mb: 1 }}>
                        <Typography variant='h6' sx={{ fontSize: { xs: "12px" } }}>Lagos-based front-end developer skilled in mobile-first approach, problem-solving and React. Always pushing boundaries and exploring new technologies.</Typography>
                    </Box>

                </Box>
                <Divider />
                <Box>
                    <Box sx={{ display: "flex", mt: 2 }}>
                        <PeopleIcon sx={{ mr: 1 }} />
                        <Typography>23<span className='text-muted  ms-1'>Follower</span> </Typography>
                        <Typography sx={{ ml: 2 }}>40<span className='text-muted ms-1'>Following</span> </Typography>
                    </Box>
                    <Box sx={{ mt: 4 }}>
                        <Box sx={{ display: "flex", mt: 1 }}><BusinessIcon sx={{ mr: 2 }} /><Typography variant='h6'>Occupation</Typography></Box>
                        <Box sx={{ display: "flex", mt: 1 }}><LocationOnIcon sx={{ mr: 2 }} /><Typography variant='h6'>Location</Typography></Box>
                        <Box sx={{ display: "flex", mt: 1 }}><AccessTimeIcon sx={{ mr: 2 }} /><Typography variant='h6'>Time</Typography></Box>
                        <Box sx={{ display: "flex", mt: 1 }}><MailIcon sx={{ mr: 2 }} /><Typography variant='h6'>Email</Typography></Box>
                        <Box sx={{ display: "flex", mt: 1 }}><InsertLinkIcon sx={{ mr: 2 }} /><Typography variant='h6'> Link</Typography></Box>
                        <Box sx={{ display: "flex", mt: 1 }}><XIcon sx={{ mr: 2 }} /><Typography variant='h6'>Twitter</Typography></Box>
                        <Box sx={{ display: "flex", mt: 1 }}><InstagramIcon sx={{ mr: 2 }} /><Typography variant='h6'> Instagram</Typography></Box>
                    </Box>
                    <Divider variant='inset' sx={{ ml: 0, mt: 2 }} />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Link href="/profile" > <Button onClick={() => setType("post")} variant={type == "post" ? "contained" : "outlined"} sx={{ p: 1, mt: 2, width: "100%" }}>Articles</Button></Link>
                        <Link href="/profile/EditProfile"> <Button onClick={() => setType("edit")} variant={type == "edit" ? "contained" : "outlined"} sx={{ p: 1, width: "100%", mt: 2 }}>Edit Profile</Button></Link>
                        <Link href="/profile/CreateNews"><Button onClick={() => setType("create")} variant={type == "create" ? "contained" : "outlined"} sx={{ p: 1, mt: 2, width: "100%" }}>Create News</Button></Link>
                    </Box>
                </Box>
            </Box>
        </Box>


    return (
        <div>
            <React.Fragment>
                <Button onClick={toggleDrawer(true)} sx={{ ml: 0, mt: 2 }} ><SettingsIcon sx={{ width: '28px', height: "28px" }} /> menu</Button>
                <Divider variant='inset' sx={{ ml: 0, mt: 2 }} />
                <Drawer
                    anchor={'left'}
                    open={state}
                    onClose={toggleDrawer(false)}
                >
                    {list}
                </Drawer>
            </React.Fragment>

        </div>
    );
}