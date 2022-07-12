import React from 'react';
import { Typography } from '@mui/material';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';


export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Typography component={'h1'}>Hello world</Typography>
        </BrowserRouter>
    );
}