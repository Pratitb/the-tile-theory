import './App.css'
import { useEffect } from 'react'
import AOS from 'aos';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
// import Tiles from './pages/Tiles';
import Contact from './pages/Contact';
import About from './pages/About';
import Layout from './Layout';
import { useTileStore } from './store/useTileStore';
import Indoor from './pages/Indoor';
import Outdoor from './pages/Outdoor';
import Slabs from './pages/Slabs';

const App = () => {

  const { updateActivePage, updateActiveTile, activePage } = useTileStore()
  const location = useLocation()

  // effects
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const cleanPath = location.pathname.replace(/^\//, '');
    if (cleanPath?.includes('tiles/indoor')) {
      updateActivePage('tiles')
      updateActiveTile('indoor')
    }
    else if (cleanPath?.includes('tiles/outdoor')) {
      updateActivePage('tiles')
      updateActiveTile('outdoor')
    }
    else if (cleanPath?.includes('tiles/slabs')) {
      updateActivePage('tiles')
      updateActiveTile('bathroom & kitchen slabs')
    }
    else {
      updateActivePage(cleanPath === '' ? 'home' : cleanPath)
    }
  }, [location.pathname, updateActivePage, updateActiveTile, activePage])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route index path='/' element={<Home />} />
        <Route index path='/home' element={<Home />} />
        {/* <Route path='/tiles' element={<Tiles />} /> */}
        <Route path='/tiles/indoor' element={<Indoor />} />
        <Route path='/tiles/outdoor' element={<Outdoor />} />
        <Route path='/tiles/slabs' element={<Slabs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
