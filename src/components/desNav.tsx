import { navLinks } from '../utils/data'
import type { NavLinkKeys, NavProps } from '../utils/types'

const DesNav = ({ getActiveFn, activeSt }: NavProps) => {
    return (
        <div className='flex gap-2 py-2 px-2 bg-lightBg rounded-full'>
            {navLinks?.map((link: NavLinkKeys) =>
                <div className='flex items-center gap-1'>
                    <p className={`capitalize text-sm rounded-full px-3 py-2 cursor-pointer ${link?.name === activeSt ? 'bg-black text-white font-bold' : ''}`} onClick={() => getActiveFn(link?.name ?? 'home')}>{link?.name}</p>
                </div>
            )}
        </div>
    )
}

export default DesNav