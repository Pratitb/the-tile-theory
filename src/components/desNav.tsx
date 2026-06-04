import { useTileStore } from '../store/useTileStore'
import { navLinks, tileLinks } from '../utils/data'
import type { NavProps } from '../utils/types'

const DesNav = ({ getActiveFn, activeSt }: NavProps) => {
    const { toggleTileMenu } = useTileStore()
    return (
        <div className='fixed bottom-4 left-[50%] translate-x-[-50%] sm:relative sm:left-auto sm:bottom-auto sm:translate-x-0 flex py-2 px-2 bg-lightBg rounded-full z-10'>
            {navLinks?.map((link: string) =>
                <div key={link} className='flex items-center'>
                    <p className={`capitalize text-base rounded-full px-3 py-2 cursor-pointer ${link === activeSt ? 'bg-black text-white font-bold' : ''}`} onClick={() => getActiveFn(link ?? 'home')}>{link}</p>
                </div>
            )}
            {/* tiles menu */}
            {<div className={`absolute w-full bg-lightBg border border-[#EEEEEE] bottom-[60px] sm:bottom-auto sm:top-[60px] left-0 rounded-[40px] px-4 py-4 flex flex-col gap-2 overflow-hidden ${toggleTileMenu ? 'h-[190px] opacity-100' : 'h-0 opacity-0'}`}>
                {tileLinks?.map((link: string) => <p key={link} className='whitespace-nowrap capitalize text-base rounded-full px-6 py-3 cursor-pointer bg-[#EEEEEE]'>{link}</p>)}
            </div>}
        </div>
    )
}

export default DesNav