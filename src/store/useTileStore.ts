import { create } from "zustand"

interface TileStoreProps {
    activePage: string
    toggleTileMenu: boolean
    updateActivePage: (page: string) => void
    updateTileMenuVisibility: () => void
    setTileMenuVisibility: (value: boolean) => void
    activeTile: string
    updateActiveTile: (tile: string) => void
}
export const useTileStore = create<TileStoreProps>((set) => ({
    activePage: 'home',
    toggleTileMenu: false,
    activeTile: '',
    updateActivePage: (page) => set({ activePage: page }),
    updateTileMenuVisibility: () => set((state) => ({ toggleTileMenu: !state.toggleTileMenu })),
    setTileMenuVisibility: (value: boolean) => set({ toggleTileMenu: value }),
    updateActiveTile: (tile: string) => set({ activeTile: tile }),
}))