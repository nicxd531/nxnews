
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, IconButton, Paper, TextField, Typography } from '@mui/material'
import React from 'react'


function SearchAppBar() {
    const categories = ["Sport", "Health", "Political", "Business", "Finance", "Life", "Entertainment"]
    return (
        <Box sx={{ position: "absolute", width: "100%", left: 80 ,zIndex:1}}>
            <Paper sx={{ position: "absolute", top: 90, display: "flex", flexDirection: "column", width: "1000px", left: 50, p: 4, borderRadius: "10px" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography sx={{ fontWeight: "bold" }} variant='h4'>Search News</Typography>
                    <IconButton> <CloseIcon sx={{ width: "24px", height: "24px" }} /></IconButton>
                </Box>
                <TextField
                    id="standard-multiline-flexible"
                    label="Search News here..."
                    multiline
                    maxRows={4}
                    variant="standard"
                />
                <Box>


                </Box>
                <Box sx={{ mt: 4 }}>
                    <Typography variant='h5' sx={{ fontWeight: "bold" }}>Category News</Typography>
                    <Box sx={{ display: "flex", justifyContent: "space-between", width: "70%", mt: 2 }}>
                        {categories?.map((data, index) => {
                            return (
                                <Button key={index} variant='contained' sx={{ bgcolor: "grey" }}>
                                    {data}
                                </Button>
                            )
                        })}
                    </Box>
                </Box>
            </Paper>
        </Box>

    )
}

export default SearchAppBar