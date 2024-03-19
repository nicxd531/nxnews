import { Container, Paper, Box } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeSection1 from "../components/home/HomeSection1";
import HomeSection2 from "../components/home/HomeSection2";
import HomeSection3 from "../components/home/HomeSection3";
import HomeSection4 from "../components/home/HomeSection4";
import HomeSection5 from "../components/home/HomeSection5";
import HomeSection6 from "../components/home/HomeSection6";
import HomeSection7 from "../components/home/HomeSection7";
import HomeSection8 from "../components/home/HomeSection8";
import HomeSection9 from "../components/home/HomeSection9";
import HomeSection10 from "../components/home/HomeSection10";
import HomeSection11 from "../components/home/HomeSection11";
import HomeSection12 from "../components/home/HomeSection12";
import post from "../../data/post.json"

export default function Home() {
  
  return (
      <Box>
        <Box component="main" >
          <HomeSection1 post={post}/>
          <HomeSection2 post={post}/>
          <HomeSection3 />
          <HomeSection4/>
          <HomeSection5 post={post}/>
          <HomeSection6  post={post}/>
          <HomeSection7  post={post}/>
          <HomeSection8  post={post}/>
          <HomeSection9  post={post}/>
          <HomeSection10  post={post}/>
          <HomeSection11  post={post}/>
          <HomeSection12/>
        </Box>
      </Box>
  );
}
