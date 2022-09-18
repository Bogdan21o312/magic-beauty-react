import React, {useEffect} from 'react';
import classes from "./Works.module.scss"
import Aos from "aos";
import "aos/dist/aos.css"
import Title from "../TXT/Title";

const Index = () => {
    useEffect(function () {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <section className={classes.works}>
                <div className={classes.works__content}>
                    <Title data-aos="fade-down">Наші роботи</Title>
                    <div className={classes.works__items}>
                        <div className={classes.works__item}>
                            <div className={classes.works__image}>
                                <img data-aos="fade-up" src="" alt="Скиньте фото найкращих робіт десь 16-20 фото хватить"/>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Index;