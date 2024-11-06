'use client'

import { SwiperSlide, Swiper } from "swiper/react"
import styles from './tours.module.scss'
import { TourItem } from "./item"
import { TourItem2 } from "./item2"
import { SwiperOptions } from "swiper/types"

interface IToursProps {

    tours?: Tour[] | null
    itemType?: number
    breakpoints?: {
        [width: number]: SwiperOptions;
        [ratio: string]: SwiperOptions;
    } | undefined
}

export function ToursSlider({ tours, itemType = 0, breakpoints = {
    992: {
        slidesPerView: 3,
    },
    576: {
        slidesPerView: 2,
    },
    0: {
        slidesPerView: 1,
    },
} }: IToursProps) {
    return (
        <div className={styles.main}>
            <Swiper
                slidesPerView={3}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={breakpoints}
            >
                {tours && tours.map(el => <SwiperSlide key={el.id}>
                    {itemType === 0
                        ? <TourItem link={el.slug} title={el.name} image_url={el.image_url} />
                        : <TourItem2 link={el.slug} title={el.name} image_url={el.image_url} />}
                </SwiperSlide>)}
            </Swiper>
        </div >
    )
}