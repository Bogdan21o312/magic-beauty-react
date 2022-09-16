import React from 'react';
import classes from "./Grid.module.scss";

const ServicesGrid = ({children}) => {
    return (
        <div className={classes.ServicesGrid}>
            {children}
        </div>
    );
};

export default ServicesGrid;