import styles from './advantages.module.scss'
import { AdvantageItem } from './item'

interface IAdvantagesProps {
    advantages?: Advantage[] | null
}

export function Advantages({ advantages }: IAdvantagesProps) {
    return (
        <div className={styles.main}>
            {advantages && advantages.map(el => <AdvantageItem key={el.id} iconUrl={el.icon_url} header={el.title} description={el.description} />)}
        </div>
    )
}