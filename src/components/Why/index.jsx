import React from 'react';
import classes from "./Why.module.scss"
import {WhyColumnLeft, WhyColumnRight} from "./Whyitems";
import {motion} from "framer-motion";

const Index = () => {
    return (
        <section className={classes.why}>
            <div className={classes.why__columns}>
                <div
                    className={`${classes.why__column} ${classes.firstColumn}`}>
                    {WhyColumnLeft.map((item) => (
                        <motion.div
                            initial={{
                                x: -30,
                                y: 30,
                                opacity: 0,
                            }}
                            whileInView={{
                                x: 0,
                                y: 0,
                                opacity: 1,
                                transition: {delay: 0.03},
                                viewport: {amount: 0.02}
                            }}
                            className={classes.why__column_txt}>
                            <div className={classes.why__column_title}>{item.itemTitle}</div>
                            <div className={classes.why__column_text}>{item.itemText}</div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    initial={{
                        y: 40,
                        opacity: 0,
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1,
                        transition: {delay: 0.03},
                        viewport: {amount: 0.02}
                    }}
                    className={`${classes.why__column} ${classes.centerColumn}`}>
                    <div className={classes.why__column_title}>
                        Чому<br/>
                        ми
                    </div>
                    <div className={classes.why__column_image}>
                        <img src="" alt="Тут має бути гарне фото салона сфоткайте!"/>
                    </div>
                    <div className={classes.why__column_txt}>
                        <p>
                            Салон краси <span>Magic beauty</span>
                        </p>
                        <div className={classes.why__column_subTitle}>Розфарбуйте життя<br/>
                            яскравими фарбами!
                        </div>
                    </div>
                </motion.div>
                <div className={`${classes.why__column} ${classes.lastColumn}`}>
                    {WhyColumnRight.map((item) => (
                        <motion.div
                            initial={{
                                x: 30,
                                y: 30,
                                opacity: 0,
                            }}
                            whileInView={{
                                x: 0,
                                y: 0,
                                opacity: 1,
                                transition: {delay: 0.03},
                                viewport: {amount: 0.02}
                            }}
                            className={classes.why__column_txt}>
                            <div className={classes.why__column_title}>{item.itemTitle}</div>
                            <div className={classes.why__column_text}>{item.itemText}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Index;