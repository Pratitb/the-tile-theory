import { useMediaQuery } from 'react-responsive'
import './App.css'
import MobNav from './components/mobNav'
import Banner from './components/banner'
import { categories, homePillTabs, tileProducts } from './utils/data'
import CategoryCard from './components/categoryCard'
import type { CategoryProps, ProductCardProps, TileProductKeys } from './utils/types'
import DesNav from './components/desNav'
import Button from './components/button'
import Brand from './components/brand'
import AOS from 'aos';
import { useEffect, useMemo, useState } from "react";
import PillTab from './components/pillTab'
import ProductCard from './components/productCard'

const App = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 767px)' })

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [activeBtn, setActiveBtn] = useState('home')
  const handleActiveBtn = (btnName: string) => {
    setActiveBtn(btnName)
  }

  const [activePill, setActivePill] = useState('indoor')
  const handleActivePill = (name: string) => {
    setActivePill(name)
  }

  const [allTiles,] = useState<TileProductKeys[]>(tileProducts)

  const activePillData = useMemo(() => {
    if (activePill === 'all') return allTiles
    const filterActiveData = allTiles?.filter((tile) => tile?.type?.toLowerCase()?.includes(activePill?.toLowerCase()))
    return filterActiveData
  }, [allTiles, activePill])

  return (
    <div className='flex flex-col gap-4 container'>
      {!isDesktop && <MobNav getActiveFn={handleActiveBtn} activeSt={activeBtn} />}

      {/* brand, des nav, quote */}
      <div className='flex justify-between items-center'>
        <Brand />
        {isDesktop && <DesNav getActiveFn={handleActiveBtn} activeSt={activeBtn} />}
        <Button btnName="quote" />
      </div>

      {/* Banner */}
      <Banner />

      {/* Categories */}
      <div className='mt-12 flex flex-col gap-6'>
        <p className='head'>categories</p>
        <div className='flex overflow-x-auto gap-6'>
          {categories?.map((item: CategoryProps) => <CategoryCard key={item?.title} title={item?.title} includes={item?.includes} />)}
        </div>
      </div>

      {/* Applications */}
      <div className='mt-12 flex flex-col gap-6'>
        <p className='head'>applications</p>
        {/* pills */}
        <div className='flex gap-2 max-w-fit overflow-x-auto'>
          {homePillTabs?.map((pill: string) => <PillTab key={pill} name={pill} getActivePill={handleActivePill} activeSt={activePill} />)}
        </div>
        {/* cards */}
        <div className='flex gap-4 max-w-fit overflow-x-auto'>
          {activePillData?.map((tile: ProductCardProps) => <ProductCard key={tile?.name} imageUrl={tile?.imageUrl} name={tile?.name} type={tile?.type} sizes={tile?.sizes} quality={tile?.quality} />)}
        </div>
      </div>
    </div>
  )
}

export default App
