import React from 'react';
import classes from "./Buttons.module.scss";

const TellmiButton = () => {
    return (
        <div className={classes.TellmiButton}>
            <a href="tel:0677972940">
                <svg viewBox="0 0 180 60">
                    <polyline width="180px" height="60px" viewBox="0 0 180 60" points="179,1 179,59 1,59 1,1 179,1"/>
                    <polyline width="180px" height="60px" viewBox="0 0 180 60" points="179,1 179,59 1,59 1,1 179,1"/>
                </svg>
                <span>Записатися</span>
            </a>
        </div>
    );
};

export default TellmiButton;