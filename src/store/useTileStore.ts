import { create } from "zustand"

interface TileStoreProps {
    activePage: string
    toggleTileMenu: boolean
    updateActivePage: (page: string) => void
    updateTileMenuVisibility: () => void
    setTileMenuVisibility: (value: boolean) => void
}
export const useTileStore = create<TileStoreProps>((set) => ({
    activePage: 'home',
    toggleTileMenu: false,
    updateActivePage: (page) => set({ activePage: page }),
    updateTileMenuVisibility: () => set((state) => ({ toggleTileMenu: !state.toggleTileMenu })),
    setTileMenuVisibility: (value: boolean) => set({ toggleTileMenu: value }),
}))