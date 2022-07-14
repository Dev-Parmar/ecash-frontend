import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {


    const navitems = [
        {
            text: 'Home',
            path: '/'
        },
        {
            text: 'Add Product',
            path: '/add'
        },
        {
            text: 'Update Product',
            path: '/update'
        },
        {
            text: 'Profile',
            path: '/profile'
        },
        {
            text: 'SignUp',
            path: '/signup'
        }
    ]


    const location = useLocation()

    const logi = () => {
        let l = location.pathname
        l = '/login' ? 'logout' : 'login'
        return l
    }


    return (

        <AppBar sx={{ height: '4em' }}>
            <Toolbar>
                <Typography variant='h4' sx={{ cursor: 'pointer', paddingRight: '3rem' }}> Ecash
                </Typography>
                <Box sx={{ display: 'flex', flexGrow: 1 }}>
                    <List sx={{ display: 'flex', flexDirection: 'row' }} disablePadding>
                        {navitems.map(e => (
                            <Link to={e.path} key={e.text} style={{ textDecoration: 'none', color: '#fff' }}>
                                <ListItemButton >
                                    <ListItem >
                                        <ListItemText primary={e.text} />
                                    </ListItem>
                                </ListItemButton>
                            </Link>
                        ))}
                    </List>
                </Box>
                <Box>
                    <Link to={`/${logi()}`} style={{ textDecoration: 'none', color: '#fff', fontSize: '32px' }}> <Button color='inherit' sx={{ height: '4em' }}>{logi().charAt(0).toUpperCase() + logi().slice(1)}</Button></Link>
                </Box>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar;

