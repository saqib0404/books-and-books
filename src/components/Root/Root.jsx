import React, { Suspense } from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import ScrollToTop from '../../Utilities/ScroolToTop'

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto mt-2'>
            <ScrollToTop />
            <NavBar />
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
            <Footer />
        </div>
    )
}

export default Root