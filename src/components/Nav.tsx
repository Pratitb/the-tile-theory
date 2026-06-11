import { useTileStore } from '../store/useTileStore'
import { navLinks, tileLinks } from '../utils/data'

interface NavProps {
    getActiveFn: (btnName: string) => void
    activeSt?: string
    getTileMenuAction: (link: string) => void
}

const Nav = ({ getActiveFn, activeSt, getTileMenuAction }: NavProps) => {
    const { toggleTileMenu, activeTile } = useTileStore()

    return (
        <div className='fixed bottom-4 left-[50%] translate-x-[-50%] md:relative md:left-auto md:bottom-auto md:translate-x-0 flex py-1 px-1 border-2 border-themeGold rounded-full z-10'>
            {navLinks?.map((link: string) =>
                <div key={link} className='flex items-center'>
                    <p className={`capitalize text-base rounded-full px-3 py-2 cursor-pointer ${link === activeSt ? 'bg-themeNavy text-themeGold font-bold' : 'text-themeNavy'}`} onClick={() => getActiveFn(link ?? 'home')}>{link}</p>
                </div>
            )}
            {/* tiles menu */}
            {<div className={`absolute w-full text-center bg-pageBg border-2 border-themeGold bottom-[60px] sm:bottom-auto sm:top-[60px] left-0 rounded-[40px] px-4 py-4 flex flex-col gap-2 overflow-hidden ${toggleTileMenu ? 'h-[200px] opacity-100' : 'h-0 opacity-0'}`}>
                {tileLinks?.map((link: string) => {
                    return <p key={link} onClick={() => getTileMenuAction(link)} className={`border-2 border-themeGold whitespace-nowrap capitalize text-base rounded-full px-6 py-3 cursor-pointer ${activeTile?.includes(link) ? 'bg-themeNavy text-themeGold font-bold' : 'text-themeNavy'}`}>{link}</p>
                })}

            </div>}
        </div>
    )
}

export default Nav