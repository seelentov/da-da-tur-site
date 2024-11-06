import styles from './menu.module.scss'
import Link from 'next/link';


interface IMenuProps {
    items?: Menu[] | null
}

export function Menu({ items }: IMenuProps) {

    return (
        <nav className={styles.main}>
            <ul className={styles.list}>
                {items && items.map(el =>
                    <li key={el.id} className={styles.item}><Link href={el.link}>{el.name}</Link>
                        {el.childrens.length > 0 && <ul className={styles.subMenu}>
                            {el.childrens.map(subEl => <li key={subEl.id} className={styles.subItem}><Link href={subEl.link}>{subEl.name}</Link></li>)}
                            {el.childrens.map(subEl => <li key={subEl.id} className={styles.subItem}><Link href={subEl.link}>{subEl.name}</Link></li>)}
                        </ul>}
                    </li>
                )}
            </ul>
        </nav>
    )
}