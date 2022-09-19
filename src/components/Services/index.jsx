import React, {useEffect} from 'react';
import classes from "./Servises.module.scss"
import {Serviseitems} from "./Serviseitems";
import ServicesGrid from "../Grid/ServicesGrid";
import Title from "../TXT/Title";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Index = () => {
    return (
        <section className={classes.services}>
            <Title>Послуги салону краси</Title>
            <div className={classes.blockgGllery}>
                <ServicesGrid>
                    {Serviseitems.map((item, index) => (
                        <Link to={item.itemLink} className={classes.blockGallery__item}
                              key={index}>
                            <motion.div
                                initial={{
                                    y: 10,
                                    opacity: 0,
                                }}
                                whileInView={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {delay: 0.03},
                                    viewport: {amount: 0.2}
                                }}
                                className={classes.blockGallery__image}
                            >
                                <img src={item.itemUrlImage} alt="Image"/>
                                <div className={classes.blockGallery__image_txt}>
                                    <div className={classes.blockGallery__title}>{item.itemTitle}</div>
                                    <div className={classes.blockGallery__subTitle}>Детальніше</div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </ServicesGrid>
            </div>
        </section>
    );
};

export default Index;