import React from 'react'
import ProfileDrawerSm from "@/components/reuseable/ProfileDrawerSm";
import ProfilePanel from "@/components/reuseable/ProfilePanel";
import { Box, Divider } from "@mui/material";


function ProfilLayout({children}) {
 
  return (
    <Box>
      <Divider sx={{ mt:{xs:2, lg:6} ,display:{xs:"none",lg:"block"}}} />
      <Box sx={{ display: { lg: "none" }}}>
        <ProfileDrawerSm />
      </Box>
      <Box sx={{ mb: 4, display: "flex", flexDirection: "row", width: "100%" ,height:"fit-content"}}>
        <ProfilePanel />
        <Divider
          orientation="vertical"
          variant="inset"
          sx={{
            minHeight: "120vh",
            display: { xs: "none", lg: "inline" },
            ml: 0,
          }}
        />
        <Box>
            {children}
        </Box>
      </Box>
      
    </Box>
  )
}

export default ProfilLayout