import { create } from "zustand"

interface TileStoreProps {
    activePage: string
    updateActivePage: (page: string) => void

    toggleTileMenu: boolean
    updateTileMenuVisibility: () => void
    setTileMenuVisibility: (value: boolean) => void

    activeTile: string
    updateActiveTile: (tile: string) => void

    activeForm: string
    updateActiveForm: (formName: string) => void

    formTileLocation?: string
    updateFormTileLocation: (value: string) => void

    formTileType: string
    updateFormTileType: (value: string) => void

    formTileThick: string
    updateFormTileThick: (value: string) => void

    queryForm?: { fullName: string, email: string, contact: number, message: string }
    quotation?: { fullName: string, email: string, contact: number, type: string, length: number, message: string }
}
export const useTileStore = create<TileStoreProps>((set) => ({
    activePage: 'home',
    toggleTileMenu: false,
    activeTile: '',
    activeForm: 'query',
    formTileLocation: 'indoor',
    formTileType: 'carving',
    formTileThick: '9mm',
    updateActivePage: (page) => set({ activePage: page }),
    updateTileMenuVisibility: () => set((state) => ({ toggleTileMenu: !state.toggleTileMenu })),
    setTileMenuVisibility: (value: boolean) => set({ toggleTileMenu: value }),
    updateActiveTile: (tile: string) => set({ activeTile: tile }),
    updateActiveForm: (formName: string) => set({ activeForm: formName }),
    updateFormTileLocation: (value: string) => set({ formTileLocation: value }),
    updateFormTileType: (value: string) => set({ formTileType: value }),
    updateFormTileThick: (value: string) => set({ formTileThick: value }),
}))