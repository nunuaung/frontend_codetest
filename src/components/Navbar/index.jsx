import React, { useState } from 'react'
import './navbar.css'
import {BiChevronDown} from 'react-icons/bi';
import Search from '../Search';

const Navbar = () => {
  return (
    <nav className='navbar flex'>
        <ul className='nav flex'>
            <li className='navbar-list'><button className='navbar-item'>Home</button></li>
            <li className='navbar-list'>
                <button className='navbar-item'>Services<BiChevronDown className='navbar-icon'/>
                    <ul className='submenu'>
                        <li className='subnavbar-list'>
                            <button className='navbar-item'>Services1</button>
                        </li>
                        <li className='subnavbar-list'>
                            <button className='navbar-item'>Services2</button>
                        </li>
                    </ul>
                </button>
            </li>
            <li className='navbar-list'>
                <button className='navbar-item'>Company<BiChevronDown className='navbar-icon'/>
                    <ul className='submenu'>
                        <li className='subnavbar-list'>
                            <button className='navbar-item'>Company1</button>
                        </li>
                        <li className='subnavbar-list'>
                            <button className='navbar-item'>Company2</button>
                        </li>
                    </ul>
                </button> 
            </li>
            <li className='navbar-list'><button className='navbar-item'>Blog</button></li>
            <li className='navbar-list'>
                <button className='navbar-item'>Contact Us<BiChevronDown className='navbar-icon'/>
                    <ul className='submenu'>
                        <li className='subnavbar-list'>
                            <button className='navbar-item'>Contact1</button>
                        </li>
                        <li className='subnavbar-list'>
                            <button className='navbar-item'>Contact2</button>
                        </li>
                    </ul>
                </button>
            </li>
        </ul>
        <Search/>
    </nav>
  )
}

export default Navbar
