import React from 'react';
import classes from "./TXT.module.scss"
import Aos from "aos";

const Title = ({children}) => {
    return (
        <h2 data-aos="fade-down" className={classes.Title}>
            {children}
        </h2>
    );
};

export default Title;