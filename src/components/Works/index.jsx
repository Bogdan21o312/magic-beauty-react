import React from 'react';
import classes from "./Works.module.scss"
import "aos/dist/aos.css"
import Title from "../TXT/Title";
import {motion} from "framer-motion";

const Index = () => {
    return (
        <section className={classes.works}>
                <div className={classes.works__content}>
                    <Title>Наші роботи</Title>
                    <div className={classes.works__items}>
                        <motion.div
                            initial={{
                                y: 30,
                                opacity: 0,
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {delay: 0.03},
                                viewport: {amount: 0.02}
                            }}
                            className={classes.works__item}>
                            <div className={classes.works__image}>
                                <img src="" alt="Скиньте фото найкращих робіт десь 16-20 фото хватить"/>
                            </div>
                        </motion.div>
                    </div>
                </div>
        </section>
    );
};

export default Index;