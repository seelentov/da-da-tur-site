import Image from 'next/image'
import styles from './reviews.module.scss'
import { convertDBDateToString } from '@/core/utils/date/convertDBDateToString'
import { parseImageLink } from '@/core/utils/image/parseImageLink'


interface IReviewItemProps {
    image_url?: string
    name: string
    text: string
    stars: number
    created_at: string
    link?: string
}

export function ReviewItem({ image_url, name, text, stars, created_at, link }: IReviewItemProps) {
    return (
        <div className={styles.item}>
            <div className={styles.header}>
                <Image
                    src={parseImageLink(image_url || "")}
                    alt={name}
                    className={styles.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
                <h3>{name}</h3>
            </div>
            <div className={styles.text}>
                {text}
            </div>
            {link && <a className={styles.link} href={link} target='_blank'><span>ВЕСЬ ОТЗЫВ</span> <span>⇀</span></a>}

            <div className={styles.footer}>
                <p>{convertDBDateToString(created_at)}</p>
                <div className={styles.stars}>
                    {Array.from(Array(stars).keys()).map(index =>
                        <Image
                            key={index}
                            src={"/storage/seed/star_white.svg"}
                            alt={""}
                            width={0}
                            height={0}
                            sizes="100vw"
                        />)}
                </div>
            </div>
        </div>
    )
}