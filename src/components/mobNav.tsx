import { useState } from 'react'
import { navLinks } from '../utils/data'
import type { NavLinkKeys } from '../utils/types'

const MobNav = () => {
    const [activeBtn, setActiveBtn] = useState('home')
    const handleActiveBtn = (btnName: string) => {
        setActiveBtn(btnName)
    }
    return (
        <div className='flex justify-between bg-lightBg border-2 rounded-full px-2 py-2 fixed bottom-2 left-[50%] translate-x-[-50%]'>
            {navLinks?.map((link: NavLinkKeys) =>
                <p className={`capitalize font-medium text-base rounded-full px-3 py-2 cursor-pointer ${link?.name === activeBtn ? 'bg-black text-white' : ''}`} onClick={() => handleActiveBtn(link?.name ?? 'home')}>{link?.name}</p>
                // <div className='flex flex-col items-center'>
                //     <span className='text-lg'>{link?.icon}</span>
                // </div>
            )}
        </div>
    )
}

export default MobNav