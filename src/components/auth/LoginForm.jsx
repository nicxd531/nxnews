"use client"
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link';
import LoginEmail from './LoginEmail';
import { getSession, signIn } from "next-auth/react"
import { useRouter } from 'next/navigation';
import { authConstant } from '../../../client/context/constant';
import { useStore } from '../../../client/context';
import { getValue } from '../../../utils/common';
import { AnimatePresence, motion } from 'framer-motion';
import AlertError from '../reuseable/AlertError';
import AlertSuccess from '../reuseable/AlertSuccess';


function LoginForm() {
    // components for input fields
    // states 
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(false);
    const router = useRouter()
    const [state, dispatch] = useStore()
    const user = getValue(state, ["user"], null)
    const [showPassword, setShowPassword] = React.useState(false);
    // functions for handling mouse down and showing password 
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    // login handler
    const LoginHandler = async (e) => {
        e.preventDefault()
        setErrorMessage(false)
        setLoading(true)
        const payload = { email, password }
        dispatch({ type: authConstant.LOGIN_REQUEST })
        // try to sign in with credentials and also get session
        try {
            const result = await signIn("credentials", { ...payload, redirect: false });
            const session = await getSession()
            if (result.error) {
                dispatch({
                    type: authConstant.LOGIN_FAILURE,
                    payload: result.error
                })
                setErrorMessage(result.error)
            } else if (!result.error) {
                dispatch({
                    type: authConstant.LOGIN_SUCCESS,
                    payload: session
                })
                setErrorMessage("Log in sucessful")

                router.replace('/')
            }
            setLoading(false)
        }
        catch (err) {

            console.log(err)
        }
        setLoading(false)
    }
    return (
        <Box
            sx={{ width: { xs: "100%", lg: "40%" } }}>
            <motion.div
                component="div"
                initial={{ x: 500 }}
                animate={{ x: -20 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                style={{ width: "100%" }}
            >
                <Box sx={{ maxWidth: { xs: "350px", lg: "350px" }, border: "1px solid black", mt: { xs: 8, lg: 17 }, mx: "auto", pr: 2, mr: { xs: "12px", lg: "auto" } }}>
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
                    <AnimatePresence>
                        {errorMessage && (
                            <motion.div
                                exit={{ scale: 0.0 }}
                                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                            >
                                {errorMessage == "Log in sucessful" ? (
                                    <AlertSuccess message={errorMessage} />
                                ) : (
                                    <AlertError message={errorMessage} />
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <LoginEmail
                        handleClickShowPassword={handleClickShowPassword}
                        handleMouseDownPassword={handleMouseDownPassword}
                        showPassword={showPassword}
                        setPassword={setPassword}
                        setEmail={setEmail}
                        loading={loading}
                        LoginHandler={LoginHandler}
                    />
                    <Box sx={{ display: "flex", mb: 6, justifyContent: 'center', alignItems: "center" }}>
                        <Typography>Dont have an account ?</Typography>
                        <Button sx={{ p: 0, textTransform: "capitalize", ml: 1 }}><Link href="/register">Register here</Link></Button>
                    </Box>
                </Box>
            </motion.div>
        </Box>

    )
}

export default LoginForm