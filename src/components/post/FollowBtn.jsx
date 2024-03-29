"use client"
import React, { useEffect } from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import { getSession } from 'next-auth/react'
import { follow } from '../../../client/request'
import { useRouter } from 'next/navigation'
import ErrorHandleComp from '../reuseable/ErrorHandleComp'

function FollowBtn({ user }) {
    // main follow component for handling follow
    // const for holding ids and followers of content creator 
    const contentCreatorId = user._id
    const contentCreatorFollowers = user?.followers
    // state mangement for follow function
    const [userId, setUserId] = React.useState(null)
    const [following, setFollowing] = React.useState(false)
    const [session, setSession] = React.useState(null)
    const [error, setError] = React.useState(false)
    const route = useRouter()
    // handle follow function 
    const handleFollow = async () => {
        if (!session) {
            route.replace("/login")
        }
        const data = { contentCreatorId, userId }
        const result = await follow(data)
        if (!result?.hasError) {
            setFollowing(true)
        } else if (result?.hasError) {
            setError("failed to follow")
        }

    }
    // useEffect for handling following 
    useEffect(() => {
        const verify = async () => {
            const session = await getSession()
            setSession(session)
            const userId = session?.user?.id
            setUserId(userId)
            const check = contentCreatorFollowers?.filter((follower) => follower == userId)
            if (check && check.length > 0) {
                setFollowing(true)
            } else if (!check || check.length <= 0) {


                setFollowing(false)
            }
        }
        verify()
    }, [contentCreatorFollowers])
    return (
        error ? <ErrorHandleComp error={error} /> :
            <Box sx={{ mt: { xs: 2, lg: 4 } }}>
                <Button variant='contained' disabled={following} onClick={handleFollow}>{following ? "following" : "Follow"}</Button>
            </Box>
    )
}

export default FollowBtn