import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import HomePostTemplate2 from "./HomePostTemplate2"
import post from "../../../data/post.json"

function HotTopics() {
  const filteredData1 = post?.filter((data) => data.categories == "Political")
  const filteredData2 = post?.filter((data) => data.categories == "Entertainment")
  const filteredData3 = post?.filter((data) => data.categories == "Finance")
  let filteredData =[]
  filteredData.push(filteredData1.slice(0,1))
  filteredData.push(filteredData2.slice(0,1))
  filteredData.push(filteredData3.slice(0,1))
  console.log(filteredData)
  return (
    <Box sx={{ width: "100%", mt: 6 }}>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: { xs: "1.5rem", lg: "32px" } }}>Hot Topics News</Typography>
        <Button variant="contained">View All</Button>
      </Box>
      <Divider variant="inset" sx={{ mt: 2, ml: 0, height: "2px", size: "2px" ,bgcolor:"grey"}} />
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: { xs: 2, lg: 4 }, flexWrap: "wrap" }}>

        {
          filteredData?.map((data, index) => {
            return (
              <HomePostTemplate2 data={data[0]} key={index} />
            )
          })
        }

      </Box>
    </Box>
  )
}

export default HotTopics