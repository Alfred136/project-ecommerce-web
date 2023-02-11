import React from 'react'
import { HeroBanner, CategoryBanner, ProductsCarousel } from '@/components'
import { newArrivals, featureProducts } from '@/constant'

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <HeroBanner />
      <ProductsCarousel
        title='New Arrivals'
        products={newArrivals}
      />
      <ProductsCarousel
        title='Featured Products'
        products={featureProducts}
      />
      <CategoryBanner />
    </div >
  )
}

export default Home