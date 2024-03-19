import { Box } from '@mui/material'
import React from 'react'
import SearchBar from "../../components/reuseable/SearchBar"
import FinanceMain from "../../components/finance/FinanceMain"
import Aside from "../../components/reuseable/Aside"
function page() {
  return (
    <Box sx={{px:{xs:2,lg:6}}}>
        <Box>
            <SearchBar/>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <FinanceMain/>
            <Aside/>
        </Box>
    </Box>
  )
}

export default page