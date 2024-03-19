import React from 'react'
import { Box, Divider, TextField, Typography } from '@mui/material'

function PersonalInfo({ setLink, setLinkName, setInstaUsername, setInstaLink, setTwitterUsername, setTwitterLink }) {
    return (
        <Box sx={{ width: "100%", mt: { xs: 2, lg: 4 } }}>
            <Box  ><Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.rem", lg: "1.5rem" } }}>Social Info</Typography></Box>
            <Divider variant='inset' sx={{ ml: 0, mt: 2, bgcolor: "gray" }} />
            <Box sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", lg: "row" }, flexWrap: "wrap", justifyContent: "space-around" }}>
                <TextField onClick={(e) => setLink(e.target.value)} id="outlined-basic" label="Link Name" variant="outlined" sx={{ width: { xs: "100%", lg: "45%" }, mt: { xs: 2, lg: 3 } }} />
                <TextField onClick={(e) => setLinkName(e.target.value)} id="outlined-basic" label="Link Url" variant="outlined" sx={{ width: { xs: "100%", lg: "45%" }, mt: { xs: 2, lg: 3 } }} />
                <TextField onClick={(e) => setInstaUsername(e.target.value)} id="outlined-basic" label="Instagram Username" variant="outlined" sx={{ width: { xs: "100%", lg: "45%" }, mt: { xs: 2, lg: 3 } }} />
                <TextField onClick={(e) => setInstaLink(e.target.value)} id="outlined-basic" label="Instagram Url" variant="outlined" sx={{ width: { xs: "100%", lg: "45%" }, mt: { xs: 2, lg: 3 } }} />
                <TextField onClick={(e) => setTwitterUsername(e.target.value)} id="outlined-basic" label="Twitter Username" variant="outlined" sx={{ width: { xs: "100%", lg: "45%" }, mt: { xs: 2, lg: 3 } }} />
                <TextField onClick={(e) => setTwitterLink(e.target.value)} id="outlined-basic" label="Twitter Url" variant="outlined" sx={{ width: { xs: "100%", lg: "45%" }, mt: { xs: 2, lg: 3 } }} />
            </Box>
        </Box>
    )
}

export default PersonalInfo