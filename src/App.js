import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import AddProduct from './components/AddProduct';


export default function App() {
    return (
        <BrowserRouter>
            <Box sx={{ marginTop: '5em' }} />
            <Navbar />
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path='/' element={<h1>Index</h1>} />
                    <Route path='/add' element={<AddProduct />} />
                    <Route path='/update' element={<h1>Update</h1>} />
                    <Route path='/profile' element={<h1>Profile</h1>} />

                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
            <Footer />
        </BrowserRouter >
    );
}