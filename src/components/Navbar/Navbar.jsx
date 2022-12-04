import "./Navbar.scss";
import React, { useState } from "react";
import logo from "../../assets/logo/bobo-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__logo">
                <img className="navbar__logoImg" src={logo} alt="app logo" />
            </div>
            <ul className="navbar__links">
                <li className="navbar__opensans">
                    <a href="#home">Home</a>
                </li>
                <li className="navbar__opensans">
                    <a href="#about">About</a>
                </li>
                <li className="navbar__opensans">
                    <a href="#menu">Menu</a>
                </li>
                <li className="navbar__opensans">
                    <a href="#awards">Awards</a>
                </li>
                <li className="navbar__opensans">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <div className="navbar__navbar-login">
                <a href="#login" className="navbar__login-link">
                    Log In / Register
                </a>
                <div className="navbar__divider" />
                <a href="/" className="navbar__reserve-link">
                    Book Table
                </a>
            </div>
            <div className="navbar__smallscreen">
                <GiHamburgerMenu
                    color="fff"
                    fontSize={27}
                    onClick={() => {
                        setToggleMenu(true);
                    }}
                />
                {toggleMenu && (
                    <div className="navbar__smallscreen-overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu
                            className="navbar__overlay-close"
                            fontSize={27}
                            onClick={() => {
                                setToggleMenu(false);
                            }}
                        />
                        <ul className="navbar__smallscreen-links">
                            <li className="navbar__smallscreen-opensans">
                                <a href="#home">Home</a>
                            </li>
                            <li className="navbar__smallscreen-opensans">
                                <a href="#about">About</a>
                            </li>
                            <li className="navbar__smallscreen-opensans">
                                <a href="#menu">Menu</a>
                            </li>
                            <li className="navbar__smallscreen-opensans">
                                <a href="#awards">Awards</a>
                            </li>
                            <li className="navbar__smallscreen-opensans">
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
