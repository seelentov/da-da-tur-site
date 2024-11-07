'use client'

import { YMaps, Map } from '@pbe/react-yandex-maps'
import styles from './map.module.scss'

interface IMapProps {
    center: [number, number]
}

export function YandexMap({ center }: IMapProps) {
    return (
        <YMaps>
            <div className={styles.map}>
                <Map defaultState={{ center, zoom: 9 }} style={{ width: '100%', height: '100%' }} marker={center} />
            </div>
        </YMaps>

    )
}