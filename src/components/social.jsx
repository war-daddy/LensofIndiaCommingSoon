import React from "react";
// import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";



const Social = () => {
    return (
        <div className="icons-container">
            <div className="icon"><a href="https://www.instagram.com/lens_of_india_/" target="_blank" rel="noopener noreferrer"><FaInstagram className="social-icon" /></a></div>
            <div className="icon"><a href="https://x.com/LensOfIndia" target="_blank" rel="noopener noreferrer"><FaXTwitter className="social-icon" /></a></div>
            <div className="icon"><a href="mailto:lensofindia2025@gmail.com" target="_blank" rel="noopener noreferrer"><SiGmail className="social-icon" /></a></div>
            <div className="icon"><a href="" target="_blank" rel="noopener noreferrer"><FaFacebook className="social-icon" /></a></div>
        </div>
    );
};

export default Social;