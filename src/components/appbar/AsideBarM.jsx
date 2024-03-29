"use client"
import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Link from 'next/link';
import { useStore } from '../../../client/context';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getValue } from '../../../utils/common';
import { getSession, signOut } from 'next-auth/react';
import { authConstant } from '../../../client/context/constant';
import SearchAppBar from "./SearchAppBar"
import { Divider } from '@mui/material';
import { getUserData } from '../../../client/request';


function AsideBarM({
    setThemeMode,
    themeMode,
    handleOpenUserMenu,
    anchorElUser,
    handleCloseUserMenu,
    settings
}) {
    // store state,search state,user image state,get user value const,get authenticated state 
    const [state, dispatch] = useStore();
    const [search, setSearch] = React.useState(false);
    const [userImage, setUserImage] = React.useState(false);
    const user = getValue(state, ["user"], null)
    const authenticated = getValue(state, ["user", "authenticated"], false);
    useEffect(() => {
        const get = async () => {
            const session = await  getSession()
            if (session?.user) {
                const{id}=session?.user
                const result = await getUserData(id)
                if (!result?.hasError) {
                    setUserImage(result?.body.avatarImage)
                } else if (result?.hasError) {
                    setUserImage("")
                }
            }
        }
        get()
    }, [])
    return (
        <Box sx={{ flexGrow: 0 }}>
            {search && <SearchAppBar  setSearch={setSearch} search={search}/>}
            <IconButton sx={{ mr: 1, color: 'white', }} onClick={() => setSearch(!search)}>
                <SearchIcon sx={{ width: 20, height: 20 }} />
            </IconButton>
            {
                themeMode == "dark" ? <IconButton sx={{ color: 'white', mr: 1 }} onClick={() => setThemeMode("light")}> <LightModeIcon /> </IconButton> : <IconButton sx={{ color: 'white', mr: 1 }} onClick={() => setThemeMode("dark")}><NightlightIcon /></IconButton>
            }

            <Typography variant="h5" sx={{ display: "inline", color: 'white', }}>
                <Divider sx={{ height: 10, display: "inline", width: "10px", bgcolor: "white" }} orientation="vertical" />
            </Typography>
            {authenticated ?
                <>
                    <Link href="/profile/CreateNews"><Button sx={{ color: "white" }}> Create</Button></Link>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, ml: 1 }}>
                            <Avatar alt={user.name} src={userImage == "" ? "" : userImage} />
                        </IconButton>
                    </Tooltip>
                </> :
                <Box sx={{ display: "inline" }}>
                    <Link href="/login">
                        <Button sx={{ color: "white" }}>Login </Button>
                    </Link>
                    <Link href="/register">
                        <Button sx={{ color: "white" }}>Register </Button>
                    </Link>
                </Box>}
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Link
                            href={setting == "Dashboard" ? "/profile" : ""}
                            onClick={() => {
                                setting == "Dashboard" ? null : signOut({
                                    redirect: false
                                }).then(result => {
                                    dispatch({
                                        type: authConstant.LOGIN_FAILURE
                                    })
                                })
                            }}>
                            {setting == "Dashboard" ? <AccountCircleIcon /> : <LogoutIcon />}
                            <Typography sx={{ display: "inline", ml: 1 }} textAlign="center">{setting}</Typography>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default AsideBarM


