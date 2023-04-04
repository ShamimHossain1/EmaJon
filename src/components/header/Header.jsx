import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='bg-slate-800 flex justify-between items-center py-5 px-20 '>
            <img src={logo} alt="" />

            <div className='text-white text-xl flex gap-10'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
        </nav>
        
    );
};

export default Header;