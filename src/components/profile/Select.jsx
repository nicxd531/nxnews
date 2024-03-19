import { Box, Typography } from '@mui/material'
import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'


function Select({ setCategories, categories }) {
    // select component
    const categoriesArray = ['Sport', 'Health', 'Political', 'Business', 'Finance', "Life", "Entertain"];
    return (
        <Box sx={{width:"110%",overflow:"hidden",ml:{xs:-1,lg:0}}}>
            <Typography variant="h5" sx={{mt:2,fontWeight:"bold",ml:{xs:1,lg:0}}}>Select Category</Typography>
            <ButtonGroup size="small" aria-label="Small button group" sx={{display:"flex",width:"100%",flexWrap:"wrap",width:"100%"}}> 
                {
                    categoriesArray.map((cat, index) => <Button className={`${categories == cat ?"glass":null}`} variant={categories == cat ? "contained" : "outlined"} key={index} onClick={() => setCategories(cat)}> {cat}</Button>)
                }
            </ButtonGroup>
        </Box>
    )
}

export default Select