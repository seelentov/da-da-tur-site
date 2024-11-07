'use client'
import { Dispatch, SetStateAction } from 'react';
import styles from './checkbox.module.scss'

type ICheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    isChecked: boolean
    setIsChecked: Dispatch<SetStateAction<boolean>>

}

export function Checkbox({ label, isChecked, setIsChecked, ...props }: ICheckboxProps) {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };


    return (
        <label className={styles.checkbox}>
            <input
                {...props}
                type="checkbox"
                checked={isChecked}
                onChange={handleChange}
            />
            {isChecked && <span
                className={styles.checkmark}
            ></span>}
            <span className={styles.label}>{label}</span>
        </label>
    );
}