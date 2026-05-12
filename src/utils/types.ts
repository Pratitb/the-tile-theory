import type { ReactNode } from "react"

export interface NavLinkKeys {
    name?: string
    icon?: ReactNode
}

export interface ButtonProps {
    trailingIcon?: ReactNode
    btnName?: string
    leadingIcon?: ReactNode
    variation?: BtnVariations
}

export type BtnVariations = 'primary'

export interface CategoryProps {
    title?: string
    includes?: string
}

export interface NavProps {
    getActiveFn: (btnName: string) => void
    activeSt?: string
}