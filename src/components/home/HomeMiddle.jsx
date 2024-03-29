"use client"
import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { getAllPost } from '../../../client/request'
import { errorhandler } from '../../../utils/common'
import HomeSection1 from "./HomeSection1";
import HomeSection2 from "./HomeSection2";
import HomeSection3 from "./HomeSection3";
import HomeSection4 from "./HomeSection4";
import HomeSection5 from "./HomeSection5";
import HomeSection6 from "./HomeSection6";
import HomeSection7 from "./HomeSection7";
import HomeSection8 from "./HomeSection8";
import HomeSection9 from "./HomeSection9";
import HomeSection10 from "./HomeSection10";
import HomeSection11 from "./HomeSection11";
import HomeSection12 from "./HomeSection12";
import HS1skelenton from '../Skelentons/HS1skelenton';
import HomeSectionLife from './HomeSectionLife'
import ErrorHandleComp from '../reuseable/ErrorHandleComp'

function HomeMiddle({ post2 }) {
  // middle man component for home page and state management for home page 
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [noPost, setNoPost] = React.useState(false);
  const [loading, setLoading] = React.useState(true)

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
    error ?<ErrorHandleComp error={error}/> :
    (<Box sx={{ mb: 2,mt:6 }}>
      {loading ? <HS1skelenton /> : <HomeSection1 post={post} noPost={noPost} error={error}/>}
      {loading ? <HS1skelenton /> : <HomeSection2 post={post} noPost={noPost} error={error} />}
      {loading ? <HS1skelenton /> : <HomeSection3 />}
      {loading ? <HS1skelenton /> : <HomeSection4 post={post} noPost={noPost} error={error}/>}
      {loading ? <HS1skelenton /> : <HomeSection5 post={post} noPost={noPost} error={error}/>}
      {loading ? <HS1skelenton /> : <HomeSection6 post={post} noPost={noPost} error={error}/>}
      {loading ? <HS1skelenton /> : <HomeSection7 post={post} noPost={noPost} error={error}/>}
      {loading ? <HS1skelenton /> : <HomeSection8 post={post} noPost={noPost} error={error}/>}
      {loading ? <HS1skelenton /> : <HomeSection9 post={post} noPost={noPost} error={error}/>}
      {loading ? <HS1skelenton /> : <HomeSection10 post={post} noPost={noPost} error={error}/>}
      {loading ? <HS1skelenton /> : <HomeSection11 post={post} noPost={noPost} error={error}/>}
      {loading ? <HS1skelenton /> : <HomeSectionLife post={post} noPost={noPost} error={error}/>}
      {loading ? <HS1skelenton /> : <HomeSection12 />}
    </Box>)
  )
}

export default HomeMiddle