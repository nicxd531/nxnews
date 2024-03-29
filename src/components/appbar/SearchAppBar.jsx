"use client"
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material'
import SearchResult from '../reuseable/SearchResult';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import { baseUrl } from '../../../client/config';


function SearchAppBar({ setSearch, search }) {
    // main serach app bar component and arrays for list of categories 
    const categories = ["Sport", "Health", "Political", "Business", "Finance", "Life", "Entertainment"]
    // states for handling all functions in search 
    const [filter, setFilter] = React.useState(false)
    const [data, setData] = React.useState(null)
    const [searching, setSearching] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)
    const [realData, setRealData] = React.useState(null)
    // functions for handling search 
    const search2 = async () => {
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
            console.log("err")
            setError("not Found ")
        }

    }
    // const for adjusting  search result component 
    const width ={width:"100%",
                left:0
                }
    return (
        <Box sx={{ position: "absolute",  zIndex: "1200" }}>
            <Paper sx={{ zIndex:1200,position: "absolute", top: 90, display: "flex", flexDirection: "column", width: "700px", right: 0, p: 4, borderRadius: "10px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: "bold" }} variant='h4'>Search News</Typography>
                    <IconButton onClick={() => setSearch(!search)}> <CloseIcon sx={{ width: "24px", height: "24px" }} /></IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Search News here..."
                        multiline
                        maxRows={4}
                        variant="standard"
                        onChange={(e) => setData(e.target.value)}
                        sx={{width:"95%"}}
                    />
                    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={search2}>
                        <SearchIcon sx={{ color: "black" }} />
                    </IconButton>
                </Box>

                <Box>
                </Box>
                <Box sx={{ mt: 4 }}>
                    <Typography variant='h5' sx={{ fontWeight: "bold" }}>Category News</Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mt: 2 }}>
                        {categories?.map((data, index) => {
                            return (
                                <Button key={index} variant='contained' sx={{ bgcolor: "#fafafa" }}>
                                    {data}
                                </Button>
                            )
                        })}
                    </Box>
                </Box>
                {searching && <div>
                    <SearchResult loading={loading} data={realData?.body} error={error} setSearching={setSearching}  width={width}/>
                </div>}
            </Paper>
        </Box>

    )
}

export default SearchAppBar