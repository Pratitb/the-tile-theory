import { navLinks } from '../utils/data'
import type { NavLinkKeys } from '../utils/types'

const MobNav = () => {
    return (
        <div className='w-[96%] flex justify-between bg-lightBg rounded-lg px-4 py-3 fixed bottom-2 left-2'>
            {/* rounded-tl-lg rounded-tr-lg */}
            {navLinks?.map((link: NavLinkKeys) =>
                <div className='flex flex-col items-center'>
                    <span className='text-2xl'>{link?.icon}</span>
                    <p className='capitalize font-medium text-base'>{link?.name}</p>
                </div>)}
        </div>
    )
}

export default MobNav