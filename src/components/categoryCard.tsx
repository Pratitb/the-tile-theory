import { FaLocationArrow } from 'react-icons/fa'
import type { CategoryProps } from '../utils/types'

const CategoryCard = ({ title, includes }: CategoryProps) => {
    return (
        <div className='w-full flex items-start justify-between gap-3 grow border border-black p-4 rounded-lg bg-white shadow-xl'>
            <div>
                <p className='font-semibold text-3xl capitalize'>{title}</p>
                <p className=''>{includes}</p>
            </div>
            <div className='bg-black w-fit p-3 self-center rounded-full cursor-pointer'><FaLocationArrow color='white' size={20} /></div>
        </div>
    )
}

export default CategoryCard