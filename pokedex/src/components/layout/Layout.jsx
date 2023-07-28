import { Link, Outlet } from 'react-router-dom';
import React from 'react';
import Button from '../Button/Button';
 
const Layout = () => {
    return (
        <>
            <div>
            <button><Link to="/">Home</Link></button> 
            <button><Link to="/about">Details</Link></button>

            </div>

            <Outlet/> 
        </>
        
    )

}

export {Layout};