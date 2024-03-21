import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SubscribeMain from "../../components/subscribe/subscribeMain";
import HotTopics from "../../components/reuseable/HotTopics";

export default function page() {
  // main subscribe page 
  const para =
    "Montes est quam felis cursus parturient volutpat, vitae pulvinar a donec nam massa pretium, justo velit maecenas sem magna. Molestie vulputate porttitor maecenas netus semper accumsan dapibus tempor sociis, fringilla curae torquent suscipit velit ante pretium odio est nisi, augue vehicula ultrices natoque taciti potenti rhoncus conubia. Ad taciti quam porta montes felis sodales tempor eleifend porttitor fusce suscipit posuere orci cum potenti auctor erat, at pharetra etiam tellus bibendum morbi ullamcorper pulvinar per urna risus purus nullam mus aliquam.";
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: { xs: 2, lg: 6 },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          width: { xs: "100%", lg: "40%", textAlign: "center" },
          mt: 6,
          fontWeight: "bold",
          fontSize: { xs: "2rem", lg: "2.5rem" },
          textTransform: "capitalize",
        }}
      >
        subscribe now for the latest and exclusive information alerts
      </Typography>
      <Typography
        sx={{
          width: { xs: "100%", lg: "70%" },
          mt: 2,
          textAlign: "center",
          fontSize: { xs: "0.8rem", lg: "1rem" },
        }}
        className="text-muted"
      >
        {para}
      </Typography>
      <SubscribeMain />
      <HotTopics />
    </Box>
  );
}
