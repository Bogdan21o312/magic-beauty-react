import React from 'react';
import classes from "./Buttons.module.scss";

const TellmiButton = () => {
    return (
        <div className={classes.TellmiButton}>
            <a href="tel:0677972940">
                <span>Записатися</span>
            </a>
        </div>
    );
};

export default TellmiButton;