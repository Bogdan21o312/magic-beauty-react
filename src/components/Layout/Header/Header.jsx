import React from 'react';
import classes from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import TellmiButton from "../../Buttons/TellmiButton";
import {Link} from "react-router-dom";

const Header = () => {

    const [menuActive, setMenuActive] = React.useState(false)

    const [headerScroll, setHeaderScroll] = React.useState(false)

    const addHeaderScroll = () => {
        if (window.scrollY >= 25) {
            setHeaderScroll(true)
        } else {
            setHeaderScroll(false)
        }
    };

    window.addEventListener('scroll', addHeaderScroll);

    return (
        <header className={`${classes.header} ${headerScroll ? classes.headerScroll : ''}`}>
            <div className="Header__container">
                <div className={classes.header__container}>
                    <Link to="/" className={classes.header__logo}>
                        Magic beauty
                    </Link>
                    <div className={classes.header__menu}>
                        <Navbar menuActive={menuActive} setMenuActive={setMenuActive}/>
                    </div>
                    <div className={classes.header__action}>
                        <a href="tel:0677972940" className={classes.header__phone}>0 (67) 797 29 40</a>
                        <div className={classes.header__button}>
                            <TellmiButton/>
                        </div>
                        <div
                            onClick={() => setMenuActive(!menuActive)}
                            className={`${classes.iconMenu} ${menuActive ? classes.menuOpen : ''}`}>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;