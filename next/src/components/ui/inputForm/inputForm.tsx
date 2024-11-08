'use client'

import Image from 'next/image'
import styles from './inputForm.module.scss'
import { useState } from 'react'
import { parseImageLink } from '@/core/utils/image/parseImageLink'
import { clearObj } from '@/core/utils/obj/clearObj'
import { POST } from '@/core/api/api'


export type IInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    icon?: string
}

export function InputForm({ className, icon = "/storage/seed/send.svg", ...rest }: IInputProps) {

    const [input, setInput] = useState<string>("")
    const [error, setError] = useState<string>("")

    function handleChange(value: string) {
        if (error) {
            setError("")
        }
        setInput(value)
    }

    async function handleConfirm(e: any) {
        e.preventDefault()

        const data = clearObj({
            email: input,
        }) as CallFormSenderRequest

        await POST<BaseSenderRequest, BaseResponse<{ errors?: { [key: string]: string[] } }>>("subscriber", data)
            .then((res) => {
                console.log(res)


                if (res?.errors) {
                    setError(res?.errors.email[0])
                    return
                }

                alert("Вы успешно подписались на рассылку!")
            })
            .catch((res) => alert(res))
            .finally(() => setInput(""))

    }

    return (
        <form className={styles.main} onSubmit={handleConfirm}>
            <input  {...rest} value={input} className={`${styles.input} ${className} ${error != "" ? styles.error : ""}`} onChange={(e) => handleChange(e.target.value)} placeholder={error != "" ? error : rest.placeholder} type='email' required />
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