
import styles from './input.module.scss'

export type IInputProps = React.InputHTMLAttributes<HTMLInputElement>

export function Input({ ...rest }: IInputProps) {
    return <input className={`${styles.main} ${rest.className}`}{...rest} />
}