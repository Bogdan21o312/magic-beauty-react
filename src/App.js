import React from "react";
// import "./style/App.scss"
import TellmiButton from "./components/Buttons/TellmiButton";

function App() {
    return (
        <div className="wrapper">
            <TellmiButton/>
            {/*<header className="header">*/}
            {/*    <div className="header__container">*/}
            {/*        <a href="" className="header__logo">*/}
            {/*            Magic beauty*/}
            {/*        </a>*/}
            {/*        <div className="header__menu menu">*/}
            {/*            <nav className="menu__body">*/}
            {/*                <ul className="menu__list">*/}
            {/*                    <li className="menu__item">*/}
            {/*                        <a href="" className="menu__link">Home</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="menu__item">*/}
            {/*                        <a href="" className="menu__link">About</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="menu__item">*/}
            {/*                        <a href="" className="menu__link">Features</a>*/}
            {/*                    </li>*/}
            {/*                    <li className="menu__item">*/}
            {/*                        <a href="" className="menu__link">How it works</a>*/}
            {/*                    </li>*/}
            {/*                </ul>*/}
            {/*            </nav>*/}
            {/*        </div>*/}
            {/*        <div className="header__action">*/}
            {/*            <a href="tel:0677972940" className="tel">0 (67) 797 29 40</a>*/}
            {/*            <a href="tel:0677972940" data-da=".menu__body,767.98" className="button">*/}
            {/*                <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">*/}
            {/*                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line"/>*/}
            {/*                    <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line"/>*/}
            {/*                </svg>*/}
            {/*                <span>Записатися</span>*/}
            {/*            </a>*/}

            {/*            <button type="button" className="icon-menu"><span></span></button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</header>*/}
            {/*<main className="page">*/}
            {/*    <section className="services">*/}
            {/*        <div className="services__container">*/}
            {/*            <h2 className="services__title">Послуги салону краси</h2>*/}
            {/*            <div className="services__gallery block-gallery">*/}
            {/*                <div className="block-gallery__items">*/}
            {/*                    <a href="#" className="block-gallery__item">*/}
            {/*                        <div className="block-gallery__image">*/}
            {/*                            <img src="img/permanent-makeup.jpg" alt="Image"/>*/}
            {/*                                <div className="block-gallery__image_txt">*/}
            {/*                                    <div className="block-gallery__title">Перманентний макіяж</div>*/}
            {/*                                    <div className="block-gallery__sub-title">Детальніше</div>*/}
            {/*                                </div>*/}
            {/*                        </div>*/}
            {/*                    </a>*/}
            {/*                    <a href="#" className="block-gallery__item">*/}
            {/*                        <div className="block-gallery__image">*/}
            {/*                            <img src="img/manicure.webp" alt="Image"/>*/}
            {/*                                <div className="block-gallery__image_txt">*/}
            {/*                                    <div className="block-gallery__title">Манікюр</div>*/}
            {/*                                    <div className="block-gallery__sub-title">Детальніше</div>*/}
            {/*                                </div>*/}
            {/*                        </div>*/}
            {/*                    </a>*/}
            {/*                    <a href="#" className="block-gallery__item">*/}
            {/*                        <div className="block-gallery__image">*/}
            {/*                            <img src="img/eyelashes.jpg" alt="Image"/>*/}
            {/*                                <div className="block-gallery__image_txt">*/}
            {/*                                    <div className="block-gallery__title">Вії</div>*/}
            {/*                                    <div className="block-gallery__sub-title">Детальніше</div>*/}
            {/*                                </div>*/}
            {/*                        </div>*/}
            {/*                    </a>*/}
            {/*                    <a href="#" className="block-gallery__item">*/}
            {/*                        <div className="block-gallery__image">*/}
            {/*                            <img src="img/eyebrows.jpg" alt="Image"/>*/}
            {/*                                <div className="block-gallery__image_txt">*/}
            {/*                                    <div className="block-gallery__title">Брови</div>*/}
            {/*                                    <div className="block-gallery__sub-title">Детальніше</div>*/}
            {/*                                </div>*/}
            {/*                        </div>*/}
            {/*                    </a>*/}
            {/*                    <a href="#" className="block-gallery__item">*/}
            {/*                        <div className="block-gallery__image">*/}
            {/*                            <img src="img/sugaring.jpg" alt="Image"/>*/}
            {/*                                <div className="block-gallery__image_txt">*/}
            {/*                                    <div className="block-gallery__title">Шугаринг</div>*/}
            {/*                                    <div className="block-gallery__sub-title">Детальніше</div>*/}
            {/*                                </div>*/}
            {/*                        </div>*/}
            {/*                    </a>*/}
            {/*                    <a href="#" className="block-gallery__item">*/}
            {/*                        <div className="block-gallery__image">*/}
            {/*                            <img src="img/pedicure-02.jpg" alt="Image"/>*/}
            {/*                                <div className="block-gallery__image_txt">*/}
            {/*                                    <div className="block-gallery__title">Педикюр</div>*/}
            {/*                                    <div className="block-gallery__sub-title">Детальніше</div>*/}
            {/*                                </div>*/}
            {/*                        </div>*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </section>*/}
            {/*    <section className="why">*/}
            {/*        <div className="why__container">*/}
            {/*            <div className="why__content">*/}
            {/*                <div className="why__columns">*/}
            {/*                    <div className="why__column column-first">*/}
            {/*                        <div className="column-first__txt">*/}
            {/*                            <div className="column-first__title">Безпека</div>*/}
            {/*                            <div className="column-first__text">100% гарантія стерилізації*/}
            {/*                                та<br/> дезінфекції.*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="column-first__txt">*/}
            {/*                            <div className="column-first__title">Економія часу без<br/> доплат*/}

            {/*                            </div>*/}
            {/*                            <div className="column-first__text">100% гарантія стерилізації*/}
            {/*                                та<br/> дезінфекції.</div>*/}
            {/*                        </div>*/}
            {/*                        <div className="column-first__txt">*/}
            {/*                            <div className="column-first__title">Турбота</div>*/}
            {/*                            <div className="column-first__text">Кава, чай, печиво і Wi-Fi для<br/> клієнтів*/}
            {/*                                салону*/}
            {/*                                безкоштовно.<br/> Комплімент салону.*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div data-da=".why__columns,912" className="why__column column-center">*/}
            {/*                        <div className="column-center__title">*/}
            {/*                            Чому<br/>*/}
            {/*                            ми*/}
            {/*                        </div>*/}
            {/*                        <div className="column-center__image">*/}
            {/*                            <img src="" alt="Тут має бути гарне фото салона сфоткайте!"/>*/}
            {/*                        </div>*/}
            {/*                        <div className="column-center__txt">*/}
            {/*                            <div className="column-center__txt_title">*/}
            {/*                                Салон краси <span>Magic beauty</span>*/}
            {/*                            </div>*/}
            {/*                            <div className="column-center__txt_sub-title">Розфарбуйте життя<br/>*/}
            {/*                                яскравими фарбами!*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="why__column column-left">*/}
            {/*                        <div className="column-left__txt">*/}
            {/*                            <div className="column-left__title">Безпека</div>*/}
            {/*                            <div className="column-left__text">100% гарантія стерилізації*/}
            {/*                                та<br/> дезінфекції.*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                        <div className="column-left__txt">*/}
            {/*                            <div className="column-left__title">Економія часу без<br/> доплат*/}

            {/*                            </div>*/}
            {/*                            <div className="column-left__text">100% гарантія стерилізації*/}
            {/*                                та<br/> дезінфекції.</div>*/}
            {/*                        </div>*/}
            {/*                        <div className="column-left__txt">*/}
            {/*                            <div className="column-left__title">Турбота</div>*/}
            {/*                            <div className="column-left__text">Кава, чай, печиво і Wi-Fi для<br/> клієнтів*/}
            {/*                                салону*/}
            {/*                                безкоштовно.<br/> Комплімент салону.*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </section>*/}
            {/*    <section className="works">*/}
            {/*        <div className="works__container">*/}
            {/*            <div className="works__content">*/}
            {/*                <h2 className="works__title">Наші роботи</h2>*/}
            {/*                <div className="works__items">*/}
            {/*                    <div className="works__item">*/}
            {/*                        <div className="works__image">*/}
            {/*                            <img src="" alt="Скиньте фото найкращих робіт десь 16-20 фото хватить"/>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </section>*/}
            {/*    <section className="certificate">*/}
            {/*        <div className="certificate__container">*/}
            {/*            <div className="certificate__content">*/}
            {/*                <h2 className="certificate__title">Подарунковий сертифікат в салон краси</h2>*/}
            {/*                <ul className="certificate__list">*/}
            {/*                    <li className="certificate__item">*/}
            {/*                        Сертифікати для жінок на конкретну послугу або на певну суму.*/}
            {/*                    </li>*/}
            {/*                    <li className="certificate__item">*/}
            {/*                        Задати будь-які питання Ви можете за телефоном <a href="tel:0677972940">0 (67) 797*/}
            {/*                        29 40</a>*/}
            {/*                    </li>*/}
            {/*                </ul>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </section>*/}
            {/*    <div className="brand">*/}
            {/*        <h2 className="brand__title">Працюємо з такими брендами</h2>*/}
            {/*        <div className="brand__slider swiper">*/}
            {/*            <div className="brand__wrapper swiper-wrapper">*/}
            {/*                <div className="brand__slide swiper-slide">*/}
            {/*                    <img src="" alt="Поскидайте фото фірм з якими ви працюєте"/>*/}
            {/*                </div>*/}
            {/*                <div className="brand__slide swiper-slide">*/}
            {/*                    <img src="" alt="Поскидайте фото фірм з якими ви працюєте"/>*/}
            {/*                </div>*/}
            {/*                <div className="brand__slide swiper-slide">*/}
            {/*                    <img src="" alt="Поскидайте фото фірм з якими ви працюєте"/>*/}
            {/*                </div>*/}
            {/*                <div className="brand__slide swiper-slide">*/}
            {/*                    <img src="" alt="Поскидайте фото фірм з якими ви працюєте"/>*/}
            {/*                </div>*/}
            {/*                <div className="brand__slide swiper-slide">*/}
            {/*                    <img src="" alt="Поскидайте фото фірм з якими ви працюєте"/>*/}
            {/*                </div>*/}
            {/*                <div className="brand__slide swiper-slide">*/}
            {/*                    <img src="" alt="Поскидайте фото фірм з якими ви працюєте"/>*/}
            {/*                </div>*/}
            {/*                <div className="brand__slide swiper-slide">*/}
            {/*                    <img src="" alt="Поскидайте фото фірм з якими ви працюєте"/>*/}
            {/*                </div>*/}
            {/*                <div className="brand__slide swiper-slide">*/}
            {/*                    <img src="" alt="Поскидайте фото фірм з якими ви працюєте"/>*/}
            {/*                </div>*/}
            {/*                <div className="brand__slide swiper-slide">*/}
            {/*                    <img src="" alt="Поскидайте фото фірм з якими ви працюєте"/>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</main>*/}
            {/*<footer className="footer">*/}
            {/*    <div className="footer__container">*/}
            {/*        © 2022 Салон краси Magic beauty*/}
            {/*    </div>*/}
            {/*</footer>*/}
        </div>
    );
}

export default App;
