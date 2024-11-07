'use client'

import styles from './tours.module.scss'
import { TourItem } from "./item"
import { TourItem2 } from "./item2"

interface IToursProps {

    tours?: Tour[] | null
    itemType?: number
}

export function ToursList({ tours, itemType = 0 }: IToursProps) {
    return (
        <div className={styles.list}>
            {tours && tours.map(el => {
                return itemType === 0
                    ? <TourItem key={el.id} link={el.slug} title={el.name} image_url={el.image_url} />
                    : <TourItem2 key={el.id} link={el.slug} title={el.name} image_url={el.image_url} />
            })}
        </div >
    )
}