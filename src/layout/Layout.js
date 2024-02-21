import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import {Outlet} from 'react-router-dom'

const Layout = ({children}) => {
    console.log('this is Layout ')
  return (
    <div>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout
