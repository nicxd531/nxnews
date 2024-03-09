import { Box, TextField, Divider, Typography } from '@mui/material'
import React from 'react'

function ConclusionInput({ cH, setCH, cP, setCP }) {
  // conclusion component
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h5" sx={{ textAlign: "center", textTransform: "capitalize" }}>add conclusion</Typography>
      <Divider variant="inset" sx={{mb:2,ml:0}}/>
      <TextField fullWidth value={cH} label="Conclusion Heading" id="fullWidth" onChange={e => setCH(e.target.value)} />
      <TextField
        id="filled-multiline-static"
        label="Conclusion Paragraph"
        multiline
        rows={12}
        sx={{ width: "100%", mt: 3 }}
        variant="filled"
        onChange={e => setCP(e.target.value)}
        value={cP}
      />
    </Box>
  )
}

export default ConclusionInput