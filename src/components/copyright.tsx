
const Copyright = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className="flex flex-col items-center gap-2">
            <p className='footer_head'>copyrights</p>
            <p className='flex capitalize'>{`${currentYear}`} &copy; the tile theory</p>
        </div>
    )
}

export default Copyright