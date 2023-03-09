const SearchResult = ({ isLoading = true, count, keyword }) => {
  return (
    <span className='text-[18px] text-center'>
      {isLoading
        ? <>Fetching data...</>
        : <>Showing {count} results for "{keyword}"</>
      }
    </span>
  )
}

export default SearchResult