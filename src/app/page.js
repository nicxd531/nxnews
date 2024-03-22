import { Container, Paper, Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

import post from "../../data/post.json";
import HomeMiddle from "../components/home/HomeMiddle";

export default function Home() {
  return (
    <Box>
      <Box component="main">
        <HomeMiddle post={post} />
      </Box>
    </Box>
  );
}
