import { Box, Typography, Avatar } from '@mui/material';
import { UploadButton } from '@uploadthing/react';
import React from 'react'


function AvatarMAin({ setAvatarImage, setErr, avatarImage, err }) {
    // main avatar component for edit profile page
    return (
        <>
            <Box sx={{ width: "100%", textAlign: "center" }}>
                <Typography
                    variant="h3"
                    sx={{
                        textTransform: "uppercase",
                        fontWeight: "bold",
                        fontSize: { xs: "1.8rem", lg: "3rem" },
                    }}
                >
                    Edit your profile
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column" },
                    justifyContent: "center",
                    mt: { xs: 4 },
                    alignItems: "center",
                }}
            >
                <Avatar
                    alt="Remy Sharp"
                    src={avatarImage}
                    sx={{ width: 200, height: 200 }}
                />
                <Box sx={{ mt: 2 }}>
                    {err && (
                        <Typography
                            className="text-danger"
                            sx={{ textAlign: "center", width: "100%", mb: { xs: 2 } }}
                        >
                            {err}
                        </Typography>
                    )}
                    <UploadButton
                        className="custom-class"
                        endpoint="imageUploader"
                        onClientUploadComplete={(res) => {
                            setErr(false);
                            console.log("Files: ", res);
                            setAvatarImage(res[0].url);
                        }}
                        onUploadError={(error) => {
                            setErr("failed to upload, try again");
                            console.log(`ERROR! ${error.message}`);
                        }}
                    />
                </Box>
            </Box>
        </>
    )
}

export default AvatarMAin