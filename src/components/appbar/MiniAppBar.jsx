"use client"
import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import TemporaryDrawer from "./TemporaryDrawer"
import Colors from "../../app/theme/colors"

export default function MiniAppBar() {
    const [auth, setAuth] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    console.log(Colors)

  const toggleDrawer = (e) => {
    setOpen(e);
    console.log(open)
  };

    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
        
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1,display:{lg:"none"},bgcolor:"#e59a4d"}}>
            <AppBar position="static" className='glass'>
                <Toolbar className='glass'>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={()=>toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Nxnews
                    </Typography>
                    {auth ? (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <Avatar alt="Remy Sharp" sx={{ width: 24, height: 24 }} />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Dashboard<Box sx={{ml:1}}><AccountCircleIcon/></Box></MenuItem>
                                <MenuItem onClick={handleClose}>Logout<Box sx={{ml:1}}><LogoutIcon/></Box></MenuItem>
                            </Menu>
                        </div>
                    ) : <Box>
                        <Button color="inherit">Login </Button>
                        <Button color="inherit">Register </Button>
                        <IconButton>
                            {
                                true ?<LightModeIcon/>:<NightlightIcon/>
                            }
                        </IconButton>
                    </Box>} 
                </Toolbar>
            </AppBar>
          <TemporaryDrawer toggleDrawer={toggleDrawer} open={open} />
        </Box>
    );
}