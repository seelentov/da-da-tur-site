'use client'

import styles from './banners.module.scss'
import { BannerItem } from './item'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

interface IBannersProps {
    banners: Banner[]
}

export function Banners({ banners }: IBannersProps) {
    return (

        <div className={styles.main}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {banners.map(el => <SwiperSlide key={el.id}><BannerItem link={el.link} title={el.title} description={el.description} image_url={el.image_url} /></SwiperSlide>)}
            </Swiper>
        </div >
    )
}