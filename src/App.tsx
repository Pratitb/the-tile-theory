import { useMediaQuery } from 'react-responsive'
import './App.css'
import MobNav from './components/mobNav'
import MobHeader from './components/mobHeader'
import Banner from './components/banner'
import { categories } from './utils/data'
import CategoryCard from './components/categoryCard'
import type { CategoryProps } from './utils/types'

const App = () => {

  const isDesktop = useMediaQuery({ query: '(min-width: 767px)' })

  return (
    <div className='flex flex-col gap-4 container'>
      {!isDesktop && <MobNav />}
      <MobHeader />
      <Banner />
      <div className='mt-12 flex flex-col gap-6'>
        <p className='head'>categories</p>
        <div className='flex overflow-x-auto gap-6'>
          {categories?.map((item: CategoryProps) => <CategoryCard title={item?.title} includes={item?.includes} />)}
        </div>
      </div>
    </div>
  )
}

export default App
