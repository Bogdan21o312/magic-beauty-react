import React from 'react';
import classes from "./Certificate.module.scss"
import Phone from "../Phone";

const Index = () => {

    return (
        <section className={classes.certificate}>
            <div className={classes.certificate__content}>
                <h2 className={classes.certificate__title}>Подарунковий сертифікат в салон краси</h2>
                <ul className={classes.certificate__list}>
                    <li className={classes.certificate__item}>
                        Сертифікати для жінок на конкретну послугу або на певну суму.
                    </li>
                    <li className={classes.certificate__item}>
                        Задати будь-які питання Ви можете за телефоном <Phone/>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Index;