import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Ecommerce store</title>
      </Head>
      <Navbar />
      <main className='mt-[52px]'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
};