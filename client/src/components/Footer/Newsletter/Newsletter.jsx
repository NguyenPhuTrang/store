import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss"
const Newsletter = () => {
    return ( 
    <div className="newsletter-section">
        <div className="newsletter-content">
            <span className="small-text">Newsletter</span>
            <span className="big-text">Sign Up For Latest Update and offers </span>
            <div className="form">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
            </div>
            <div className="text">Tinh yeu tua nhu phut dau dep nhu phep mau</div>
            <div className="contact">
                <div className="icon">
                    <FaFacebookF size={14}/>
                </div> 
                 <div className="icon">
                    <FaTwitter size={14}/>
                </div> 
                 <div className="icon">
                    <FaInstagram size={14}/>
                </div> 
                 <div className="icon">
                    <FaLinkedinIn size={14}/>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Newsletter;

