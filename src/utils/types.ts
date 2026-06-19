import type { ReactNode } from "react"

export interface ButtonProps {
    trailingIcon?: ReactNode
    btnName?: string
    leadingIcon?: ReactNode
    variation?: BtnVariations
    getActionFn?: () => void
    btnType: "button" | "submit" | "reset"
}

export type BtnVariations = 'primary'

export interface CategoryProps {
    title?: string
    includes?: string
    page: string
}

export interface CategoryCardProps {
    title?: string
    includes?: string
    link: string
}

export interface PillTabProps {
    name?: string
    getActivePill: (name: string) => void
    activeSt: string
}

export interface TileProductKeys {
    id?: number,
    name?: string,
    sizes?: string[],
    type?: string,
    desc?: string
    quality?: string,
    category?: string
    imageUrl?: string
    pdfUrl?: string
}

export interface ProductCardProps {
    imageUrl?: string,
    name?: string,
    type?: string,
    desc?: string
    sizes?: string[],
    quality?: string
    pdf?: string
}

export interface BottomBannerProps {
    quote?: string
}

export interface ApplicationsProps {
    head?: string
    getApplicationData?: ProductCardProps[]
}

export interface ApplicationCardProps {
    imageUrl?: string
    name?: string
    quality?: string
    type?: string
    desc?: string
}

export interface TileLinks {
    name: string
    path: string
}
export interface PillarKeys {
    name?: string
    desc?: string
    icon?: ReactNode
}

export interface Tabkeys {
    name: string
    desc: string
}

export const tabVariants = {
    primary: `rounded-full border-themeNavy`,
    secondary: `rounded-lg`,
}

export const tabContVariants = {
    primary: `gap-2`,
    secondary: `gap-1`
}