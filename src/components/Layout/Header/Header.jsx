import React from 'react';
import classes from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
import TellmiButton from "../../Buttons/TellmiButton";

const Header = () => {

    const [menuActive, setMenuActive] = React.useState(false)

    const [headerScroll, setHeaderScroll] = React.useState(false)

    const addHeaderScroll = () => {
        if (window.scrollY >= 25) {
            setHeaderScroll(true)
        }else {
            setHeaderScroll(false)
        }
    };

    window.addEventListener('scroll', addHeaderScroll);

    return (
        <header className={`${classes.header} ${headerScroll ? classes.headerScroll : ''}`}>
            <div className={classes.header__container}>
                <a className={classes.header__logo}>
                    Magic beauty
                </a>
                <div className={classes.header__menu}>
                    <Navbar menuActive={menuActive} setMenuActive={setMenuActive}/>
                </div>
                <div className={classes.header__action}>
                    <TellmiButton/>
                    <div
                        onClick={() => setMenuActive(!menuActive)}
                        className={menuActive ? 'icon-menu menu-open' : 'icon-menu'}>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;