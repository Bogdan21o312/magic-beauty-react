import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "../../assets/style/Style.scss"

const Layout = ({children}) => {
    return (
        <div className="wrapper">
            <div className="container">
                <Header/>
                <main className="page">
                    <div className="page__container">
                        {children}
                    </div>
                </main>
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;