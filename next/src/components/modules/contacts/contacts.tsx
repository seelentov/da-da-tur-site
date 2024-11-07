import { CallForm } from '@/components/ui/form/callForm'
import styles from './contacts.module.scss'
import { Socials } from '../socials/socials'

interface IContactsPart {
    value: string
    label: string
    hrefBegin?: string
}

interface IContactsProps {
    contacts: IContactsPart[]
    socials?: Social[]
}

export function Contacts({ contacts, socials }: IContactsProps) {
    return (
        <div className={styles.main}>
            <div className={styles.part}>
                <h2>
                    Контакты
                </h2>
                <div className={styles.contacts}>
                    {contacts.map(el =>
                        <div key={el.label} className={styles.contactPart}>
                            <h3>{el.label}</h3>
                            {!el.hrefBegin
                                ? <p>{el.value}</p>
                                : <a href={el.hrefBegin + el.value}>{el.value}</a>}
                        </div>)}
                </div>
                <Socials socials={socials} />
            </div>
            <div className={styles.part}>
                <CallForm />
            </div>
        </div>
    )
}