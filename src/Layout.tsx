import { useState } from 'react'
import DesNav from './components/desNav'
import Footer from './components/footer'
import Brand from './components/brand'
import Button from './components/button'
import { Outlet, useNavigate } from 'react-router-dom'
import { useTileStore } from './store/useTileStore'


const Layout = () => {
    const [activeBtn, setActiveBtn] = useState('home')
    const navigate = useNavigate()
    const { updateTileMenuVisibility, setTileMenuVisibility } = useTileStore()

    // FUNCTIONS --------------------------------------------------
    const handleActiveBtn = (btnName: string) => {
        setActiveBtn(btnName)
        if (btnName === 'tiles') updateTileMenuVisibility()
        else {
            setTileMenuVisibility(false)
            navigate(`/${btnName}`)
        }
    }
    return (
        <div>
            <main className='container'>
                {/* Brand, Desk Nav, Quote */}
                <div className='flex justify-between items-center mb-5'>
                    <Brand />
                    {<DesNav getActiveFn={handleActiveBtn} activeSt={activeBtn} />}
                    <Button btnName="quote" />
                </div>
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}

export default Layout