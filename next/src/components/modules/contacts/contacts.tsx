import { CallForm } from '@/components/ui/form/callForm'
import styles from './contacts.module.scss'

interface IContactsPart {
    value: string
    label: string
    hrefBegin?: string
}

interface IContactsProps {
    contacts: IContactsPart[]
}

export function Contacts({ contacts }: IContactsProps) {
    return (
        <div className={styles.main}>
            <div className={styles.part}>
                <h2>
                    Контакты
                </h2>
                {contacts.map(el =>
                    <div key={el.label}>
                        <h3>{el.label}</h3>
                        {!el.hrefBegin
                            ? <p>{el.value}</p>
                            : <a href={el.hrefBegin + el.value}>{el.value}</a>}
                    </div>)}
            </div>
            <div className={styles.part}>
                <CallForm />
            </div>
        </div>
    )
}