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
    quality?: string,
    category?: string
    imageUrl?: string
}

export interface ProductCardProps {
    imageUrl?: string,
    name?: string,
    type?: string,
    sizes?: string[],
    quality?: string
}

export interface BottomBannerProps {
    quote?: string
}