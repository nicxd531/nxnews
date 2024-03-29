"use client"
import { Box, Button, Divider, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import HomePostTemplate2 from "./HomePostTemplate2"
import { getAllPost } from '../../../client/request'
import { errorhandler } from '../../../utils/common'

function HotTopics() {
  // hot topic component and states for managing functions 
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [noPost, setNoPost] = React.useState(false);
  const [loading, setLoading] = React.useState(true)
  // const for filtering through data based on conditions 
  const filteredData1 = post?.filter((data) => data.categories == "Political")
  const filteredData2 = post?.filter((data) => data.categories == "Life")
  const filteredData3 = post?.filter((data) => data.categories == "Finance")
  let filteredData =[filteredData1 && filteredData1[0],filteredData2 && filteredData2[0],filteredData3 && filteredData3[0]]
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
            console.log(post);
            setError("failed to load, Check connection");
          }
        }
        setLoading(false);
      } catch (error) {
        setError(errorhandler(error));
      }
    };
    fetchId();
  }, []);
  return (
    <Box sx={{ width: "100%", mt: 6,mb:{xs:4,lg:10} }}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", lg: "32px" } }}>Hot Topics News</Typography>
        <Button variant="contained">View All</Button>
      </Box>
      <Divider variant="inset" sx={{ mt: 2, ml: 0, height: "2px", size: "2px" ,bgcolor:"grey"}} />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: { xs: 2, lg: 4 }, flexWrap: "wrap" }}>

        {
          filteredData?.map((data, index) => {
            return (
              <HomePostTemplate2 data={data} key={index} loading={loading} />
            )
          })
        }

      </Box>
    </Box>
  )
}

export default HotTopics