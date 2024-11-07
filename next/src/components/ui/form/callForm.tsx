'use client'

import { Dispatch, SetStateAction, useState } from 'react';
import styles from './form.module.scss'
import { Button } from '../button/button';
import { Input } from '../input/input';
import { Textarea } from '../textarea/textarea';
import { Checkbox } from '../checkbox/checkbox';
import { usePathname } from 'next/navigation';
import { POST } from '@/core/api/api';
import { Loading } from '../loading/loading';
import ReCAPTCHA from "react-google-recaptcha";

export interface ICallFormProps {
    header?: string
    defaultTheme?: string
}

export function CallForm({ header = "Задать вопрос", defaultTheme = "" }: ICallFormProps) {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [theme, setTheme] = useState<string>(defaultTheme)
    const [message, setMessage] = useState<string>("")
    const [policy, setPolicy] = useState<boolean>(true)

    const [errors, setErrors] = useState<{ [key: string]: string } | null>(null)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [token, setToken] = useState("");

    const page = usePathname()

    function handleChange<T>(setState: Dispatch<SetStateAction<T>>, value: T) {
        if (errors) {
            setErrors(null)
        }
        setState(value)
    }


    async function handleSubmit(e: any) {
        e.preventDefault()

        if (!token || token === "") {
            alert("Пройдите проверку ReCaptcha");
            return false;
        }

        setIsLoading(true)
        await POST<CallFormSenderRequest, BaseResponse<null>>("sender", {
            phone,
            email,
            name,
            message,
            policy,
            topic: theme,
            page
        })
            .then((res) => console.log(res))
            .catch((res) => console.log(res))
            .finally(() => setIsLoading(false))
    }

    const enabled = !isLoading && token != ""


    return (
        <div className={styles.main}>
            <h2>
                {header}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.part}>
                    <Input value={name} onChange={(e) => handleChange(setName, e.target.value)} placeholder={errors?.name ? errors?.name[0] : 'Как вас зовут?'} type='text' disabled={enabled} />
                    <Input value={email} onChange={(e) => handleChange(setEmail, e.target.value)} placeholder='Email' type='email' disabled={enabled} />
                </div>
                <div className={styles.part}>
                    <Input value={phone} onChange={(e) => handleChange(setPhone, e.target.value)} placeholder='Номер телефона' type='tel' disabled={enabled} />
                    <Input value={theme} onChange={(e) => handleChange(setTheme, e.target.value)} placeholder='Тема' type='text' disabled={enabled} />
                </div>
                <div className={styles.part}>
                    <Textarea value={message} onChange={(e) => handleChange(setMessage, e.target.value)} placeholder='Сообщение' disabled={enabled} />
                </div>
                <div className={styles.bottom}>
                    <Checkbox isChecked={policy} setIsChecked={setPolicy} label={"Я принимаю условия передачи информации"} disabled={enabled} />
                    <Button disabled={enabled}>{isLoading ? <Loading color={"white"} min /> : 'отправить'}</Button>
                </div>
                {process.env.RECAPTCHA_PUBLIC_KEY && <ReCAPTCHA
                    sitekey={process.env.RECAPTCHA_PUBLIC_KEY}
                    onChange={(token: any) => setToken(token)}
                />}
            </form>
        </div>
    );
}
