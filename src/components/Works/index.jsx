import React from 'react';
import classes from "./Works.module.scss"

const Index = () => {
    return (
        <section className={classes.works}>
                <div className={classes.works__content}>
                    <h2 className={classes.works__title}>Наші роботи</h2>
                    <div className={classes.works__items}>
                        <div className={classes.works__item}>
                            <div className={classes.works__image}>
                                <img src="" alt="Скиньте фото найкращих робіт десь 16-20 фото хватить"/>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Index;