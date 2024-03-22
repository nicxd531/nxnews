"use client"
import React from 'react'
import { Box } from '@mui/material'
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
import Hs2skelenton from '../Skelentons/Hs2skelenton';

function HomeMiddle({ post }) {
  const [loading, setLoading] = React.useState(false)
  return (
    <Box sx={{mb:2}}>
      {loading ? <HS1skelenton /> : <HomeSection1 post={post} />}
      {loading ? <HS1skelenton /> : <HomeSection2 post={post} />}
      {loading ? <HS1skelenton /> : <HomeSection3 />}
      {loading ? <HS1skelenton /> : <HomeSection4 />}
      {loading ? <HS1skelenton /> : <HomeSection5 post={post} />}
      {loading ? <HS1skelenton /> : <HomeSection6 post={post} />}
      {loading ? <HS1skelenton /> : <HomeSection7 post={post} />}
      {loading ? <HS1skelenton /> : <HomeSection8 post={post} />}
      {loading ? <HS1skelenton /> : <HomeSection9 post={post} />}
      {loading ? <HS1skelenton /> : <HomeSection10 post={post} />}
      {loading ? <HS1skelenton /> : <HomeSection11 post={post} />}
      {loading ? <HS1skelenton /> : <HomeSection12 />}
    </Box>
  )
}

export default HomeMiddle