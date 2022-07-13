import React from 'react';
import { Typography, Box } from '@mui/material';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


export default function App() {
    return (
        <BrowserRouter>
            <Box sx={{ marginTop: '5em' }} />
            <Navbar />
            <Routes>
                <Route path='/' element={<h1>Index</h1>} />
                <Route path='/logout' element={<h1>Logout</h1>} />
                <Route path='/add' element={<h1>Add</h1>} />
                <Route path='/update' element={<h1>Update</h1>} />
                <Route path='/profile' element={<h1>Profile</h1>} />
                <Route path='/logout' element={<h1>Logout</h1>} />
            </Routes>
        </BrowserRouter>
    );
}