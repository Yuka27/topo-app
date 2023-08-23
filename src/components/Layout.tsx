import { Alert, AppBar, Avatar, BottomNavigation, BottomNavigationAction, Box, Button, Container, IconButton, Menu, MenuItem, Paper, Toolbar, Tooltip, Typography } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import SchoolIcon from '@mui/icons-material/School';
import CasinoIcon from '@mui/icons-material/Casino';
import PlaceIcon from '@mui/icons-material/Place';
import HomeIcon from '@mui/icons-material/Home';
import { isMobile } from 'react-device-detect';
import { useState } from "react";

const Layout = () => {
    const [value, setValue] = useState(0);
    return (
        <Box sx={{paddingBottom: 10}}>
        <AppBar position="static">
            <Container maxWidth="xl" sx={{paddingBottom: 1, paddingTop: 1, display: 'flex', alignItems: 'center'}}>
                <img src="./Toporiada-logo-biale-sygnet.png" loading="lazy" width="50px" height="42px" />
                <Typography variant="h6" sx={{paddingLeft: 2}}>
                    Toporiada 2023
                </Typography>
            </Container>
        </AppBar>
        {!isMobile && <Alert severity="error">Ta apliacja dostosowana jest do ekranu mobilnego. Wyświetlanie na w przeglądarce może być utrudnione</Alert>}
        <Outlet />
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <Link to="/">
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
            </Link>
            <Link to="/schedule">
                <BottomNavigationAction label="Program" icon={<SchoolIcon />} />
            </Link>
            <Link to="/sessions">
                <BottomNavigationAction label="Sesje RPG" icon={<CasinoIcon />} />
            </Link>
            <Link to="/map">
                <BottomNavigationAction label="Mapa" icon={<PlaceIcon />} />
            </Link>
        </BottomNavigation>
        </Paper>
        </Box>
    )
};

export default Layout;