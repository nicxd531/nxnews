"use client"
import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { ChangeThemeMode } from '../../app/redux/ThemeMode';
import Link from 'next/link';
import { useStore } from '../../../client/context';
import { getValue } from '../../../utils/common';
import { signOut } from 'next-auth/react';
import { authConstant } from '../../../client/context/constant';
import { getUserData } from '../../../client/request';


export default function MiniAppBar() {
    // mini app bar component
    // context state ,themMode state,user value from context,auntenticated state,invoked dispatch states 
    const [state, dispatch] = useStore();
    const themeMode = useSelector((state) => state.theme.value);
    const user = getValue(state, ["user"], null)
    const authenticated = getValue(state, ["user", "authenticated"], false);
    const dispact = useDispatch()
    // auth state,user image state ,anchor state ,open state 
    const [auth, setAuth] = React.useState(false);
    const [userImage, setUserImage] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    // handle Theme change function ,toggleDrawer,handleMenu,handleClose,handleSignOut functions
    const handeleThemeChange = (e) => {
        dispact(ChangeThemeMode(e))
    }
    const toggleDrawer = (e) => {
        setOpen(e);
    };
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);

    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleSignOut = () => {
        handleClose()
        signOut({
            redirect: false
        }).then(result => {
            dispatch({
                type: authConstant.LOGIN_FAILURE
            })
        })
    }
    useEffect(()=>{
        const get =async ()=>{
            if(user){
                const result = await getUserData(user?.id)
               if(!result?.hasError){
                setUserImage(result?.body.avatarImage)
               }else if(result?.hasError){
                setUserImage("")
               }
            }
        }
        get()
    },[])
    return (
        <Box sx={{ flexGrow: 1, display: { lg: "none" } }}>
            <AppBar position="static" sx={{ backgroundColor: "snow" }}>
                <Toolbar className='glass' >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={() => toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link href="/">
                            Nxnews
                        </Link>
                    </Typography>
                    {authenticated ? (
                        <div>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <Typography sx={{ textTransform: "capitalize" }}>{user.name}</Typography>
                                <Avatar alt={user.name} src={userImage==""?"":userImage} sx={{ width: 24, height: 24, ml: 1 }} />
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
                                <Link href="/profile">
                                    <MenuItem onClick={handleClose}>Dashboard<Box sx={{ ml: 1 }}><AccountCircleIcon /></Box></MenuItem>
                                </Link>
                                <MenuItem onClick={handleSignOut}>Logout<Box sx={{ ml: 1 }}><LogoutIcon /></Box></MenuItem>
                            </Menu>
                        </div>
                    ) : <Box>
                        <Link href="/login">
                            <Button color="inherit">Login </Button>
                        </Link>
                        <Link href="/register">
                            <Button color="inherit">Register </Button>
                        </Link>

                        {
                            themeMode == "dark" ? <IconButton onClick={() => handeleThemeChange("light")} > <LightModeIcon /></IconButton> : <IconButton onClick={() => handeleThemeChange("dark")}><NightlightIcon /></IconButton>
                        }

                    </Box>}
                </Toolbar>
            </AppBar>
            <TemporaryDrawer toggleDrawer={toggleDrawer} open={open} />
        </Box>
    );
}