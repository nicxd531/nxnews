import React from 'react'
import { Box, Divider, TextField, Typography } from '@mui/material'

function PersonalInfo({ location, setLocation, setOccupation, occupation }) {
    // personal info component for edit user data page
    return (
        <Box sx={{ width: "100%", mt: { xs: 2, lg: 4 } }}>
            <Box  ><Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.rem", lg: "1.5rem" } }}>PersonalInfo Info</Typography></Box>
            <Divider variant='inset' sx={{ ml: 0, mt: 2, bgcolor: "gray" }} />
            <Box sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", lg: "row" }, flexWrap: "wrap", justifyContent: "space-around" }}>
                <TextField value={occupation} onChange={(e) => setOccupation(e.target.value)} id="outlined-basic" label="Occupation" variant="outlined" sx={{ width: { xs: "100%", lg: "45%" }, mt: { xs: 2, lg: 3 } }} />
                <TextField value={location} onChange={(e) => setLocation(e.target.value)} id="outlined-basic" label="Location" variant="outlined" sx={{ width: { xs: "100%", lg: "45%" }, mt: { xs: 2, lg: 3 } }} />
            </Box>
        </Box>
    )
}

export default PersonalInfo