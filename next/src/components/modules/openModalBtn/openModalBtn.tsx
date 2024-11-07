'use client'

import { ModalContext } from "@/components/providers/modalProvider/modalProvider";
import { Button, IButtonProps } from "@/components/ui/button/button";
import { ICallFormProps } from "@/components/ui/form/callForm";
import { ReactNode, useContext } from "react";

interface IOpenModalBtnProps extends IButtonProps, ICallFormProps {
    children: ReactNode
}

export function OpenModalBtn({ header, defaultTheme, children, ...rest }: IOpenModalBtnProps) {

    const { openCallFormModal } = useContext(ModalContext)

    return <Button onClick={() => openCallFormModal({ header, defaultTheme })} {...rest}>{children}</Button>
}