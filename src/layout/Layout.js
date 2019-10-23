import React from 'react'
import Header from './Header/Header'

const Layout = () => {
  return (
    <div style={{
      width: '80%',
      margin: 'auto'
    }}>
      <header>
        <Header />
      </header>
    </div>
  )
}

export default Layout