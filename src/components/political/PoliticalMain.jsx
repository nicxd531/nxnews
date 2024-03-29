"use client"
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import HomePostTemplate3 from '../reuseable/HomePostTemplate3'
import Pg from '../reuseable/Pg'
import BasicPostTemplate from "../Skelentons/BasicPostTemplate"
import { getAllPost } from '../../../client/request'
import { errorhandler } from '../../../utils/common'
import NoPost from '../reuseable/NoPost'
import { AnimatePresence, motion } from 'framer-motion'
import AlertSuccess from '../reuseable/AlertSuccess'
import AlertError from '../reuseable/AlertError'
import ErrorHandleComp from '../reuseable/ErrorHandleComp'


function PoliticalMain() {
    // states for current page 
    const [post, setPost] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [noPost, setNoPost] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [loading, setLoading] = React.useState(true)
    // const forlisting required pages & data slicing constant for items on each page
    const filteredData = post?.filter((data) => data?.categories == "Political")
    const itemsPerPage = 6; // Set the number of items per page
    const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
    const currentData = filteredData?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    const mapData = !error && (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                p: 2,
            }}
        >
            {error && <ErrorHandleComp error={error} />}
            {(Array.isArray(filteredData) && filteredData?.length > 0) ? (
                post &&
                <>
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: { xs: 2, lg: 4 }, flexWrap: "wrap" }}>

                        {
                            currentData?.map((data, index) => {
                                return (
                                    <HomePostTemplate3 data={data} key={index} error={error} />
                                )
                            })
                        }

                    </Box>
                    <Pg totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </>
            ) : (
                <NoPost />
            )}
        </Box>
    );
    // use effect hook for getting user specific posts
    useEffect(() => {
        const fetchId = async () => {
            try {
                setError(false);
                setLoading(true);
                const post = await getAllPost()
                if (post == null) {
                    setError("Failed to fetch, Check connection");
                    setLoading(false);
                } else if (post) {
                    if (!post.hasError) {
                        if (post == []) {
                            setNoPost(true);
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
        <Box sx={{ width: { xs: "100%", lg: "79%" }, minHeight: "100vh" }}>
            {
                error ? <ErrorHandleComp error={error} /> :
                    (loading ? <BasicPostTemplate /> : mapData)
            }
        </Box >
    )
}

export default PoliticalMain