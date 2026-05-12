import { FaLocationArrow } from 'react-icons/fa'
import type { CategoryProps } from '../utils/types'

const CategoryCard = ({ title, includes }: CategoryProps) => {
    return (
        <div className='min-w-[180px] flex flex-col gap-2 grow border border-black p-4 rounded-lg bg-white shadow-xl'>
            <p className='font-semibold text-3xl capitalize'>{title}</p>
            <p className='grow max-w-36 lg:max-w-44'>{includes}</p>
            <div className='bg-black w-fit p-3 rounded-full self-end'><FaLocationArrow color='white' size={20} /></div>
        </div>
    )
}

export default CategoryCard