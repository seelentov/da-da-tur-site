import Link from 'next/link'
import styles from './blockHeader.module.scss'
import { Button } from '../button/button'
import { ReactNode } from 'react'

interface IBlockHeader {
    header?: string
    headerAlign?: "center" | "left" | "right"
    description?: string
    button?: {
        text: string,
        link: string
    },
    rightNode?: ReactNode
}

export function BlockHeader({ header, button, description, headerAlign = "left", rightNode }: IBlockHeader) {
    return (
        <>
            {header && <div className={styles.header}>
                {header && <h2 style={{ textAlign: headerAlign }} dangerouslySetInnerHTML={{ __html: header }}></h2>}
                {button && <Link href={button.link}><Button>{button.text}</Button></Link>}
                {rightNode && rightNode}
            </div>}
            {description && <div className={styles.description}>
                <p>{description}</p>
            </div>}
        </>
    )
}