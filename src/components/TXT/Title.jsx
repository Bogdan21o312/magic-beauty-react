import React from 'react';
import classes from "./TXT.module.scss"

const Title = ({children}) => {
    return (
        <h2 className={classes.Title}>
            {children}
        </h2>
    );
};

export default Title;