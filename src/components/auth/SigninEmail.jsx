import React from 'react'
import { Box, Typography } from '@mui/material'
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
  setEmail,
  alert,
  handleSubmit,
  setName,
  loading,
  name,
  email,
  password,
  confirmPassword,
}) {
  // this form holds all the input for the registration form 
  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", ml: 1 }} >
      <FormControl sx={{ m: 1, width: '90%', mt: 4 }} variant="outlined" >
        <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
        <OutlinedInput
          id="outlined-adornment-name"
          type='text'
          required
          onChange={(e) => { setName(e.target.value) }}
          value={name}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="name"
                edge="end"
              >
                <AccountCircleIcon />
              </IconButton>
            </InputAdornment>
          }
          label="name"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: '90%', mt: 3 }} variant="outlined" >
        <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
        <OutlinedInput
          id="outlined-adornment-email"
          type='email'
          required
          value={email}
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
      <FormControl sx={{ m: 1, width: '90%', mt: 3 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => { setPassword(e.target.value) }}
          required
          value={password}
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
      {alert && <Typography className="text-danger" sx={{ textAlign: "start", width: "100%", ml: 4 }}>{alert}</Typography>}
      <FormControl sx={{ m: 1, width: '90%', mt: 3 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-confirm-password">Confirm Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-confirm-password"
          type={showPassword2 ? 'text' : 'password'}
          required
          onChange={(e) => { setComfirmPassword(e.target.value) }}
          value={confirmPassword}
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
      <LoadingButton onClick={() => handleSubmit()} loading={loading} variant="contained" size="large" sx={{ width: "90%", fontSize: "14px", my: 2 }}> <span>Register</span></LoadingButton>
    </Box>
  )
}

export default SigninEmail