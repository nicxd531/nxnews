import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import GavelIcon from '@mui/icons-material/Gavel';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SupportIcon from '@mui/icons-material/Support';
import AttractionsIcon from '@mui/icons-material/Attractions';
import { Typography } from '@mui/material';
import Link from 'next/link';


export default function TemporaryDrawer({ toggleDrawer, open }) {


  const DrawerList = (
    <Box sx={{ width: 250, top: 40 }} role="presentation" onClick={() => toggleDrawer(false)}>
      <List >

        <Typography
          variant="h4"
          noWrap
          component="h4"
          sx={{
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'grey',
            textDecoration: 'none',
            flexGrow: 1,
            textAlign:"center",
            py:2
          }}
        >
          <Link href="/">
            Nxnews
          </Link>
        </Typography>
        <Divider variant='inset' sx={{ml:0}}/>
        {['Sport', 'Health', 'Political', 'Business', 'Finance', "Life", "Entertainment"].map((text, index) => {
          let icon;
          if (text == "Sport") {
            icon = <SportsFootballIcon />
          } else if (text == "Health") {
            icon = <HealthAndSafetyIcon />
          } else if (text == "Political") {
            icon = <GavelIcon />
          } else if (text == "Business") {
            icon = <BusinessIcon />
          } else if (text == "Finance") {
            icon = <AccountBalanceIcon />
          } else if (text == "Life") {
            icon = <SupportIcon />
          } else if (text == "Entertainment") {
            icon = <AttractionsIcon />
          }
          return (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <Link href="/">
                 <ListItemText primary={text} />
                </Link>
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  );

  return (
    <Drawer sx={{ top: 55 }} open={open} onClose={() => toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}