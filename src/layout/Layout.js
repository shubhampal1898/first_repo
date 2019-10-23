import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

const Layout = () => {
  return (
    <div style={{
      width: '80%',
      margin: 'auto'
    }}>
      <header>
        <Header />
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout