import React from 'react';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import {
  getNewProducts,
  getFeaturedProducts,
  useGetHomeProducts,
  HeroBanner,
  Stories
} from '@/features/home';
import { ProductsCarousel, LoadingSpinner } from '@/components';


const Home = () => {
  const [newQuery, featuresQuery] = useGetHomeProducts();

  return (
    <div className='overflow-hidden'>
      <HeroBanner />
      {newQuery.isLoading ? <LoadingSpinner /> : null}
      {newQuery.isSuccess ?
        <ProductsCarousel
          title='New Arrivals'
          products={newQuery.data}
        /> : null
      }

      {featuresQuery.isLoading ? <LoadingSpinner /> : null}
      {featuresQuery.isSuccess ?
        <ProductsCarousel
          title='Featured Products'
          products={featuresQuery.data}
        /> : null
      }
      <Stories />
    </div >
  )
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.fetchQuery(["getProducts", "new"], getNewProducts);
  await queryClient.fetchQuery(["getProducts", "featured"], getFeaturedProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Home