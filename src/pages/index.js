import React from 'react'
import { HeroBanner, CategoryBanner } from '@/components'

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div className='max-w-[1400px] m-auto bg-yellow-100'>
        Main content
      </div>
      <CategoryBanner />
    </div>
  )
}

export default Home