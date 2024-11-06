
import styles from './textarea.module.scss'

export type ITextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea({ ...rest }: ITextareaProps) {
    return <textarea className={`${styles.main} ${rest.className}`}{...rest} />
}