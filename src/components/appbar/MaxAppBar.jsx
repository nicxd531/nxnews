"use client"
import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';
import Colors from "../../app/theme/colors"


const pages = ['Sport', 'Health', 'Political', 'Business','Finance',"Life", "Entertainment"];
const settings = [ 'Dashboard', 'Logout'];

function MaxAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="glass" position="static" sx={{display:{xs:"none",lg:"inline"},bgcolor:"#e59a4d"}}>
      <Container maxWidth="xl" className="glass">
        <Toolbar disableGutters sx={{justifyContent:"space-between"}}> 
        
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow:1,mr:6
            }}
          >
            Nxnews
          </Typography>
          <Box sx={{ flexGrow: 1,display:"flex"}}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{mr:1,color: 'white',}}>
                <SearchIcon sx={{width:20,height:20}}/>
            </IconButton>
            <IconButton sx={{color: 'white',mr:1}}>
            {
                                true ?<LightModeIcon/>:<NightlightIcon/>
                            }
            </IconButton>
            <Typography  variant="h5" sx={{display:"inline",color: 'white',}}>
                |
            </Typography>
            {false?
            <>
            <Button color="inherit"> Create</Button>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 ,ml:1}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            </>: 
            <Box sx={{display:"inline"}}>
                <Button color="inherit">Login </Button>
                    <Button color="inherit">Register </Button>
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
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
       
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MaxAppBar;
