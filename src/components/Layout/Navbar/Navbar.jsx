import React from 'react';

const Navbar = ({menuActive, setMenuActive}) => {
    React.useEffect(() => {
        if (menuActive) {
            document.body.style.overflow = 'hidden'
        }
        else {
            document.body.style.overflow = ''
        }
    }, [menuActive])
    return (
        <nav className={menuActive ? 'menu__body menu-open' : 'menu__body'}>
            <ul className="menu__list">
                <li className="menu__item">
                    <a className="menu__link">Home</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link">About</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link">Features</a>
                </li>
                <li className="menu__item">
                    <a className="menu__link">How it works</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;