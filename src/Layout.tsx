import Footer from './components/footer'
import Brand from './components/brand'
import Button from './components/button'
import { Outlet, useNavigate } from 'react-router-dom'
import { useTileStore } from './store/useTileStore'
import Nav from './components/Nav'


const Layout = () => {
    const navigate = useNavigate()
    const { updateTileMenuVisibility, setTileMenuVisibility, updateActiveTile, activePage, updateActivePage, updateActiveForm } = useTileStore()

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

    const handleRequestQuote = () => {
        updateActiveForm('quotation')
        navigate('/contact')
    }
    return (
        <div className='bg-lightBg'>
            <main className='container'>
                {/* Brand, Desk Nav, Quote */}
                <div className='flex justify-between items-center mb-3'>
                    <Brand />
                    <Nav getActiveFn={handleActiveBtn} activeSt={activePage} getTileMenuAction={handleTileMenu} />
                    <Button btnType='button' btnName="quotation" getActionFn={handleRequestQuote} />
                </div>
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}

export default Layout