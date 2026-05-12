import type { ProductCardProps } from '../utils/types'

const ProductCard = ({ imageUrl, name, type, sizes, quality }: ProductCardProps) => {
    const cardWidth = '220px'
    return (
        <div className={`w-full min-w-[${cardWidth}] max-w-[${cardWidth}] rounded-lg border px-2 py-2 relative flex flex-col gap-2`}>
            <img src={imageUrl} className='rounded-lg object-cover object-center' alt="" />
            <div className='flex flex-col min-h-[140px] bg-lightBg rounded-lg px-3 py-4 font-semibold capitalize'>
                <p className='text-lg leading-6'>{name}</p>
                <p className='text-sm text-secondaryText grow'>{type}</p>
                <div className='flex gap-2 max-w-fit overflow-x-auto mt-3'>
                    {sizes?.map((size) => <p key={size} className='border rounded-full px-2 py-1 text-secondaryText text-xs'>{size}</p>)}
                </div>
            </div>
            <p className='absolute top-5 right-5 bg-black text-white text-xs capitalize rounded-lg px-2 py-1'>{quality}</p>
        </div>
    )
}

export default ProductCard