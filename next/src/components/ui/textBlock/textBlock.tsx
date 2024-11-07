import Image from 'next/image'
import styles from './textBlock.module.scss'
import Link from 'next/link'
import { Button } from '../button/button'
import { parseImageLink } from '@/core/utils/image/parseImageLink'

interface ITextBlockProps {
    text?: string | null,
    imageAlt?: string | null,
    image_url?: string | null,
    imagePos?: "left" | "right",
    header?: string
    button?: {
        text: string,
        link: string
    }
}

export function TextBlock({ text, image_url, imageAlt, imagePos = "left", header, button }: ITextBlockProps) {
    return (
        <div className={`${styles.main} ${imagePos === "right" ? styles.mainRight : ""}`}>
            <div className={styles.left}>
                <Image
                    src={parseImageLink(image_url || "")}
                    alt={imageAlt || ""}
                    className={`${styles.image} ${imagePos === "left" ? styles.imageLeft : styles.imageRight}`}
                    width={0}
                    height={0}
                    sizes="100vw"
                />
            </div>

            <div className={`text ${styles.text}`} >
                <h2>{header}</h2>
                {text && <div dangerouslySetInnerHTML={{ __html: text }}></div>}
                {button &&
                    <Link href={button.link}>
                        <Button>{button.text}</Button>
                    </Link>}
            </div>
        </div >
    )
}