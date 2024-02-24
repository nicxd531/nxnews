"use client"
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AsideBarM from './AsideBarM';
import Link from 'next/link';


const pages = ['Sport', 'Health', 'Political', 'Business', 'Finance', "Life", "Entertainment"];
const settings = ['Dashboard', 'Logout'];

function MaxAppBar() {
  const [themeMode, setThemeMode] = React.useState(true);
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
    <AppBar position="static" sx={{ display: { xs: "none", lg: "inline" }, bgcolor: "#e59a4d" }}>
      <Container maxWidth="xl" className="glass">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between" }}>

          <Typography
            variant="h4"
            noWrap
            component="h4"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: 1, mr: 6
            }}
          >
            <Link href="/">
              Nxnews
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
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
          <AsideBarM
            setThemeMode={setThemeMode}
            themeMode={themeMode}
            handleOpenUserMenu={handleOpenUserMenu}
            anchorElUser={anchorElUser}
            handleCloseUserMenu={handleCloseUserMenu} 
            settings={settings}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MaxAppBar;

