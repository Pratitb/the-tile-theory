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

const App = () => {

  const { updateActivePage } = useTileStore()
  const location = useLocation()

  // effects
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    const cleanPath = location.pathname.replace(/^\//, '');
    updateActivePage(cleanPath)
  }, [location.pathname, updateActivePage])


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route index path='/home' element={<Home />} />
        {/* <Route path='/tiles' element={<Tiles />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
