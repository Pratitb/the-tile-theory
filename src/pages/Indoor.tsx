import { useMemo, useRef, useState } from "react"
import Banner from "../components/banner"
import { indoorBanner2, indoorPills, indoorProducts, scrollSection, tiles1, tiles3 } from "../utils/data"
import ProductShowcase from "../components/productShowcase"

const Indoor = () => {

    // STATES
    const indoorShowcase = useRef<HTMLDivElement | null>(null)
    const [activePill, setActivePill] = useState('all')

    // FUNCTIONS
    const handleActivePill = (pill: string) => {
        setActivePill(pill)
    }
    const filteredProducts = useMemo(() => {
        if (activePill == 'all') return indoorProducts
        const createFilter = indoorProducts?.filter((product) => activePill?.toLowerCase()?.includes(product?.category?.toLowerCase() ?? 'all'))
        return createFilter
    }, [activePill])

    // JSX
    return (
        <>
            <Banner categ getCategoriesScrollFn={() => scrollSection(indoorShowcase)} text1={tiles1} text2={indoorBanner2} text3={tiles3} />
            <div className="flex flex-col gap-4" ref={indoorShowcase}>
                <ProductShowcase head="indoor tiles" whatPills={indoorPills} whatActivePill={handleActivePill} whatActiveBtn={activePill} getProducts={filteredProducts} />
            </div>
        </>
    )
}

export default Indoor