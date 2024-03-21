"use client"
import React, { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, Box, Button, Divider, Typography } from '@mui/material'
import Link from 'next/link';
import Loading from "../../components/reuseable/Loading"
import { getSession } from 'next-auth/react';
import { getUserData } from '../../../client/request';
import SocialCompfake from './SocialCompfake';
import SocialCompReal from './SocialCompReal';


export default function ProfileDrawerSm() {
    // side panel for mobile display for profile page 
    // states for handling component data
    const [state, setState] = React.useState(false);
    const [type, setType] = React.useState("post")
    const [active, setActive] = React.useState("post")
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState("")
    const [error, setError] = React.useState(false);
    const display = data ? <SocialCompReal data={data} /> : <SocialCompfake />
    //    use effect hook for getting user data using id 
    useEffect(() => {
        const get = async () => {
            // get session,extract id , use id to get user data
            const session = await getSession()
            if (session?.user) {
                setLoading(true)
                try {
                    const { id } = session?.user
                    const result = await getUserData(id)
                    setLoading(false)
                    if (!result?.hasError) {
                        setData(result?.body)
                        setLoading(false)
                    } else if (result?.hasError) {
                        setError(true)
                    }
                } catch (err) {
                    setLoading(false)
                    setError(true)
                }
            }
        }
        get()

    }, [])
    // toggle drawer function fo openning the drawer on mobile 
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
                {loading ? <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}> <Loading /></Box> : display}
                <Divider sx={{ bgcolor: "grey" }} />
                <Box>
                    <Divider variant='inset' sx={{ ml: 0, mt: 2, bgcolor: "grey" }} />
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