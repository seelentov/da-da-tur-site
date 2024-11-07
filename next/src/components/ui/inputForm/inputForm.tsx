'use client'

import Image from 'next/image'
import styles from './inputForm.module.scss'
import { useState } from 'react'
import { parseImageLink } from '@/core/utils/image/parseImageLink'


export type IInputProps<T> = React.InputHTMLAttributes<HTMLInputElement> & {
    icon?: string
    onConfirm?: (value: string) => Promise<T>
}

export function InputForm<T>({ className, value, icon = "/storage/seed/send.svg", onConfirm, ...rest }: IInputProps<T>) {

    const [input, setInput] = useState<string>("")
    const [error, setError] = useState<string>("")

    async function handleConfirm(e: any) {
        e.preventDefault()
        setError("")

        if (onConfirm) {
            onConfirm(input)
                .then((e: any) => console.log(e))
                .catch((e) => setError(e))
        }
    }

    return (
        <form className={styles.main} onSubmit={handleConfirm}>
            <input  {...rest} value={value} className={`${styles.input} ${className} ${error != "" ? styles.error : ""}`} onChange={(e) => setInput(e.target.value)} placeholder={error != "" ? error : rest.placeholder} />
            <button className={styles.button} >
                <Image
                    src={parseImageLink(icon)}
                    alt={"Submit"}
                    className={styles.logo}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: 'auto', height: 'auto' }} />
            </button>
        </form>
    )
}