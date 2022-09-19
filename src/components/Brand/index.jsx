import React from 'react';
import classes from "./Brand.module.scss"
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import {Branditems} from "./Branditems";
import {motion} from "framer-motion";

import 'swiper/css';
import Title from "../TXT/Title";

const Index = () => {
    return (
        <div className={classes.brand}>
            <Title>Працюємо з такими брендами</Title>
            <motion.div
                initial={{
                    y: 40,
                    opacity: 0,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {delay: 0.03},
                    viewport: {amount: 0.02}
                }}>
                <Swiper
                    className={classes.brand__slider}
                    spaceBetween={30}
                    centeredSlides={true}
                    slidesPerView={6}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                >
                    {Branditems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img src={item.imageUrl} alt="Поскидайте фото фірм з якими ви працюєте"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </motion.div>
        </div>
    );
};

export default Index;
