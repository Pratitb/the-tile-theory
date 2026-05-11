import { navLinks } from '../utils/nav'
import type { NavLinkKeys } from '../utils/types'

const MobNav = () => {
    return (
        <div className='w-full flex justify-between bg-white rounded-tl-lg rounded-tr-lg px-4 py-3 fixed bottom-0 left-0'>
            {navLinks?.map((link: NavLinkKeys) =>
                <div className='flex flex-col items-center'>
                    <span className='text-2xl'>{link?.icon}</span>
                    <p className='capitalize font-medium text-base'>{link?.name}</p>
                </div>)}
        </div>
    )
}

export default MobNav