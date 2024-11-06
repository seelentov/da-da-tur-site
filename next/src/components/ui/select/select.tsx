'use client'

import React, { useState } from 'react';
import styles from './select.module.scss'

export interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    options: Option[];
    selectedValue: Option | null;
    onChange: (value: Option) => void;
    placeHolder?: string;
}

export const Select: React.FC<CustomSelectProps> = ({ options, selectedValue, onChange, placeHolder }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (value: Option) => {
        onChange(value);
        setIsOpen(false);
    };

    return (
        <div className={styles.main}>
            <span className={styles.label} onClick={() => setIsOpen(!isOpen)}>
                {selectedValue !== null ? selectedValue.label : placeHolder}
            </span>
            {isOpen && (
                <ul className={styles.options}>
                    {options.map((option) => (
                        <li
                            key={option.value.toString()}
                            className={styles.option}
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

