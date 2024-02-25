import React, { useState } from 'react'
import { Box, Button } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { EmailOutlined } from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoadingButton from '@mui/lab/LoadingButton';


function SigninEmail({ setPassword,
  handleClickShowPassword,
  handleMouseDownPassword,
  setComfirmPassword,
  handleClickShowPassword2,
  showPassword,
  showPassword2,
  setEmail
}) {
  // main signup with email input
  const [loading, setLoading] = React.useState(false);

  return (
    <Box sx={{ width: "100%", display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",ml:1}} >
      <FormControl sx={{ m: 1, width: '90%', mt: 4 }} variant="outlined" >
        <InputLabel htmlFor="outlined-adornment-email">Name</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          type='email'
          required
          onChange={(e) => { setEmail(e.target.value) }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="email"
                edge="end"
              >
                <AccountCircleIcon />
              </IconButton>
            </InputAdornment>
          }
          label="email"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '90%', mt:3 }} variant="outlined" >
        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          type='email'
          required
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
      <FormControl sx={{ m: 1, width: '90%' , mt:3}} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => { setPassword(e.target.value) }}
          required
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
          label="Password"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '90%' , mt:3}} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-confirm-password"
          type={showPassword2 ? 'text' : 'password'}
          required
          onChange={(e) => { setComfirmPassword(e.target.value) }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword2}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword2 ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="confirm password"
        />
      </FormControl>
      <LoadingButton loading={loading} variant="contained" size="large" sx={{width:"90%",fontSize:"14px",my:2}}> <span>Register</span></LoadingButton>
    </Box>
  )
}

export default SigninEmail