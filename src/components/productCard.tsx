import type { ProductCardProps } from '../utils/types'

const ProductCard = ({ imageUrl, name, type, sizes, quality }: ProductCardProps) => {
    return (
        <div className={`w-full min-w-[220px] max-w-[220px] rounded-lg border px-2 py-2 relative flex flex-col gap-2`}>
            <img src={imageUrl} className='rounded-lg object-cover object-center' alt="" />
            <div className='flex flex-col min-h-[150px] bg-lightBg rounded-lg px-3 py-4 font-semibold capitalize'>
                <p className='text-xl leading-6'>{name}</p>
                <p className=' text-secondaryText grow mt-1'>{type}</p>
                <div className='flex gap-2 max-w-fit overflow-x-auto mt-3'>
                    {sizes?.map((size) => <p key={size} className='border rounded-full px-2 py-1 text-secondaryText text-sm'>{size}</p>)}
                </div>
            </div>
            <p className='absolute top-5 right-5 bg-black text-white text-xs capitalize rounded-lg px-2 py-1'>{quality}</p>
        </div>
    )
}

export default ProductCard