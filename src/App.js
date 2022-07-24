import React from 'react';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PrivateRoute from './components/PrivateRoute';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import UpdateProduct from './components/UpdateProduct';


export default function App() {
    return (
        <BrowserRouter>
            <Box sx={{ marginTop: '7em' }} />
            <Navbar />
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path='/' element={<Products />} />
                    <Route path='/add' element={<AddProduct />} />
                    <Route path='/update' element={<UpdateProduct />} />
                    <Route path='/profile' element={<h1>Profile</h1>} />

                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
            </Routes>
            <Box sx={{ marginBottom: '7em' }} />
            <Footer />
        </BrowserRouter >
    );
}