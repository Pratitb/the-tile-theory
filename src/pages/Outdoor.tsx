import { useMemo, useRef, useState } from "react"
import Banner from "../components/banner"
import { indoorPills, indoorProducts, outdoorBanner2, scrollSection, tiles1, tiles3 } from "../utils/data"
import ProductShowcase from "../components/productShowcase"

const Outdoor = () => {
    const outdoorShowcase = useRef<HTMLDivElement | null>(null)
    const [activePill, setActivePill] = useState('glossy')
    const handleActivePill = (pill: string) => {
        setActivePill(pill)
    }
    const filteredProducts = useMemo(() => {
        if (activePill == 'all') return indoorProducts
        const createFilter = indoorProducts?.filter((product) => product?.category?.toLowerCase() == activePill?.toLowerCase())
        return createFilter
    }, [activePill])
    return (
        <>
            <Banner categ getCategoriesScrollFn={() => scrollSection(outdoorShowcase)} text1={tiles1} text2={outdoorBanner2} text3={tiles3} />
            <div className="flex flex-col gap-4" ref={outdoorShowcase}>
                <ProductShowcase head="outdoor tiles" whatPills={indoorPills} whatActivePill={handleActivePill} whatActiveBtn={activePill} getProducts={filteredProducts} />
            </div>
        </>
    )
}

export default Outdoor