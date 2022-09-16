import React from 'react';
import classes from "./Servises.module.scss"
import {Serviseitems} from "./Serviseitems";
import ServicesGrid from "../Grid/ServicesGrid";
import Title from "../TXT/Title";

const Index = () => {
    return (
        <section className={classes.services}>
            <Title>Послуги салону краси</Title>
            <div className={classes.blockgGllery}>
                <ServicesGrid>
                    {Serviseitems.map((item) => (
                        <a href={item.itemLink} className={classes.blockGallery__item}>
                            <div className={classes.blockGallery__image}>
                                <img src={item.itemUrlImage} alt="Image"/>
                                <div className={classes.blockGallery__image_txt}>
                                    <div className={classes.blockGallery__title}>{item.itemTitle}</div>
                                    <div className={classes.blockGallery__subTitle}>Детальніше</div>
                                </div>
                            </div>
                        </a>
                    ))}
                </ServicesGrid>
            </div>
        </section>
    );
};

export default Index;