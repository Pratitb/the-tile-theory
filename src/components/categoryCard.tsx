import { FaLocationArrow } from 'react-icons/fa'
import type { CategoryProps } from '../utils/types'

const CategoryCard = ({ title, includes }: CategoryProps) => {
    return (
        <div className='w-full flex items-center justify-between gap-6 grow border border-black px-4 py-4 rounded-lg bg-white shadow-xl'>
            <div>
                <p className='font-semibold text-3xl capitalize'>{title}</p>
                <p className=''>{includes}</p>
            </div>
            <div className='bg-black w-fit p-3 rounded-full'><FaLocationArrow color='white' size={20} /></div>
        </div>
    )
}

export default CategoryCard