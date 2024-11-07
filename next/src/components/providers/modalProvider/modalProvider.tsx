'use client'

import React, { createContext, ReactNode, useState } from "react";
import styles from './modalProvider.module.scss'
import { CallForm, ICallFormProps } from "@/components/ui/form/callForm";

interface ModalContext {
    openCallFormModal: (props: ICallFormProps) => void
    close: () => void
}

export const ModalContext = createContext<ModalContext>({
    openCallFormModal: () => { },
    close: () => { }
});

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setOpen] = useState<boolean>(false)
    const [node, setNode] = useState<ReactNode | null>(null)

    const close = () => {
        setOpen(false)
        setNode(null)
    }

    const openCallFormModal = (props: ICallFormProps) => {
        setNode(<CallForm {...props} />)
        setOpen(true)
    }

    const handleWrapperClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            close();
        }
    };

    return (
        <ModalContext.Provider
            value={{
                openCallFormModal,
                close
            }}
        >
            {isOpen &&
                <div className={`${styles.wrapper} ${isOpen ? styles.wrapperIsOpen : ""}`} onClick={handleWrapperClick}>
                    <div className={styles.modal}>
                        {node}
                    </div>
                </div>}
            {children}
        </ModalContext.Provider>
    );
};

