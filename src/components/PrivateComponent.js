import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateComponent = () => {

    let auth = localStorage.getItem('user')

    return (auth ? <Navigate to={'/'} /> : <Outlet />)

}

export default PrivateComponent