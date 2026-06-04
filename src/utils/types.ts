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
}

export interface NavProps {
    getActiveFn: (btnName: string) => void
    activeSt?: string
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
}

export interface ProductCardProps {
    imageUrl?: string,
    name?: string,
    type?: string,
    desc?: string
    sizes?: string[],
    quality?: string
}

export interface BottomBannerProps {
    quote?: string
}

export interface BannerProps {
    bannerText?: string
    getCategoriesScrollFn?: () => void
    getApplicationScrollFn?: () => void
}

export interface PillsProps {
    getPills?: string[]
    getActivePill?: (name: string) => void
    activeSt?: string
    name?: string
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