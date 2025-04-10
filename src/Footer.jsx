import React from "react";
import logo from './Assets/arabic-logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left Section */}
                <div className="footer-left">
                    <p className="footer-logo">  <img src={logo} alt="Bond" /> </p>
                    <p className="footer-text">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam.
                    </p>
                    <div className="social-icons">
                        <span>📘</span>
                        <span>🐦</span>
                        <span>📸</span>
                        <span>🔗</span>
                        <span>▶️</span>
                    </div>
                </div>

                {/* Middle Sections */}
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Product</h4>
                        <ul>
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Case studies</li>
                            <li>Reviews</li>
                            <li>Updates</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li>About</li>
                            <li>Contact us</li>
                            <li>Careers</li>
                            <li>Culture</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Support</h4>
                        <ul>
                            <li>Getting started</li>
                            <li>Help center</li>
                            <li>Server status</li>
                            <li>Report a bug</li>
                            <li>Chat support</li>
                        </ul>
                    </div>
                </div>

                {/* Right Section */}
                <div className="footer-right">
                    <h4>Contacts us</h4>
                    <p>📧 contact@company.com</p>
                    <p>📞 (414) 687 - 5892</p>
                    <p>📍 794 Mcallister St, San Francisco, 94102</p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom">
                <p>All Rights Reserved | <a href="#">Terms and Conditions</a> | <a href="#">Privacy Policy</a></p>
            </div>
        </footer>
    );
};

export default Footer;
