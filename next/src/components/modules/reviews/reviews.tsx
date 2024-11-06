'use client'

import { ReviewItem } from './item'
import styles from './reviews.module.scss'
import { SwiperSlide, Swiper } from "swiper/react"


interface IReviewProps {
    reviews: Review[]
}

export function Reviews({ reviews }: IReviewProps) {
    return (
        <div className={styles.main}>
            <Swiper
                slidesPerView={1.5}
                spaceBetween={40}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    992: {
                        slidesPerView: 1.5
                    },
                    0: {
                        slidesPerView: 1
                    },
                }}
            >
                {reviews.map(el => <SwiperSlide key={el.id}><ReviewItem {...el} /></SwiperSlide>)}
            </Swiper>
        </div>
    )
}