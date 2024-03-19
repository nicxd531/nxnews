import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Pg({ totalPages, currentPage, setCurrentPage }) {
  // main component for paginantion
  return (
    <Stack spacing={2} className='d-flex w-100 justify-content-center align-items-center mt-4' sx={{ width:"100%",display: "flex", justifyContent: "center", alignItems: "center", mt: { xs: 1, lg: 0 }, mb: { xs: 2, lg: 6 } }}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => setCurrentPage(page)}
      />
    </Stack>
  )
}

export default Pg