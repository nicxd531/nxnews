"use client"
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link';
import LoginEmail from './LoginEmail';


function LoginForm() {

    const [email, setEmail] = React.useState("");
    const [alert, setAlert] = React.useState(false);
    const [Password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    // this is the componnent for logging into the app
    // states  for handling show password 
    const [showPassword, setShowPassword] = React.useState(false);
    // distructed custom hook for getting name and profile photo
    // functions for handling mouse down and showing password 
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Box sx={{width:{xs:"100%",lg:"40%"}}}>
            <Box sx={{ maxWidth: { xs: "350px", lg: "400px" }, border: "1px solid black", mt: { xs: 3, lg: 6 }, mx: "auto", pr: 2}}>
                <Typography
                    variant="h4"
                    noWrap
                    component="h4"
                    sx={{
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                        flexGrow: 1, mx: "auto",
                        textAlign: "center",
                        mt: 4
                    }}
                >
                    <Link href="/">
                        Nxnews
                    </Link>
                </Typography>
                <LoginEmail
                    handleClickShowPassword={handleClickShowPassword}
                    handleMouseDownPassword={handleMouseDownPassword}
                    showPassword={showPassword}
                    setPassword={setPassword}
                    setEmail={setEmail}
                />
                <Box sx={{ display: "flex", mb: 6, justifyContent: 'center', alignItems: "center" }}>
                    <Typography>Don't have an account ?</Typography>
                    <Button sx={{ p: 0, textTransform: "capitalize", ml: 1 }}><Link href="/register">Register here</Link></Button>
                </Box>
            </Box>
        </Box>
    )
}

export default LoginForm