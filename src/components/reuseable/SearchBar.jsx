"use client"
import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

function SearchBar() {
    const categories = ["Sport", "Health", "Political", "Business", "Finance", "Life", "Entertainment"]
    const [filter, setFilter] = React.useState(false)
    return (
        <Box sx={{ mt: { xs: 3, lg: 6 } ,zIndex:"0"}}>
            <Box sx={{ width: "100%", textAlign: "center" }}>
                <Typography variant="h3" sx={{ textTransform: "capitalize", fontWeight: "bold", width: "40%", mx: "auto" }}>read the latest news from around the world</Typography>
            </Box>
            <Box sx={{ width: "100%", mt: { xs: 3, lg: 6 } }}>
                <Paper
                    component="form"
                    sx={{  display: 'flex', width: 400, mx: "auto", bgcolor: "#fafafa" ,flexDirection:"column"}}
                >
                    <Box sx={{display: 'flex', alignItems: 'center',p: 1}}>
                        <InputBase
                            sx={{ ml: 1, flexGrow: 2, color: "black",width:"100%" }}
                            placeholder="Search News here..."
                            inputProps={{ 'aria-label': 'Search News here..' }}
                        />

                        <Divider sx={{ height: 28, m: 0.5, color: "black", bgcolor: "black", mr: 1 }} orientation="vertical" />
                        <Typography>Filter</Typography>
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={() => setFilter(!filter)}>
                            <MenuIcon sx={{ color: "black" }} />
                        </IconButton>
                    </Box>

                </Paper>
                    {filter && <Box sx={{ display: "flex", justifyContent: "space-between",width:"600px", mt: 2 ,mx:"auto"}}>
                        {categories?.map((data, index) => {
                            return (
                                <Button key={index} variant='contained' sx={{ bgcolor: "#fafafa" }}>
                                    {data}
                                </Button>
                            )
                        })}
                    </Box>}
            </Box>
        </Box>
    )
}

export default SearchBar