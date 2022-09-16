import React from 'react';
import classes from "./TXT.module.scss"

const Text = ({children}) => {
    return (
        <p className={classes.Text}>
            {children}
        </p>
    );
};

export default Text;