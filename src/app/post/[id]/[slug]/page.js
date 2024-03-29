"use client";
import { Box, Container } from "@mui/material";
import { getSession } from "next-auth/react";
import React, { useEffect } from "react";
import { getSinglePost, getUserData } from "../../../../../client/request";
import { errorhandler } from "../../../../../utils/common";
import SinglePost from "../../../../components/post/SinglePost";
import ContentCreator from "../../../../components/post/ContentCreator";
import HotTopics from "../../../../components/reuseable/HotTopics";

function SingleBlog({ params }) {
  // main single post component and state management for single post
  const [post, setPost] = React.useState(null);
  const [session, setSession] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [userContent, setUserContent] = React.useState(true);
  // use effect function for getting single post
  useEffect(() => {
    const fetchId = async () => {
      try {
        setError(false);
        setLoading(true);
        const session = await getSession();
        const userId = await session.user.id;
        const postM = await getSinglePost(params.id);
        if (postM == null) {
          setError("Failed to fetch, Check connection");
          setLoading(false);
        } else if (postM) {
          if (!postM.hasError) {
            if (postM?.body?.posts?.user?._id) {
              const UserC = await getUserData(postM?.body?.posts?.user?._id);
              setUserContent(UserC?.body);
            }
            setPost(postM?.body?.posts);
            setSession(session);
          } else if (postM.hasError) {
            setError("failed to load, Check connection");
          }
        }
        setLoading(false);
      } catch (error) {
        setError(errorhandler(error));
      }
    };
    fetchId();
  }, [params.id]);

  return (
    <Container
      maxWidth="xxl"
      className="no-padding"
      sx={{ p: 0, minHeight: "100vh", mt: 6 }}
    >
      <SinglePost post={post} error={error} loading={loading} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          width: "100%",
          px: { xs: 3, lg: 6 },
        }}
      >
        <ContentCreator user={userContent} loading={loading} error={error} />
        <HotTopics />
      </Box>
    </Container>
  );
}

export default SingleBlog;
