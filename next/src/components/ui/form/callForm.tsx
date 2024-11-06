'use client'

import { useState } from 'react';
import styles from './form.module.scss'
import { Button } from '../button/button';
import { Input } from '../input/input';
import { Textarea } from '../textarea/textarea';
import { Checkbox } from '../checkbox/checkbox';

export function CallForm() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [theme, setTheme] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [policy, setPolicy] = useState<boolean>(true)

    const [errors, setErrors] = useState<{ [key: string]: string } | null>(null)

    async function handleSubmit(e: any) {
        e.preventDefault()
        setErrors(null)

    }

    return (
        <div className={styles.main}>
            <h2>
                Задать вопрос
            </h2>
            <form className={styles.main} onSubmit={handleSubmit}>
                <div className={styles.part}>
                    <Input value={name} onChange={(e) => setName(e.target.value)} placeholder={errors?.name ? errors?.name[0] : 'Как вас зовут?'} type='text' />
                    <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' type='email' />
                </div>
                <div className={styles.part}>
                    <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Номер телефона' type='tel' />
                    <Input value={theme} onChange={(e) => setTheme(e.target.value)} placeholder='Тема' type='text' />
                </div>
                <div className={styles.part}>
                    <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Сообщение' />
                </div>
                <div className={styles.bottom}>
                    <Checkbox isChecked={policy} setIsChecked={setPolicy} label={"Я принимаю условия передачи информации"} />
                    <Button>отправить</Button>
                </div>

            </form>
        </div>
    );
}
