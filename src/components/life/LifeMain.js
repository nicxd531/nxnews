"use client";
import { Box } from "@mui/material";
import React from "react";
import post from "../../../data/post.json";
import HomePostTemplate3 from "../reuseable/HomePostTemplate3";
import Pg from "../reuseable/Pg";
import BasicPostTemplate from "../Skelentons/BasicPostTemplate";

function LifeMain() {
  const filteredData = post?.filter((data) => data.categories == "Life");
  // const forlisting required pages
  // states for current page
  const [currentPage, setCurrentPage] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const itemsPerPage = 6; // Set the number of items per page
  // data slicing constant for items on each page
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <Box sx={{ width: { xs: "100%", lg: "79%" } }}>
      {loading ? (
        <BasicPostTemplate />
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: { xs: 2, lg: 4 },
              flexWrap: "wrap",
            }}
          >
            {filteredData?.map((data, index) => {
              return <HomePostTemplate3 data={data} key={index} />;
            })}
          </Box>
          <Pg
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </Box>
  );
}

export default LifeMain;
