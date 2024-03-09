"use client"
import React from 'react'
import { Box, Divider, TextField, Typography } from "@mui/material";
import Image from 'next/image';
import { UploadButton } from '../../../utils/uploadthing';



function HeadingsTemplate({ setP, pData, H, setH, image, setImage}) {
    const [err, setErr] = React.useState("")
    return (
        <Box sx={{ m: { xs: 1, lg: 4 } }}>
            <Typography variant="h5" sx={{textAlign:"center",textTransform:"capitalize"}}>add new paragraph</Typography>
            <Divider variant="inset" sx={{mb:1,ml:0}}/>
            <TextField fullWidth label="Heading " id="fullWidth" sx={{ mt: 1 }} onChange={e => setH(e.target.value)} />
            <TextField
                id="filled-multiline-static"
                label="Paragraph "
                multiline
                rows={12}
                sx={{ width: "100%", mt: 3 }}
                defaultValue="Add Paragraph"
                variant="filled"
                onChange={e => setP(e.target.value)}
            />
            <Box
                sx={{ width: "100%", height: { xs: "300px", lg: "500px" }, border: "1px solid black", mt: 3, borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden" }}
            >
                {image ? <img alt='paragrap image' src={image} sx={{ widht: "100%", height: "100%" }} /> : <Typography> press the upload button to upload Heading Image</Typography>}
            </Box>
            <Box sx={{ mt: 2 }}>
                {err && <Typography className='text-danger' sx={{ textAlign: "center", width: "100%" }}>{err}</Typography>}

                <UploadButton
                    className="custom-class"
                    endpoint='imageUploader'
                    onClientUploadComplete={(res) => {
                        console.log("Files: ", res);
                        setImage(res[0].url)
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

export default HeadingsTemplate