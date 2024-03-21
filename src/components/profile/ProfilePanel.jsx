"use client"
import React, { useEffect } from 'react';
import { Box, Button, Divider, } from '@mui/material'
import Link from 'next/link';
import Loading from "../../components/reuseable/Loading"
import { getSession } from 'next-auth/react';
import { getUserData } from '../../../client/request';
import SocialCompfake from './SocialCompfake';
import SocialCompReal from './SocialCompReal';


function ProfilePanel() {
    // the profile panel component fo big screens 
    // states for handling components data 
    const [active, setActive] = React.useState("post")
    const [loading, setLoading] = React.useState(false)
    const [data, setData] = React.useState("")
    const [error, setError] = React.useState(false)
    // constant for switching btw fake and real data 
    const display = data ? <SocialCompReal data={data} /> : <SocialCompfake />
    // use effect hook for getting user data from db 
    useEffect(() => {
        const get = async () => {
            // get session,extract id ,use id to get specific user data
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
    return (
        <>
            <Box sx={{ width: "20%", display: { xs: "none", lg: "inline" }, p: 4 }}>
                {loading ? <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}> <Loading /></Box> : display}
                <Divider variant='inset' sx={{ ml: 0, mt: 2, bgcolor: "gray" }} />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Link href="/profile" > <Button onClick={() => setActive("post")} variant={active == "post" ? "contained" : "outlined"} sx={{ p: 1, mt: 2, width: "100%" }}>Articles</Button></Link>
                    <Link href="/profile/EditProfile"> <Button onClick={() => setActive("edit")} variant={active == "edit" ? "contained" : "outlined"} sx={{ p: 1, width: "100%", mt: 2 }}>Edit Profile</Button></Link>
                    <Link href="/profile/CreateNews"><Button onClick={() => setActive("create")} variant={active == "create" ? "contained" : "outlined"} sx={{ p: 1, mt: 2, width: "100%" }}>Create News</Button></Link>
                </Box>
            </Box>
        </>

    )
}

export default ProfilePanel