import React from 'react'
import logo from '../Assets/logo.jpg'
import instagram_icon from '../Assets/email_icon.jpg'
import pintrest_icon from '../Assets/email_icon.jpg'
import whatsapp_icon from '../Assets/email_icon.jpg'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
    <div className="footer-logo">
        <img src={logo} alt="" />
        <p>hop</p>
    </div>
    <ul className="footer-links">
        <li>company</li>
        <li>products</li>
        <li>offices</li>
        <li>about</li>
        <li>contact</li>
    </ul>
<div className="footer-social-icon">
    <div className="footer-i8cons-container">
        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMzArllT3OlZ_oaqOTCCigwY0CWVu50szLpSTTaoOlSg&s'} 
        height={30} width={30} />
    </div>
    <div className="footer-i8cons-container">
        <img src={"data:image/png;base64,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"} height={30} width={30}  />
        </div>
        <div className="footer-i8cons-container">
        <img src='https://cdns.iconmonstr.com/wp-content/releases/preview/2016/240/iconmonstr-whatsapp-1.png' height={30} width={30}  />
        </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>copyright @ 2024- All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer