import { useState } from 'react';
import { LoadingSpinner, Error } from '@/components';
import {
  useSearchProducts,
  SearchResult,
  Searchbar,
  SearchProducts
} from '@/features/search';


const Search = () => {
  const [search, setSearch] = useState('');
  const { data: searchProducts, isSuccess, isLoading, isError, error } = useSearchProducts({ keyword: search });

  const handleSubmit = (value) => {
    setSearch(value)
  }

  if (isError) return (<Error message={error.message} />)

  return (
    <div className='max-w-[1300px] m-auto sm:px-10 px-3 py-14 min-h-[100vh]'>
      <div className='flex flex-col gap-10 items-center w-full'>
        <SearchResult
          isLoading={isLoading}
          count={searchProducts?.length}
          keyword={search}
        />
        <Searchbar handleSubmit={handleSubmit} />

        {isLoading ?
          <LoadingSpinner /> : null
        }
        {isSuccess ?
          <SearchProducts products={searchProducts} /> : null
        }
      </div>
    </div>
  )
}

export default Search