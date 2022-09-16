import React from 'react';
import classes from "./TXT.module.scss"

const SubTitle = ({children}) => {
    return (
        <h3 className={SubTitle}>
            {children}
        </h3>
    );
};

export default SubTitle;