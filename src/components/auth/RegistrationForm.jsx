"use client"
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import SigninEmail from './SigninEmail';
import Link from 'next/link';
import { signUp } from '../../../client/request';
import Alert from '@mui/material/Alert';
import { getValue } from '../../../utils/common';
import { useRouter } from 'next/navigation';
import { useStore } from '../../../client/context';


function RegistrationForm() {
    // the main registration component
    // states for managing  password
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");
    const [showPassword2, setShowPassword2] = React.useState(false);
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setComfirmPassword] = React.useState("");
    const [alert, setAlert] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const router = useRouter()
    const [state] = useStore()
    const user = getValue(state, ["user"], null)
    // function for handling mousedown and show password
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    // handle submit button for registration
    const handleSubmit = async (e) => {
        // e.preventDefault();
        if (password === confirmPassword) {
            setLoading(true)
            setAlert(false)
            // payload for inputed data
            const payload = { name, email, password }
            const result = await signUp(payload);
            // error checking
            if (result.hasError) {
                if (result.errorMessage.keyValue) {
                    const error = getValue(result, ["errorMessage", "keyValue", "email"])
                    const mainErr = `email ${error} has already being used`
                    setErrorMessage(mainErr)
                    setLoading(false)
                    setAlert(false)
                } else if (result.errorMessage.code) {
                    setAlert(false)
                    setErrorMessage("connection failed")
                    setLoading(false)
                } else if (result.errorMessage.message) {
                    setAlert(false)
                    console.log(errorMessage.message)
                    setErrorMessage("server error")
                    setLoading(false)
                } else {
                    const error = getValue(result, ["errorMessage"])
                    setAlert(false)
                    setErrorMessage(error)
                    setLoading(false)
                }
            } else {
                setName("")
                setEmail("")
                setAlert(false)
                setComfirmPassword("")
                setPassword("")
                setErrorMessage("signup sucessful")
                setLoading(false)
                router.replace("/login")
            }
            setLoading(false)
        } else {
            setAlert("password does match")
            setLoading(false)
        }
    }

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
            {errorMessage && <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                <Alert severity={errorMessage == "signup sucessful" ? "success" : "error"} sx={{ width: "80%", fontSize: { xs: "12px", lg: "16px", textTransform: "capitalize" }, mt: 1 }}> {errorMessage}</Alert>
            </Box>}
            <SigninEmail
                setPassword={setPassword}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
                setComfirmPassword={setComfirmPassword}
                handleClickShowPassword2={handleClickShowPassword2}
                showPassword={showPassword}
                showPassword2={showPassword2}
                setEmail={setEmail}
                alert={alert}
                handleSubmit={handleSubmit}
                setName={setName}
                loading={loading}
                name={name}
                email={email}
                password={password}
                confirmPassword={confirmPassword}
            />
            <Box sx={{ display: "flex", mb: 6, justifyContent: 'center', alignItems: "center" }}>
                <Typography>Do you already have an account ?</Typography>
                <Button sx={{ p: 0, textTransform: "capitalize", ml: 1 }}><Link href="/login">Login Now</Link></Button>
            </Box>
        </Box>
    )
}

export default RegistrationForm