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
import { clearObj } from '@/core/utils/obj/clearObj';
import { RECAPTCHA_PUBLIC_KEY } from '@/core/api/env';

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

    const [errors, setErrors] = useState<{ [key: string]: string[] } | null>(null)

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [token, setToken] = useState("");

    const page = usePathname()

    function handleChange<T>(setState: Dispatch<SetStateAction<T>>, value: T) {
        if (errors) {
            setErrors(null)
        }
        setState(value)
    }

    function clearForm() {
        setName("")
        setEmail("")
        setPhone("")
        setTheme(defaultTheme)
        setMessage("")
    }

    async function handleSubmit(e: any) {
        e.preventDefault()

        if (!enabled) {
            return
        }

        if (RECAPTCHA_PUBLIC_KEY && (!token || token === "")) {
            alert("Пройдите проверку ReCaptcha");
            return false;
        }

        const data = clearObj({
            phone,
            email,
            name,
            message,
            policy,
            topic: theme,
            page
        }) as CallFormSenderRequest

        setIsLoading(true)
        await POST<CallFormSenderRequest, BaseResponse<{ errors?: { [key: string]: string[] } }>>("sender", data)
            .then((res) => {
                if (res?.errors) {
                    setErrors(res?.errors)
                    return
                }

                alert("Заявка успешно отправлена!")


                console.log(res)
            })
            .catch((res) => alert(res))
            .finally(() => {
                clearForm()
                setIsLoading(false)
            })
    }

    const enabled = !isLoading && (RECAPTCHA_PUBLIC_KEY ? token != "" : true) && policy


    return (
        <div className={styles.main}>
            <h2>
                {header}
            </h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.part}>
                    <Input value={name} onChange={(e) => handleChange(setName, e.target.value)} placeholder={errors?.name ? errors?.name[0] : 'Как вас зовут?'} type='text' disabled={!enabled} isError={Boolean(errors?.name)} />
                    <Input value={email} onChange={(e) => handleChange(setEmail, e.target.value)} placeholder={errors?.email ? errors?.email[0] : 'Email'} type='email' disabled={!enabled} isError={Boolean(errors?.email)} />
                </div>
                <div className={styles.part}>
                    <Input value={phone} onChange={(e) => handleChange(setPhone, e.target.value)} placeholder={errors?.phone ? errors?.phone[0] : 'Номер телефона*'} type='tel' disabled={!enabled} isError={Boolean(errors?.phone)} required pattern="[0-9]{6,12}" />
                    <Input value={theme} onChange={(e) => handleChange(setTheme, e.target.value)} placeholder={errors?.theme ? errors?.theme[0] : 'Тема'} type='text' disabled={!enabled} isError={Boolean(errors?.theme)} />
                </div>
                <div className={styles.part}>
                    <Textarea value={message} onChange={(e) => handleChange(setMessage, e.target.value)} placeholder={errors?.message ? errors?.message[0] : 'Сообщение'} disabled={!enabled} />
                </div>
                <div className={styles.bottom}>
                    <Checkbox isChecked={policy} setIsChecked={setPolicy} label={"Я принимаю условия передачи информации"} required name="policy" />
                    <Button disabled={!enabled}>{isLoading ? <Loading color={"white"} min /> : 'отправить'}</Button>
                </div>
                {RECAPTCHA_PUBLIC_KEY && <ReCAPTCHA
                    sitekey={RECAPTCHA_PUBLIC_KEY}
                    onChange={(token: any) => setToken(token)}
                />}
                <p style={{ display: 'none' }}>{process.env.NEXT_PUBLIC_TEST}</p>
            </form>
        </div>
    );
}
