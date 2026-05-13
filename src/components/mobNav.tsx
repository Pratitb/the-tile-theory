import { navLinks } from '../utils/data'
import type { NavLinkKeys, NavProps } from '../utils/types'

const MobNav = ({ getActiveFn, activeSt }: NavProps) => {

    return (
        <div className='flex justify-between bg-lightBg border-2 rounded-full px-2 py-2 fixed bottom-2 left-[50%] translate-x-[-50%] z-10'>
            {navLinks?.map((link: NavLinkKeys) =>
                <p key={link?.name} className={`capitalize text-base rounded-full px-3 py-2 cursor-pointer ${link?.name === activeSt ? 'bg-black text-white font-bold' : ''}`} onClick={() => getActiveFn(link?.name ?? 'home')}>{link?.name}</p>
                // <div className='flex flex-col items-center'>
                //     <span className='text-lg'>{link?.icon}</span>
                // </div>
            )}
        </div>
    )
}

export default MobNav