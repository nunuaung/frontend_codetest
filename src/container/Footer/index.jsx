import React from 'react'
import './footer.css'
import { images } from '../../constants'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer' style={{ backgroundImage: `url(${images.footerImg})` }}>
      <div className='inner'>
        <div className='flex footer-menu'>
            <div className='footer-links flex'>
                <div className='footer-col'>
                    <h3 className='footer-title'>Quick Links</h3>
                    <ul>
                        <li><a href='#' className='footer-menuitem'>Services</a></li>
                        <li><a href='#' className='footer-menuitem'>About Us</a></li>
                        <li><a href='#' className='footer-menuitem'>Blog</a></li>
                        <li><a href='#' className='footer-menuitem'>Quotation</a></li>
                        <li><a href='#' className='footer-menuitem'>Partnership</a></li>
                        <li><a href='#' className='footer-menuitem'>Contact Us</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <h3 className='footer-title'>Our Services</h3>
                    <ul>
                        <li><a href='#' className='footer-menuitem'>Web Development</a></li>
                        <li><a href='#' className='footer-menuitem'>Web Design</a></li>
                        <li><a href='#' className='footer-menuitem'>Responsive Website Design</a></li>
                        <li><a href='#' className='footer-menuitem'>CMS Website Design</a></li>
                        <li><a href='#' className='footer-menuitem'>Custom Website Design</a></li>
                        <li><a href='#' className='footer-menuitem'>UI & UX Website Design</a></li>
                        <li><a href='#' className='footer-menuitem'>360 Virtual Tour</a></li>
                    </ul>
                </div>
                <div className='footer-col'>
                    <ul>
                        <li><a href='#' className='footer-menuitem'>Ecommerce Development</a></li>
                        <li><a href='#' className='footer-menuitem'>WooCommerce Development</a></li>
                        <li><a href='#' className='footer-menuitem'>osCommerce Development</a></li>
                        <li><a href='#' className='footer-menuitem'>Magento Development</a></li>
                        <li><a href='#' className='footer-menuitem'>BigCommerce Development</a></li>
                        <li><a href='#' className='footer-menuitem'>SSL Certificate</a></li>
                        <li><a href='#' className='footer-menuitem'>Promotion Video</a></li>
                    </ul>
                </div>
            </div>
            <div className='footer-info'>
                <h3 className='footer-title'>Visible One Singapore</h3>
                <a href="tel:+6562480838" className='phone-number'>+65 6248 0838</a>
                <p className='email'>info@visibleone.com</p>
                <p className='address'>24 Sin Ming Lane MidView City #07-93<br/>Singapore 573970</p>
                <p className='office-hour'>Office Hour: Mon-Fri (9am-6pm)</p>
                <div className='contact'>
                    <button className='blue-btn'>Contact Us</button>
                    <a href='#' className='contact-link'>Contact HK Office</a>
                </div>
            </div>
        </div>
        <div className='footer-bottomline'/>
        <div className='payment-gp flex'>
            <div className='payment-cards flex'>
                <img src={images.shopify} alt='shopify' />
                <img src={images.paypal} alt='paypal' />
                <img src={images.googleanalytic} alt='googleanalytic' />
                <img src={images.googletrusted} className='googletrusted' alt='googletrusted' />
            </div>
            <div className='subscribe flex'>
                <div className='input-group flex'>
                    <label for="subscribe" className='subscribe-label'>Subscribe to our news, tips and guidelines</label>
                    <input type='text' placeholder='123@test.com' />
                </div>
                <div>
                    <button className='blue-btn'>Submit</button>
                </div>
            </div>
        </div>
        <div className='footer-bottomline'/>
        <div className='social-gp'>
            <div className='social flex'>
                <a href='#' className='social-icon'><FaFacebookF /></a>
                <a href='#' className='social-icon'><FaTwitter/></a>
                <a href='#' className='social-icon'><FaInstagram/></a>
                <a href='#' className='social-icon'><FaLinkedin/></a>
            </div>
            <div className='flex terms'>
                <span>Shoping T&C</span>
                <ul className='flex'>
                    <li><a href='#'>Terms and Conditions</a></li>
                    <li><a href='#'>Privacy Policy</a></li>
                </ul>
                <span>@2018. visible One</span>
            </div>
        </div>
      </div>
      <div className='footer-gradient'></div>
    </div>
  )
}

export default Footer
