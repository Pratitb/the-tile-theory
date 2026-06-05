import Footer from './components/footer'
import Brand from './components/brand'
import Button from './components/button'
import { Outlet, useNavigate } from 'react-router-dom'
import { useTileStore } from './store/useTileStore'
import Nav from './components/Nav'


const Layout = () => {
    const navigate = useNavigate()
    const { updateTileMenuVisibility, setTileMenuVisibility, updateActiveTile, activePage, updateActivePage } = useTileStore()

    // FUNCTIONS --------------------------------------------------
    const handleActiveBtn = (btnName: string) => {
        updateActivePage(btnName)
        if (btnName === 'tiles') {
            updateTileMenuVisibility()

        }
        else {
            setTileMenuVisibility(false)
            updateActiveTile('')
            navigate(`/${btnName}`)
        }
    }

    const handleTileMenu = (link: string) => {
        updateActiveTile(link)
        setTileMenuVisibility(false)
        if (link?.includes('bathroom')) {
            navigate('/tiles/slabs')
        }
        else {
            navigate(`/tiles/${link}`)
        }
    }
    return (
        <div>
            <main className='container'>
                {/* Brand, Desk Nav, Quote */}
                <div className='flex justify-between items-center mb-5'>
                    <Brand />
                    {<Nav getActiveFn={handleActiveBtn} activeSt={activePage} getTileMenuAction={handleTileMenu} />}
                    <Button btnName="quote" />
                </div>
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}

export default Layout