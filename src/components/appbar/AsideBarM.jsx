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

function AsideBarM({
    setThemeMode,
    themeMode,
    handleOpenUserMenu,
    anchorElUser,
    handleCloseUserMenu,
    settings
}) {
    return (
        <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ mr: 1, color: 'white', }}>
                <SearchIcon sx={{ width: 20, height: 20 }} />
            </IconButton>
            {
                themeMode == "dark" ? <IconButton sx={{ color: 'white', mr: 1 }} onClick={() => setThemeMode("light")}> <LightModeIcon /> </IconButton> : <IconButton sx={{ color: 'white', mr: 1 }} onClick={() => setThemeMode("dark")}><NightlightIcon /></IconButton>
            }

            <Typography variant="h5" sx={{ display: "inline", color: 'white', }}>
                |
            </Typography>
            {false ?
                <>
                    <Button color="inherit"> Create</Button>
                    <Tooltip title="Open settings">
                        <IconButton  onClick={handleOpenUserMenu} sx={{ p: 0, ml: 1 }}>
                            <Link href="/profile">
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </Link>
                        </IconButton>
                    </Tooltip>
                </> :
                <Box sx={{ display: "inline" }}>
                    <Link href="/login">
                        <Button color="inherit">Login </Button>
                    </Link>
                    <Link href="/register"> 
                        <Button color="inherit">Register </Button>
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
                        <Link href={setting == "Dashboard" ? "/profil":"/"}>
                             <Typography textAlign="center">{setting}</Typography>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default AsideBarM


