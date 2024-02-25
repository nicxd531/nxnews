"use client"
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SigninEmail from './SigninEmail';
import Link from 'next/link';

function RegistrationForm() {



    // this is the sign up function
    // states for managing  password
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [showPassword2, setShowPassword2] = React.useState(false);
    const [Password, setPassword] = React.useState("");
    const [confirmPassword, setComfirmPassword] = React.useState("");
    const [alert, setAlert] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    // function for handling mousedown and show password
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Box sx={{ maxWidth: { xs: "350px", lg: "400px" }, border: "1px solid black", mt: { xs: 3, lg: 6 }, mx: "auto", pr: 2 }}>
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
            <SigninEmail
                setPassword={setPassword}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
                setComfirmPassword={setComfirmPassword}
                handleClickShowPassword2={handleClickShowPassword2}
                showPassword={showPassword}
                showPassword2={showPassword2}
                setEmail={setEmail}
            />
            <Box sx={{ display: "flex", mb: 6, justifyContent: 'center', alignItems: "center" }}>
                <Typography>Do you already have an account ?</Typography>
                <Button sx={{ p: 0, textTransform: "capitalize", ml: 1 }}><Link href="/login">Login Now</Link></Button>
            </Box>
        </Box>
    )
}

export default RegistrationForm