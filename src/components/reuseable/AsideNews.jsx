"use client"
import { Box, IconButton, Typography } from '@mui/material'
import React, { useEffect } from "react";
import { getAllPost } from "../../../client/request";
import { errorhandler } from "../../../utils/common";
import NoPost from "../reuseable/NoPost";
import { AnimatePresence, motion } from "framer-motion";
import AlertSuccess from "../reuseable/AlertSuccess";
import AlertError from "../reuseable/AlertError";
import AsideSkelenton from '../Skelentons/AsideSkelenton';
import Link from 'next/link';
import { DateTime } from 'luxon';

function AsideNews() {
    // aside news component and states 
    const [revalidate, setRevalidate] = React.useState(1);
    const [loading, setLoading] = React.useState(false)
    const [post, setPost] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [noPost, setNoPost] = React.useState(false);
    // const for holding map data and sliced data
    const data = post?.slice(1, 6)
    const mapData = !error && (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                p: 2,
            }}
        >
            {error && (
                <AnimatePresence>
                    {error && (
                        <motion.div
                            exit={{ scale: 0.0 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                        >
                            {error == "Log in sucessful" ? (
                                <AlertSuccess message={error} />
                            ) : (
                                <AlertError message={error} />
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
            {!noPost ? (
                post && data?.map((data, index) => {
                    // Parse the MongoDB date string into a DateTime object
                    const dateTime = DateTime.fromISO(data.createdAt);

                    // Format the date as desired (e.g., 'May 1, 2022')
                    const formattedDate = dateTime.toFormat('MMMM d, yyyy');
                    return (
                        <Box key={index} sx={{ height: "18%", width: "100%", display: "flex" }}>
                            <Link href={`/post/${data?._id}/${data?.slug}`} style={{ width: "100%" }}>
                                <IconButton sx={{ textAlign: "start", color: "inherit", p: 0, borderRadius: 0, height: "100%", width: "100%" }}>
                                    <Box sx={{ width: "30%", objectFit: "cover", height: "100%" }}>
                                        <img src={data.mainImage} alt='post image' style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                                    </Box>
                                    <Box sx={{ ml: 1, width: "69%" }}>
                                        <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>{data.mainHeading}</Typography>
                                        <Typography sx={{ mt: 2, fontSize: "0.9rem" }}>{formattedDate}</Typography>
                                    </Box>
                                </IconButton>
                            </Link>
                        </Box>
                    )
                })

            ) : (
                <NoPost />
            )}
        </Box>
    );
    // use effect hook for getting all post
    useEffect(() => {
        const fetchId = async () => {
            try {
                setError(false);
                setLoading(true);
                const post = await getAllPost();
                if (post == null) {
                    setError("Failed to fetch, Check connection");
                    setLoading(false);
                } else if (post) {
                    if (!post.hasError) {
                        if (post == []) {
                            setNoPost(true)
                            setLoading(false);
                        }
                        setPost(post.body.posts);
                    } else if (post.hasError) {
                        setError("failed to load, Check connection");
                    }
                }
                setLoading(false);
            } catch (error) {
                setError("failed to load, Check connection");
            }
        };
        fetchId();
    }, []);
    return (
        <Box sx={{ pt: 3, width: "100%", height: { xs: "fit-content", lg: "100%" }, display: "flex", justifyContent: "space-between", flexWrap: "wrap", mt: { xs: 2, lg: 0 }, px: { xs: 1, lg: 0 } }}>
            {loading ? <AsideSkelenton /> : mapData}
        </Box>
    )
}

export default AsideNews