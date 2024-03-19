import React from 'react'
import { Box, Divider, TextField, Typography } from '@mui/material'

function EditProfileBasicInfo({name,setName,userName,setUserName,about,setAbout}) {
    return (
        <Box sx={{ width: "100%", mt: 2 }}>
            <Box  ><Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xs: "1.rem", lg: "1.5rem" } }}>Basic Info</Typography></Box>
            <Divider variant='inset' sx={{ ml: 0, mt: 2, bgcolor: "gray" }} />
            <Box sx={{width:"100%",display:"flex",flexDirection:{xs:"column",lg:"row"},flexWrap:"wrap",justifyContent:"space-around"}}>
                <TextField onClick={(e)=>setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" sx={{width:{xs:"100%",lg:"45%"},mt:{xs:2,lg:3}}}/>
                <TextField onClick={(e)=>setUserName(e.target.value)} id="outlined-basic" label="UserName" variant="outlined" sx={{width:{xs:"100%",lg:"45%"},mt:{xs:2,lg:3}}}/>
                <TextField
                    id="outlined-multiline-flexible"
                    label="About"
                    multiline
                    rows={5} 
                    sx={{width:{xs:"100%",lg:"95%"},mt:{xs:2,lg:3}}}
                    onClick={(e)=>setAbout(e.target.value)}
                />
            </Box>
        </Box>
    )
}

export default EditProfileBasicInfo