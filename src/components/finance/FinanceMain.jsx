"use client"
import { Box } from '@mui/material'
import React from 'react'
import post from "../../../data/post.json"
import HomePostTemplate2 from '../reuseable/HomePostTemplate2'
import Pg from '../reuseable/Pg'

function FinanceMain() {
    const filteredData = post?.filter((data) => data.categories == "Finance")
    // const forlisting required pages 
    // states for current page 
    const [currentPage, setCurrentPage] = React.useState(1);
    const itemsPerPage = 6; // Set the number of items per page
    // data slicing constant for items on each page
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const currentData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    return (
        <Box sx={{ width: { xs: "100%", lg: "79%" } }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: { xs: 2, lg: 4 }, flexWrap: "wrap" }}>

                {
                    filteredData?.map((data, index) => {
                        return (
                            <HomePostTemplate2 data={data} key={index} />
                        )
                    })
                }

            </Box>
            <Pg totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </Box>
    )
}

export default FinanceMain