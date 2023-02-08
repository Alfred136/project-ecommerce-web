import React from 'react'
import Head from 'next/head'
import { Navbar, Footer } from '../components'

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Ecommerce store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="pt-[55px]">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout