const SearchResult = ({ isLoading = true, count, keyword }) => {
  return (
    <span className='text-[20px] text-center' style={{ overflowWrap: 'anywhere' }}>
      {isLoading
        ? <>Fetching data...</>
        : <>Showing {count} results for "{keyword}"</>
      }
    </span>
  )
}

export default SearchResult