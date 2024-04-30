/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import { useSelector } from "react-redux";

function BannerSlider() {
    const { banners } = useSelector(state => state.home)

    return (
        <Swiper className="banner-slider slider-banner" autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
            spaceBetween={8}
            modules={[Autoplay]}>
            {
                banners.list.map(item => (
                    <SwiperSlide className="slider-slide" key={item.id}>
                        <div className="slider-slide__image">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="slider-slide__content">
                            <p className="slider-slide__toptitle">{item.toptitle}</p>
                            <h3 className="slider-slide__title">{item.title}</h3>
                            <button className="slider-slide__button">Learn more</button>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
}

export default BannerSlider