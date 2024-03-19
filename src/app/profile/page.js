"use client";
import React, { useEffect, useState } from "react";
import { Alert, Box, Typography } from "@mui/material";
import { getSession } from "next-auth/react";
import { getUserPost } from "../../../client/request";
import { errorhandler, responsehandler } from "../../../utils/common";
import { useRouter } from "next/navigation";
import BasicPostTemplate from "../../components/Skelentons/BasicPostTemplate";
import UsersPosts from "../../components/profile/UsersPosts";
import NoPost from "../../components/reuseable/NoPost";

const ProfileArticles = () => {
  const [revalidate, setRevalidate] = React.useState(1);
  const [post, setPost] = React.useState(null);
  const [session, setSession] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const route = useRouter();
  

  useEffect(() => {
    const fetchId = async () => {
      try {
        setError(false);
        setLoading(true);
        const session = await getSession();
        if (!session) {
          route.replace("/");
        }
        const userId = await session.user.id;
        const post = await getUserPost({ userId });
        console.log(post, "post");
        if (post == null) {
          setError("Failed to fetch, Check connection");
          setLoading(false);
        } else if (post) {
          if (!post.hasError) {
            console.log(post, "nextpost");
            setPost(post.body.posts);
            setSession(session);
          } else if (post.hasError) {
            setError("failed to load, Check connection");
          }
        }

        setLoading(false);
      } catch (error) {
        setError(errorhandler(error));
      }
    };
    fetchId();
  }, [revalidate]);
 
  const mapData = !error && (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        p: 2,
      }}
    >
      { post  ?
        post.map((post, index) => {
          return <UsersPosts key={index} data={post} setRevalidate={setRevalidate} revalidate={revalidate}/>;
        }):<NoPost/>}
    </Box>
  );
  return (
    <Box sx={{ minHeight: "100vh",overflow:"hidden"}}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mt: { xs: 2, lg: 4 },
          fontWeight: "Bold",
          fontSize: { xs: "1.7rem", lg: "3rem" },
          textTransform: "capitalize",
        }}
      >
        {" "}
        Welcome to Posts {session ? session.user.name : "user"}{" "}
      </Typography>
      {error && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}
        >
          <Alert
            severity={error == "Log in sucessful" ? "success" : "error"}
            sx={{
              width: "80%",
              fontSize: { xs: "12px", lg: "16px", textTransform: "capitalize" },
              mt: 1,
            }}
          >
            {error}
          </Alert>
        </Box>
      )}
      {loading ? <BasicPostTemplate /> :mapData}
    </Box>
  );
};

export default ProfileArticles;
