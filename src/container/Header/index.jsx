import React, { useState } from 'react'
import './header.css'
import { images } from '../../constants'
import { FaPhoneAlt, FaWhatsapp, FaFileAlt, FaCaretDown } from 'react-icons/fa';
import {CiMail} from 'react-icons/ci';
import {BiChevronDown, BiSearch} from 'react-icons/bi';
import Navbar from '../../components/Navbar';

const Header = () => {
  const [selectLanguage, setSelectLanguage] = useState("SG EN");
  
  return (
    <div className='container'>
        <div className='top-bar'>
            <div className='inner flex top-bar-items'>
                <div className='header-logo'>
                    <a href='#'><img src={images.logo} className='logo' alt='logo' /></a>
                </div>
                <div className='top-item flex'>
                    <FaPhoneAlt className='item-icon phone'/>
                    <p className='item-text'>6248 0838</p>
                </div>
                <div className='top-item flex'>
                    <FaWhatsapp className='item-icon'/>
                    <p className='item-text'>8484 9948</p>
                </div>
                <div className='top-item flex'>
                    <CiMail className='item-icon'/>
                    <p className='item-text'>info@visibleone.com</p>
                </div>
                <a href='#' className='top-item flex quote'>
                    <FaFileAlt className='item-icon'/>
                    <p className='item-text'>Quote</p>
                </a>
                <select className='top-item flex language' value={selectLanguage} onChange={(e)=>setSelectLanguage(e.target.value)}>
                    <option>SG EN</option>
                    <option>SG BM</option>
                </select>
            </div>
        </div>
        <div className='inner'>
            <Navbar />
        </div>
    </div>
  )
}

export default Header
