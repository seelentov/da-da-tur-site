import Link from 'next/link'
import styles from './banners.module.scss'
import Image from 'next/image'
import { parseImageLink } from '@/core/utils/image/parseImageLink'

type IBannerItem = Omit<Banner, "id" | "position"> & { header?: "h1" | "h2" }

export function BannerItem({ link, image_url, title, description, header = "h2" }: IBannerItem) {
    return (
        <Link href={link} className={styles.item}>
            <Image
                src={parseImageLink(image_url)}
                alt={title}
                className={styles.image}
                width={0}
                height={0}
                sizes="100vw"
            />
            <div className={`${styles.content}`}>
                <div className={`${styles.text} container`} dangerouslySetInnerHTML={{ __html: ((header === 'h2' ? title : title.replaceAll('h2', 'h1')) + description) }}>
                </div>
            </div>
        </Link>
    )
}