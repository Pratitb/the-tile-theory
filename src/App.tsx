import { useMediaQuery } from 'react-responsive'
import './App.css'
import MobNav from './components/mobNav'
import Banner from './components/banner'
import { categories, homePillTabs, quote2Text, quoteText, tileProducts } from './utils/data'
import CategoryCard from './components/categoryCard'
import type { CategoryProps, TileProductKeys } from './utils/types'
import DesNav from './components/desNav'
import Button from './components/button'
import Brand from './components/brand'
import AOS from 'aos';
import { useEffect, useRef, useState } from "react";
import BottomBanner from './components/bottomBanner'
import Footer from './components/footer'
import Pills from './components/pills'
import Applications from './components/applications'

const App = () => {
  const [activeBtn, setActiveBtn] = useState('home')
  const [activePill, setActivePill] = useState('indoor')
  const [allTiles,] = useState<TileProductKeys[]>(tileProducts)
  const isDesktop = useMediaQuery({ query: '(min-width: 767px)' })
  const homeCategories = useRef<HTMLDivElement | null>(null)
  const homeApplications = useRef<HTMLDivElement | null>(null)
  const indoorApps = useRef<HTMLDivElement | null>(null)
  const outdoorApps = useRef<HTMLDivElement | null>(null)
  const slabApps = useRef<HTMLDivElement | null>(null)

  const indoorApplications = allTiles?.filter(tile => tile?.type === 'indoor')
  const outdoorApplications = allTiles?.filter(tile => tile?.type === 'outdoor')
  const slabApplications = allTiles?.filter(tile => tile?.type === 'slabs')

  // functions
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
    showApps(name)
  }
  const showApps = (name: string) => {
    if (name == 'indoor' && indoorApps.current) indoorApps.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    else if (name == 'outdoor' && outdoorApps.current) outdoorApps.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    if (name?.includes('kitchen') && slabApps.current) slabApps.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  // const activePillData = useMemo(() => {
  //   if (activePill === 'all') return allTiles
  //   const filterActiveData = allTiles?.filter((tile) => tile?.type?.toLowerCase()?.includes(activePill?.toLowerCase()))
  //   return filterActiveData
  // }, [allTiles, activePill])

  // effects
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
      <div className='pt-12 md:pt-12 flex flex-col gap-6' ref={homeApplications}>
        <p className='head'>applications</p>
        {/* pills */}
        <Pills getPills={homePillTabs} getActivePill={handleActivePill} activeSt={activePill} />
        {/* cards */}
        <div className='py-2 max-h-[360px] md:max-h-[400px] lg:max-h-[440px] xl:max-h-[500px] overflow-y-auto'>
          {/* <Applications head='all' getApplicationData={} /> */}
          <div ref={indoorApps}><Applications head='indoor' getApplicationData={indoorApplications} /></div>
          <div ref={outdoorApps}><Applications head='outdoor' getApplicationData={outdoorApplications} /></div>
          <div ref={slabApps}><Applications head='bathroom & kitchen' getApplicationData={slabApplications} /></div>
        </div>
      </div>
      {/* Bottom Banner */}
      <div className='flex gap-4 md:flex-row md:justify-center'>
        <BottomBanner quote={quoteText} />
        <BottomBanner quote={quote2Text} />
      </div>
      <Footer />
    </div>
  )
}

export default App
