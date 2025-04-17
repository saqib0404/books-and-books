import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto my-2'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Root