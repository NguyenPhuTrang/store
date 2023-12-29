import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT</div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">Location : CTY KIRIN PLUS</div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone : 0339 833 8888</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email : nguyenphutrangbbg@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <div className="text">Smart Phone</div>
                    <div className="text">Tables</div>
                    <div className="text">Smart Watches</div>
                    <div className="text">Head Phone</div>
                    <div className="text">IMac</div>
                    <div className="text">MacBook</div>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <div className="text">Home</div>
                    <div className="text">About</div>
                    <div className="text">Privacy Policy</div>
                    <div className="text">Return</div>
                    <div className="text">Terms & Conditions</div>
                    <div className="text">Contact Us</div>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">2023 CREATE BY NPT DEV</div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
