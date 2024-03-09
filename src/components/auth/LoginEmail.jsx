"use client"
import React from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { EmailOutlined } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from 'next/link';
import Checkbox from '@mui/material/Checkbox';


function LoginEmail({ handleClickShowPassword, handleMouseDownPassword, showPassword, setPassword, setEmail, loading, LoginHandler }) {
  // main email login input
  // main signup with email input
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Box sx={{ width: "100%", px: 3 }} className="d-flex flex-column justify-content-center align-items-center ">
      <FormControl sx={{ m: 1, width: '100%', mt: 4 }} variant="outlined" >
        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          type='email'
          onChange={(e) => { setEmail(e.target.value) }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="email"
                edge="end"
              >
                <EmailOutlined />
              </IconButton>
            </InputAdornment>
          }
          label="email"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '100%', mt: 2 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => { setPassword(e.target.value) }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password2"
        />
      </FormControl>
      <Box sx={{ display: "flex", justifyContent: "space-between", py: 2, width: "100%" }}>

        <Typography> <Checkbox {...label} />Remember me?</Typography>
        <Button sx={{ p: 0, textTransform: "capitalize", ml: 1 }}><Link href="/login">Forgot Password</Link></Button>
      </Box>
      <LoadingButton onClick={LoginHandler} loading={loading} variant="contained" size="large" sx={{ width: "100%", fontSize: "14px", ml: 1, mt: 2, mb: 2 }}> <span>Log In </span></LoadingButton>
    </Box>
  )
}

export default LoginEmail