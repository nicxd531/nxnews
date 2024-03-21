import React from 'react'
import { Box, Divider, TextField, Typography } from '@mui/material'

function EditProfileBasicInfo({ setName, setUserName, setAbout, userData, name, userName, about }) {
    // basic info component for edit user data page
    return (
        <Box sx={{ width: "100%", mt: 2 }}>
            <Box  ><Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.rem", lg: "1.5rem" } }}>Basic Info</Typography></Box>
            <Divider variant='inset' sx={{ ml: 0, mt: 2, bgcolor: "gray" }} />
            <Box sx={{ width: "100%", display: "flex", flexDirection: { xs: "column", lg: "row" }, flexWrap: "wrap", justifyContent: "space-around" }}>
                <TextField value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" sx={{ width: { xs: "100%", lg: "45%" }, mt: { xs: 2, lg: 3 } }} />
                <TextField value={userName} onChange={(e) => setUserName(e.target.value)} id="outlined-basic" label="UserName" variant="outlined" sx={{ width: { xs: "100%", lg: "45%" }, mt: { xs: 2, lg: 3 } }} />
                <TextField
                    id="outlined-multiline-flexible"
                    label="About"
                    multiline
                    rows={5}
                    sx={{ width: { xs: "100%", lg: "95%" }, mt: { xs: 2, lg: 3 } }}
                    onClick={(e) => setAbout(e.target.value)}
                    value={about}
                />
            </Box>
        </Box>
    )
}

export default EditProfileBasicInfo