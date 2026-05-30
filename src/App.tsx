import { useMediaQuery } from 'react-responsive'
import './App.css'
import MobNav from './components/mobNav'
import Banner from './components/banner'
import { categories, homePillTabs, quote2Text, quoteText, tileProducts } from './utils/data'
import CategoryCard from './components/categoryCard'
import type { CategoryProps, ProductCardProps, TileProductKeys } from './utils/types'
import DesNav from './components/desNav'
import Button from './components/button'
import Brand from './components/brand'
import AOS from 'aos';
import { useEffect, useMemo, useRef, useState } from "react";
import PillTab from './components/pillTab'
import ProductCard from './components/productCard'
import BottomBanner from './components/bottomBanner'
import Footer from './components/footer'

const App = () => {
  const [activeBtn, setActiveBtn] = useState('home')
  const [activePill, setActivePill] = useState('all')
  const [allTiles,] = useState<TileProductKeys[]>(tileProducts)
  const isDesktop = useMediaQuery({ query: '(min-width: 767px)' })
  const homeCategories = useRef<HTMLDivElement | null>(null)
  const homeApplications = useRef<HTMLDivElement | null>(null)

  const handleCategoriesBtn = () => {
    if (homeCategories && homeCategories.current) homeCategories?.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const handleApplicationsBtn = () => {
    if (homeApplications && homeApplications.current) homeApplications?.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const handleActiveBtn = (btnName: string) => {
    setActiveBtn(btnName)
  }
  const handleActivePill = (name: string) => {
    setActivePill(name)
  }
  const activePillData = useMemo(() => {
    if (activePill === 'all') return allTiles
    const filterActiveData = allTiles?.filter((tile) => tile?.type?.toLowerCase()?.includes(activePill?.toLowerCase()))
    return filterActiveData
  }, [allTiles, activePill])
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className='flex flex-col gap-4 container'>
      {!isDesktop && <MobNav getActiveFn={handleActiveBtn} activeSt={activeBtn} />}

      {/* Brand, Desk Nav, Quote */}
      <div className='flex justify-between items-center'>
        <Brand />
        {isDesktop && <DesNav getActiveFn={handleActiveBtn} activeSt={activeBtn} />}
        <Button btnName="quote" />
      </div>

      {/* Banner */}
      <Banner getCategoriesScrollFn={handleCategoriesBtn} getApplicationScrollFn={handleApplicationsBtn} />

      {/* Categories */}
      <div className='pt-12 flex flex-col gap-6' ref={homeCategories}>
        <p className='head'>categories</p>
        <div className='flex overflow-x-auto gap-6'>
          {categories?.map((item: CategoryProps) => <CategoryCard key={item?.title} title={item?.title} includes={item?.includes} />)}
        </div>
      </div>

      {/* Applications */}
      <div className='pt-12 flex flex-col gap-6' ref={homeApplications}>
        <p className='head'>applications</p>
        {/* pills */}
        <div className='flex gap-2 max-w-fit overflow-x-auto'>
          {homePillTabs?.map((pill: string) => <PillTab key={pill} name={pill} getActivePill={handleActivePill} activeSt={activePill} />)}
        </div>
        {/* cards */}
        <div className='flex gap-4 max-w-fit overflow-x-auto mb-8'>
          {activePillData?.map((tile: ProductCardProps) => <ProductCard key={tile?.name} imageUrl={tile?.imageUrl} name={tile?.name} type={tile?.type} sizes={tile?.sizes} quality={tile?.quality} />)}
        </div>
      </div>
      {/* Bottom Banner */}
      <div className='flex flex-col gap-4 md:flex-row md:justify-center'>
        <BottomBanner quote={quoteText} />
        <BottomBanner quote={quote2Text} />
      </div>
      <Footer />
    </div>
  )
}

export default App
