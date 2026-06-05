import type { TileProductKeys } from "../utils/types"
import Pills from "./pills"
import ProductCard from "./productCard"

interface ProductShowcase {
    head: string
    whatPills: string[]
    whatActivePill: (pill: string) => void
    whatActiveBtn: string
    getProducts: TileProductKeys[]
}

const ProductShowcase = ({ head, whatPills, whatActivePill, whatActiveBtn, getProducts }: ProductShowcase) => {
    return (
        <div className="flex flex-col gap-4 pb-6">
            <p className="head pt-12">{head}</p>
            <Pills getPills={whatPills} getActivePill={whatActivePill} activeSt={whatActiveBtn} />
            <div className="flex lg:flex-wrap overflow-x-auto lg:overflow-x-hidden gap-4 lg:max-h-[500px]">{getProducts?.map((product: TileProductKeys) => <ProductCard key={product?.name} imageUrl={product?.imageUrl} name={product?.name} type={product?.type} quality={product?.quality} sizes={product?.sizes} pdf={product?.pdfUrl} />)}</div>
        </div>
    )
}

export default ProductShowcase