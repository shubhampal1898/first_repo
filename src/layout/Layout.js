import React from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import SideNav from './SideNav/SideNav'

const Layout = () => {
  return (
    <div style={{
      width: '80%',
      margin: 'auto'
    }}>
      <header>
        <Header />
      </header>
      <nav>
        <SideNav />
      </nav>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout