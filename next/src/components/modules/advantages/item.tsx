import Image from 'next/image'
import styles from './advantages.module.scss'

interface IAdvantageItemProps {
    iconUrl: string,
    header: string,
    description: string,
}

export function AdvantageItem({ iconUrl, header, description }: IAdvantageItemProps) {
    return (
        <div className={styles.item}>
            <Image
                src={iconUrl}
                alt={header}
                className={styles.image}
                width={0}
                height={0}
                sizes="100vw"
            />
            <div className={styles.text}>
                <h3>{header}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}