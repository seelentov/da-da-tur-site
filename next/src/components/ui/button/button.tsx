
import styles from './button.module.scss'

export type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ ...rest }: IButtonProps) {
    return <button className={`${styles.main} ${rest.className}`}{...rest}>{rest.children}</button>
}