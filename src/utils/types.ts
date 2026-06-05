import type { ReactNode } from "react"

export interface ButtonProps {
    trailingIcon?: ReactNode
    btnName?: string
    leadingIcon?: ReactNode
    variation?: BtnVariations
    getActionFn?: () => void
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