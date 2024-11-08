
import styles from './input.module.scss'

export type IInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    isError?: boolean
}

export function Input({ isError = false, ...rest }: IInputProps) {
    return <input className={`${styles.main} ${rest.className} ${isError ? styles.error : ""}`}{...rest} />
}