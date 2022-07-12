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

const Navbar = () => {


    const navitems = [
        {
            text: 'Home',
            path: '/'
        },
        {
            text: 'Add Product',
            path: '/'
        },
        {
            text: 'Update Product',
            path: '/'
        },
        {
            text: 'Profile',
            path: '/'
        }
    ]




    return (

        <AppBar sx={{ height: '4em' }}>
            <Toolbar>
                <Typography variant='h4' sx={{ cursor: 'pointer', paddingRight: '3rem' }}> Ecash
                </Typography>
                <Box sx={{ display: 'flex', flexGrow: 1 }}>
                    <List sx={{ display: 'flex', flexDirection: 'row' }} disablePadding>
                        {navitems.map(e => (
                            <ListItemButton key={e.text}>
                                <ListItem >
                                    <ListItemText primary={e.text} />
                                </ListItem>
                            </ListItemButton>
                        ))}
                    </List>
                </Box>
                <Box>
                    <Button color='inherit' sx={{ height: '4em' }}>Login</Button>
                </Box>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar;

