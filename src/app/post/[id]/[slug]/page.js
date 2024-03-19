"use client";
import { Alert, Box } from "@mui/material";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { getSinglePost } from "../../../../../client/request";
import { errorhandler } from "../../../../../utils/common";

function SingleBlog({ params }) {
    console.log(params,"params cliemt")
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
        const post = await getSinglePost(params.id);
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
        console.log(error)
        setError(errorhandler(error));
      }
    };
    fetchId();
  }, []);
  return (
    <Box sx={{ height: "100vh" }}>
      {/* {error && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
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
      )} */}
      single post
    </Box>
  );
}

export default SingleBlog;
