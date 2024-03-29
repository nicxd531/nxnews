import { Container, Paper, Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

import post from "../../data/post.json";
import HomeMiddle from "../components/home/HomeMiddle";

export default function Home() {
  // main home page
  return (
    <Box sx={{minHeight:"100vh",overflow:"hidden"}}>
      <Box component="main" >
        <HomeMiddle post2={post} />
      </Box>
    </Box>
  );
}
