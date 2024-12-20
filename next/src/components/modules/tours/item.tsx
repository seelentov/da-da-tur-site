import Link from 'next/link'
import styles from './tours.module.scss'
import Image from 'next/image'
import { parseImageLink } from '@/core/utils/image/parseImageLink'

type IBannerItem = {
    link: string,
    title: string,
    image_url?: string
}

export function TourItem({ link, image_url, title }: IBannerItem) {
    return (
        <div className={styles.item}>
            <Image
                src={parseImageLink(image_url || "")}
                alt={title}
                className={styles.image}
                width={0}
                height={0}
                sizes="100vw"
            />
            <div className={styles.name}>
                <h3>{title}</h3>
                <Link href={"/tours/" + link}>
                    <span>Подробнее</span> <span>⇀</span>
                </Link>
            </div>
        </div >
    )
}