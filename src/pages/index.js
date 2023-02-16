import React from 'react';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import {
  getNewProducts,
  getFeaturedProducts,
  useGetHomeProducts,
  HeroBanner,
  CategoryBanner
} from '@/features/home';
import { ProductsCarousel, Loading } from '@/components';

const Home = () => {
  const [newQuery, featuresQuery] = useGetHomeProducts();

  return (
    <div className='overflow-hidden'>
      <HeroBanner />
      {newQuery.isLoading ? <Loading /> : null}
      {newQuery.isSuccess ?
        <ProductsCarousel
          title='New Arrivals'
          products={newQuery.data}
        /> : null
      }

      {featuresQuery.isLoading ? <Loading /> : null}
      {featuresQuery.isSuccess ?
        <ProductsCarousel
          title='Featured Products'
          products={featuresQuery.data}
        /> : null
      }
      <CategoryBanner />
    </div >
  )
}

export const getServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["getProducts", "new"], getNewProducts);
  await queryClient.prefetchQuery(["getProducts", "featured"], getFeaturedProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Home