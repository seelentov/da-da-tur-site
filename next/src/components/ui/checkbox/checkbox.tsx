import { Dispatch, SetStateAction } from 'react';
import styles from './checkbox.module.scss'

type ICheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    color?: string;
    isChecked?: boolean
    setIsChecked?: Dispatch<SetStateAction<boolean>>

}

export function Checkbox({ label, color, isChecked = false, setIsChecked, ...props }: ICheckboxProps) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (setIsChecked) {
            setIsChecked(event.target.checked)
        };
    };

    return (
        <label className={styles.checkbox}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
                {...props}
            />
            <span
                className={styles.checkmark}
                style={{ backgroundColor: color || '#4CAF50' }}
            ></span>
            <span className={styles.label}>{label}</span>
        </label>
    );
}