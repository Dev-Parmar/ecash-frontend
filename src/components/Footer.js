import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'


function Footer() {
    return (
        <AppBar component={'footer'} position='fixed' sx={{ bottom: 0, top: 'auto', textAlign: 'center' }}>
            <Toolbar sx={{ textAlign: 'center' }}>
                <Typography variant='h4'>Ecash</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Footer