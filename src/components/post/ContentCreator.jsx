import { Avatar, Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import XIcon from '@mui/icons-material/X';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import PeopleIcon from '@mui/icons-material/People';
import Loading from '../reuseable/Loading';
import ErrorHandleComp from '../reuseable/ErrorHandleComp';
import FollowBtn from "./FollowBtn"

function ContentCreator({ user, loading, error }) {
    // main component for displaying content creators data and const for holding followers and following 
    const following = user?.following == [] ? 0 : user?.following
    const followers = user?.followers == [] ? 0 : user?.followers
    return (
        error ? <ErrorHandleComp error={error} /> :
            <Box sx={{ display: "flex", minHeight: "300px", justifyContent: "center", alignItems: "center", width: { xs: "100%", lg: "50%" }, flexDirection: "column", mt: { xs: 2, lg: 4 }, mb: { xs: 4, lg: 6 } }}>
                <Divider variant='inset' sx={{ width: "100%", bgcolor: "grey", ml: 0 }} />
                {loading ? <Loading /> :
                    (<><Box sx={{ display: "flex", mt: { xs: 2, lg: 4 } }}>
                        <Avatar alt='content creators image' src={user?.avatarImage && user?.avatarImage} />
                        <Box sx={{ ml: { xs: 1, lg: 2 } }}>
                            <Typography sx={{ fontWeight: "bold", textTransform: "capitalize" }}>{user?.name}</Typography>
                            <Typography>about author</Typography>
                        </Box>
                    </Box>
                        <Box sx={{ display: "flex", mt: { xs: 2, lg: 4 } }}>
                            <PeopleIcon sx={{ mr: 1 }} />
                            <Typography>{followers?.length}<span className='text-muted  ms-1'>Followers</span> </Typography>
                            <Typography sx={{ ml: 2 }}>{following?.length}<span className='text-muted ms-1'>Following</span> </Typography>
                        </Box>
                        <Box sx={{ mt: { xs: 2, lg: 4 }, textAlign: "center", width: "100%", display: "flex", alignItems: 'center', justifyContent: "center" }}>

                            <Typography sx={{ width: { xs: "70%", lg: "50%" }, textAlign: "center" }}>{user?.about}</Typography>
                        </Box>
                        <FollowBtn user={user} />
                        <Box sx={{ mt: { xs: 2, lg: 4 } }}>
                            <Typography>connect with author</Typography>
                            <Box sx={{ display: "flex" }}>
                                <Box sx={{ display: "flex", mt: 1 }}> <Link href={user?.linkUrl ? user?.linkUrl : ""}><InsertLinkIcon sx={{ mr: 2 }} /></Link></Box>
                                <Box sx={{ display: "flex", mt: 1 }}> <Link href={user?.twitterLink ? user?.twitterLink : ""}><XIcon sx={{ mr: 2 }} /></Link></Box>
                                <Box sx={{ display: "flex", mt: 1 }}><Link href={user?.instaLink ? user?.instaLink : ""}><InstagramIcon sx={{ mr: 2 }} /></Link></Box>
                            </Box>
                        </Box>
                    </>)}
            </Box>
    )
}

export default ContentCreator