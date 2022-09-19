import React from 'react';
import classes from "./TXT.module.scss"
import {motion} from "framer-motion";


const Title = ({children}) => {
    return (
        <motion.div
            initial={{
                y: 30,
                opacity: 0,
            }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {delay: 0.1},
                viewport: {amount: 0.02}
            }}
        >
            <h2
                className={classes.Title}>
                {children}
            </h2>
        </motion.div>
    );
};

export default Title;