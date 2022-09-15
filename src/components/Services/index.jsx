import React from 'react';
import classes from "./Servises.scss";
import {Serviseitems} from "./Serviseitems";

const Index = () => {
    return (
        <section className={classes.services}>
            <div className="services__container">
                <h2 className="services__title">Послуги салону краси</h2>
                <div className="services__gallery block-gallery">
                    <div className="block-gallery__items">
                        {Serviseitems.map(item, index) (
                            <a className="block-gallery__item" key={index}>
                                <div className="block-gallery__image">
                                    <img src="img/permanent-makeup.jpg" alt="Image"/>
                                    <div className="block-gallery__image_txt">
                                        <div className="block-gallery__title">dlskldslkasda</div>
                                        <div className="block-gallery__sub-title">Детальніше</div>
                                    </div>
                                </div>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Index;