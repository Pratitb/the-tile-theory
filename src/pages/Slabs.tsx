import { useMemo, useRef, useState } from "react"
import Banner from "../components/banner"
import { indoorPills, indoorProducts, scrollSection } from "../utils/data"
import ProductShowcase from "../components/ProductShowcase"

const Slabs = () => {
    const slabsShowcase = useRef<HTMLDivElement | null>(null)

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
            <Banner categ getCategoriesScrollFn={() => scrollSection(slabsShowcase)} bannerText="welcome to bathroom & kitchen slabs. find all types of budget, premium and luxurious tiles." />
            <div className="flex flex-col gap-4" ref={slabsShowcase}>
                <ProductShowcase head="bathroom & kitchen slabs" whatPills={indoorPills} whatActivePill={handleActivePill} whatActiveBtn={activePill} getProducts={filteredProducts} />
            </div>
        </>
    )
}

export default Slabs