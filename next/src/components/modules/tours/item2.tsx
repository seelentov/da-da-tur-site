import Link from 'next/link'
import styles from './tours.module.scss'
import Image from 'next/image'
import { parseImageLink } from '@/core/utils/image/parseImageLink'

type IBannerItem = {
    link: string,
    title: string,
    image_url?: string
}

export function TourItem2({ link, image_url, title }: IBannerItem) {
    return (
        <div className={styles.item}>
            <Image
                src={parseImageLink(image_url || "")}
                alt={title}
                className={styles.image2}
                width={0}
                height={0}
                sizes="100vw"
            />
            <Link href={"/tours/" + link} className={styles.name2}>
                <span>Подробнее</span> <span>⇀</span>
            </Link>
        </div >
    )
}