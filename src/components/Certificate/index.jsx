import React, {useEffect} from 'react';
import classes from "./Certificate.module.scss"
import Aos from "aos";
import "aos/dist/aos.css"

const Index = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])
    return (
        <section data-aos="fade-up" className={classes.certificate}>
            <div className={classes.certificate__content}>
                <h2 className={classes.certificate__title}>Подарунковий сертифікат в салон краси</h2>
                <ul className={classes.certificate__list}>
                    <li className={classes.certificate__item}>
                        Сертифікати для жінок на конкретну послугу або на певну суму.
                    </li>
                    <li className={classes.certificate__item}>
                        Задати будь-які питання Ви можете за телефоном <a href="tel:0677972940">0 (67) 797 29 40</a>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Index;