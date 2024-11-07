import Image from 'next/image'
import styles from './socials.module.scss'
import { parseImageLink } from '@/core/utils/image/parseImageLink'

interface ISocialProps {
    socials?: Social[] | null
}

export async function Socials({ socials }: ISocialProps) {
    return (
        <div className={styles.main}>
            {socials && socials.map(el =>
                <a href={el.link} target='_blank' key={el.id} className={styles.item}>
                    <Image
                        src={parseImageLink(el.image_url)}
                        alt={el.name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: 20, height: 20, objectFit: 'contain' }}
                        className={styles.image}
                    />
                </a>)}
        </div>
    )
}