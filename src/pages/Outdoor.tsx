import { useMemo, useRef, useState } from "react"
import Banner from "../components/banner"
import { outdoorBanner2, outdoorPills, outdoorProducts, scrollSection, tiles1, tiles3 } from "../utils/data"
import ProductShowcase from "../components/productShowcase"

const Outdoor = () => {
    const outdoorShowcase = useRef<HTMLDivElement | null>(null)
    const [activePill, setActivePill] = useState('all')

    const updateOutdoorPills = ['all', ...outdoorPills]

    const handleActivePill = (pill: string) => {
        setActivePill(pill)
    }
    const filteredProducts = useMemo(() => {
        if (activePill == 'all') return outdoorProducts
        const createFilter = outdoorProducts?.filter((product) => product?.category?.toLowerCase() == activePill?.toLowerCase())
        return createFilter
    }, [activePill])
    return (
        <>
            <Banner categ getCategoriesScrollFn={() => scrollSection(outdoorShowcase)} text1={tiles1} text2={outdoorBanner2} text3={tiles3} />
            <div className="flex flex-col gap-4" ref={outdoorShowcase}>
                <ProductShowcase head="outdoor tiles" whatPills={updateOutdoorPills} whatActivePill={handleActivePill} whatActiveBtn={activePill} getProducts={filteredProducts} />
            </div>
        </>
    )
}

export default Outdoor