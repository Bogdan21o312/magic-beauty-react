import React from 'react';
import classes from "./Why.module.scss"
import {WhyColumnLeft, WhyColumnRight} from "./Whyitems";

const Index = () => {
    return (
        <section className={classes.why}>
            <div className={classes.why__columns}>
                <div className={`${classes.why__column} ${classes.firstColumn}`}>
                    {WhyColumnLeft.map((item) => (
                        <div className={classes.why__column_txt}>
                            <div className={classes.why__column_title}>{item.itemTitle}</div>
                            <div className={classes.why__column_text}>{item.itemText}</div>
                        </div>
                    ))}
                </div>
                <div className={`${classes.why__column} ${classes.centerColumn}`}>
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
                </div>
                <div className={`${classes.why__column} ${classes.lastColumn}`}>
                    {WhyColumnRight.map((item) => (
                        <div className={classes.why__column_txt}>
                            <div className={classes.why__column_title}>{item.itemTitle}</div>
                            <div className={classes.why__column_text}>{item.itemText}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Index;