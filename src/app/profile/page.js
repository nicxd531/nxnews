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
import { AnimatePresence, motion } from "framer-motion";
import AlertError from "../../components/reuseable/AlertError";
import AlertSuccess from "../../components/reuseable/AlertSuccess";

const ProfileArticles = () => {
  // users post component for getting user specific posts
  // states for revalidte the posts are correct,post fetch ,session getting , error handling
  // loading
  const [revalidate, setRevalidate] = React.useState(1);
  const [post, setPost] = React.useState(null);
  const [session, setSession] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [noPost, setNoPost] = React.useState(false);
  const route = useRouter();
  // use effect hook for getting user specific posts
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
        if (post == null) {
          setError("Failed to fetch, Check connection");
          setLoading(false);
        } else if (post) {
          if (!post.hasError) {
            if (post == []) {
              setPost(true);
              setLoading(false);
            }
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
      {!noPost ? (
        post &&
        post.map((post, index) => {
          return (
            <UsersPosts
              key={index}
              data={post}
              setRevalidate={setRevalidate}
              revalidate={revalidate}
            />
          );
        })
      ) : (
        <NoPost />
      )}
    </Box>
  );
  return (
    <Box sx={{ minHeight: "100vh", overflow: "hidden" }}>
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
        Welcome to Posts {session ? session.user.name : "user"}
      </Typography>
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
      {loading ? <BasicPostTemplate /> : mapData}
    </Box>
  );
};

export default ProfileArticles;
