"use client"
import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { baseUrl } from '../../../client/config';
import axios from 'axios';
import SearchResult from "./SearchResult"


function SearchBar() {
    // mini search bar ,states and constants for categories
    const categories = ["Sport", "Health", "Political", "Business", "Finance", "Life", "Entertainment"]
    const [filter, setFilter] = React.useState(false)
    const [data, setData] = React.useState(null)
    const [searching, setSearching] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [realData, setRealData] = React.useState(null)
    // function for searching 
    const search = async () => {
        try{
            setSearching(true)
        setLoading(true)
        const res = await axios.get(baseUrl + `/post/search?query=${data}`);
        const dataMain = res.data
        if (dataMain?.hasError) {
            setLoading(false)
            setError("error fetching ")
        } else if (!dataMain?.hasError) {
            setRealData(dataMain)
            setLoading(false)
        } else if (dataMain?.body?.length > 0) {
            setLoading(false)
            setError("not Found ")
        }

        }catch(err){
            setError("failed to load")
        }
    }
    const width = {
        width: "60%",
        left: 260
    }
    return (
        <Box sx={{ mt: { xs: 3, lg: 6 }, zIndex: "0", position: "relative", width: "100%", zIndex: 1200 }}>
            <Box sx={{ width: "100%", textAlign: "center" }}>
                <Typography variant="h3" sx={{ textTransform: "capitalize", fontWeight: "bold", width: { xs: "100%", lg: "40%" }, mx: "auto", fontSize: { xs: "1.5rem", lg: "3rem" } ,mt:{xs:3,lg:0}}}>read the latest news from around the world</Typography>
            </Box>
            <Box sx={{ width: "100%", mt: { xs: 3, lg: 6 } }}>
                <Paper
                    component="form"
                    sx={{ display: 'flex', width: { xs: "90%", lg: 400 }, mx: "auto", bgcolor: "#fafafa", flexDirection: "column" }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', p: 1 }}>
                        <InputBase
                            sx={{ ml: 1, flexGrow: 2, color: "black", width: "100%" }}
                            placeholder="Search News here..."
                            inputProps={{ 'aria-label': 'Search News here..' }}
                            onChange={(e) => setData(e.target.value)}
                        />
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={search}>
                            <SearchIcon sx={{ color: "black" }} />
                        </IconButton>
                        <Divider sx={{ height: 28, m: 0.5, color: "black", bgcolor: "black", mr: 1 }} orientation="vertical" />
                        <Typography>Filter</Typography>
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={() => setFilter(!filter)}>
                            <MenuIcon sx={{ color: "black" }} />
                        </IconButton>
                    </Box>

                </Paper>
                {filter && <Box sx={{ display: "flex", width: { xs: "100%", lg: "600px" }, justifyContent: "space-between", mt: 2, mx: "auto", flexWrap: { xs: "wrap" } }}>
                    {categories?.map((data, index) => {
                        return (
                            <Button key={index} variant='contained' sx={{ bgcolor: "#fafafa", mt: { xs: 1, lg: 0 } }}>
                                {data}
                            </Button>
                        )
                    })}
                </Box>}
            </Box>
            {searching && <div>
                <SearchResult loading={loading} data={realData?.body} error={error} setSearching={setSearching} width={width} />
            </div>}
        </Box>
    )
}

export default SearchBar