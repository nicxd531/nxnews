"use client"
import React from 'react'
import { Box, TextField, Typography } from '@mui/material'
import { UploadButton } from '../../../utils/uploadthing';
import Select from "./Select"

function CreateMainHeader({ setMainH, mainH, setMainImage, mainImage,categories,setCategories }) {
  // main Header component
  const [err,setErr]=React.useState("")
  return (
    <Box>
      <TextField
        fullWidth
        label="Main Heading"
        id="fullWidth"
        onChange={(e) => setMainH(e.target.value)}

      />
       <Select setCategories={setCategories} categories={categories}/>
      <Box
        sx={{
          width: "100%",
          height: { xs: "300px", lg: "500px" },
          border: "1px solid black",
          mt: 3,
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden"
        }}
      >
        {mainImage ? <img alt='paragrap image' src={`${mainImage}`} style={{widht:"100%",height:"100%"}} /> : <Typography> press the upload button to upload Main Image</Typography>}
      </Box>
      <Box sx={{mt:2}}>
        {err && <Typography className='text-danger' sx={{textAlign:"center",width:"100%"}}>{err}</Typography>}
        <UploadButton 
        className="custom-class" 
        endpoint='imageUploader'
          onClientUploadComplete={(res) => {
            setErr(false)
            console.log("Files: ", res);
            setMainImage(res[0].url)
          }}
          onUploadError={(error) => {
            setErr("failed to upload, try again")
            console.log(`ERROR! ${error.message}`);
          }}
        />
      </Box>
      
    </Box>
  )
}

export default CreateMainHeader