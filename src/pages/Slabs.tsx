import { useMemo, useRef, useState } from "react"
import Banner from "../components/banner"
import { scrollSection, slabPills, slabProducts, slabs2, tiles1, tiles3 } from "../utils/data"
import ProductShowcase from "../components/productShowcase"

const Slabs = () => {
    const slabsShowcase = useRef<HTMLDivElement | null>(null)

    const [activePill, setActivePill] = useState('all')

    const updatedSlabPills = ['all', ...slabPills]

    const handleActivePill = (pill: string) => {
        setActivePill(pill)
    }
    const filteredProducts = useMemo(() => {
        if (activePill == 'all') return slabProducts
        const createFilter = slabProducts?.filter((product) => product?.category?.toLowerCase() == activePill?.toLowerCase())
        return createFilter
    }, [activePill])
    return (
        <>
            <Banner categ getCategoriesScrollFn={() => scrollSection(slabsShowcase)} text1={tiles1} text2={slabs2} text3={tiles3} />
            <div className="flex flex-col gap-4" ref={slabsShowcase}>
                <ProductShowcase head="kitchen & bathroom slabs" whatPills={updatedSlabPills} whatActivePill={handleActivePill} whatActiveBtn={activePill} getProducts={filteredProducts} />
            </div>
        </>
    )
}

export default Slabs