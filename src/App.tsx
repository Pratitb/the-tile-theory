import { useMediaQuery } from 'react-responsive'
import './App.css'
import MobNav from './components/mobNav'
import Banner from './components/banner'
import { categories } from './utils/data'
import CategoryCard from './components/categoryCard'
import type { CategoryProps } from './utils/types'
import DesNav from './components/desNav'
import Button from './components/button'
import Brand from './components/brand'
import AOS from 'aos';
import { useEffect, useState } from "react";


const App = () => {

  const isDesktop = useMediaQuery({ query: '(min-width: 767px)' })

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [activeBtn, setActiveBtn] = useState('home')
  const handleActiveBtn = (btnName: string) => {
    setActiveBtn(btnName)
  }

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
          {categories?.map((item: CategoryProps) => <CategoryCard title={item?.title} includes={item?.includes} />)}
        </div>
      </div>

      {/* Applications */}
      <div className='mt-12 flex flex-col gap-6'>
        <p className='head'>applications</p>

      </div>
    </div>
  )
}

export default App
