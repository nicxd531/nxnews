"use client"
import { Box, Divider, IconButton, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import ErrorHandleComp from '../reuseable/ErrorHandleComp'
import { like } from "../../../client/request"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Like({ post }) {
    // like component for handling likes 
    // state management for likes const for holding post likes 
    const postId = post._id
    const [liked, setLiked] = React.useState(false)
    const [postLikes, setPostLikes] = React.useState(post?.likes)
    const [userId, setUserId] = React.useState(null)
    const [session, setSession] = React.useState(null)
    const [error, setError] = React.useState(false)
    const route = useRouter()
    // handle like function for handling liking 
    const handleLike = async (action) => {
        setLiked(!liked)
        if (!session) {
            route.replace("/login")
        }
        const data = { postId, userId, action,postLikes }
        const result = await like(data)
        console.log(result)
        if (!result?.hasError) {
            const res =result.body
            console.log(res)
            setLiked(res?.liked)
            setPostLikes(res?.newLikes)
        } else if (result?.hasError) {
            setError("failed to like")
        }

    }
    // use effect function for like  management 
    useEffect(() => {
        const verify = async () => {
            const session = await getSession()
            setSession(session)
            const userId = session?.user?.id
            setUserId(userId)
            const check = postLikes?.includes(userId)
            console.log(check,postLikes,userId,"single post")
            if (check) {
                setLiked(true)
            } else if (!check) {
                setLiked(false)
            }
        }
        verify()
    }, [postLikes])

    return (
            
            error ? < Box sx={{ position: "fixed",top:{xs:450,lg:470},display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"30px",zIndex:1200}}> <ErrorHandleComp error={error} /></Box> :
            <Box className="bg-color" sx={{right:{xs:"33%",lg:"45%"}, position: "fixed",top:{xs:"92%",lg:"92%"},display:"flex",justifyContent:"center",alignItems:"center",px:{xs:1,lg:2},borderRadius:"30px"}}>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}} >
                    <Typography>Like</Typography>
                    {!liked ? <IconButton onClick={() => handleLike("like")}>{<FavoriteBorderIcon sx={{ width: "24px", height: "24px" }} />}</IconButton> :
                        <IconButton onClick={() => handleLike("unlike")}>{<FavoriteIcon sx={{ width: "24px", height: "24px" }} />}</IconButton>}
                </Box>
                <Divider sx={{ height: "100%", display: "inline", width: "4px", bgcolor: "white" ,mr:1}} orientation="vertical" />
                <Box>
                    <Typography>Likes: {postLikes?.length}</Typography>
                </Box>
            </Box>
    )
}

export default Like