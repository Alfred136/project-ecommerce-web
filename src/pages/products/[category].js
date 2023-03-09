import React from 'react';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { categories } from '@/constant';
import { LoadingSpinner, Error } from '@/components';
import {
  getProducts,
  useGetProducts,
  FilterPanel,
  MobileFilterMenu,
  FilteredProducts,
  useCategory,
  useFilteredProducts
} from '@/features/products'


const Products = () => {
  const { category, categoryTitle } = useCategory();
  const { data: products, isSuccess, isLoading, isError, error } = useGetProducts({ category });

  const filteredProducts = isSuccess
    ? useFilteredProducts(products)
    : []

  if (isError) return (<Error message={error.message} />)

  return (
    <div className='max-w-[1400px] m-auto sm:px-10 px-3 py-14 min-h-[100vh]'>
      <div className='w-full min-h-[50vh] flex'>
        <FilterPanel
          category={category}
          title={categoryTitle}
        />
        <div className='w-full flex flex-col'>
          <MobileFilterMenu
            category={category}
            title={categoryTitle}
          />

          {isLoading ?
            <LoadingSpinner /> : null
          }
          {isSuccess ?
            <FilteredProducts products={filteredProducts} /> : null
          }
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const paths = categories.map((category) => ({
    params: {
      category: category.id
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { category } }) => {
  const queryClient = new QueryClient();

  await queryClient.fetchQuery({
    queryKey: ["getProducts", category],
    queryFn: () => getProducts(category)
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Products