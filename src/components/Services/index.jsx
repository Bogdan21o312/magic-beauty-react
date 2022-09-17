import React, {useEffect} from 'react';
import classes from "./Servises.module.scss"
import {Serviseitems} from "./Serviseitems";
import ServicesGrid from "../Grid/ServicesGrid";
import Title from "../TXT/Title";
import Aos from "aos";
import "aos/dist/aos.css"

const Index = () => {

    useEffect(function () {
        Aos.init({ duration: 1000 });
    }, []);


    return (
        <section className={classes.services}>
            <Title>Послуги салону краси</Title>
            <div className={classes.blockgGllery}>
                <ServicesGrid>
                    {Serviseitems.map((item, index) => (
                        <a data-aos="fade-up" href={item.itemLink}
                           className={classes.blockGallery__item}
                           key={index}>
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