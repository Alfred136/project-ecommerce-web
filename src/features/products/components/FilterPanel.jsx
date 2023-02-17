import Link from "next/link";
import { useProductsContext } from "../context/productsContext";
import { collections, tags, sorts } from "@/constant";

const textClass = 'mb-3 text-[14px] cursor-pointer hover:underline'
const selectedTextClass = 'mb-3 text-[16px] text-secondary font-bold cursor-pointer hover:underline'

const FilterPanel = ({ category, title }) => {
  const { collection, setCollection, sortBy, setSortBy, onFilterChange, reset } = useProductsContext();
  const collectionName = collections.find((item) => item.id === collection)?.name || '';

  return (
    <div className='md:flex hidden flex-col w-[30%] pr-6'>
      <div className='flex text-[12px] font-bold mb-1'>
        <Link href='/' className='cursor-pointer hover:underline'>
          Home
        </Link>
        <span className='capitalize'>
          / {category}/ {collectionName}
        </span>
      </div>

      <span className='text-[24px] font-bold mb-3'>
        {title}
      </span>
      {collections.map((item) => (
        <span
          key={item.id}
          className={item.id === collection ? selectedTextClass : textClass}
          onClick={() => { setCollection(item.id) }}
        >
          {item.name}
        </span>
      ))}

      <div className='my-3 border-t border-gray-400' />
      <h2 className='text-[18px] font-bold mb-3'>
        Filter By
      </h2>
      {tags.map((tag) => (
        <div key={tag.id} className='flex items-center text-[14px] mb-3'>
          <input
            type='checkbox'
            name='filterTag'
            onChange={() => { onFilterChange(tag.id) }}
            className='w-[16px] h-[16px] mt-1 mr-[4px] cursor-pointer'
          />
          <span>{tag.name}</span>
        </div>
      ))}

      <div className='my-3 border-t border-gray-400' />
      <h2 className='text-[18px] font-bold mb-3'>
        Sort By
      </h2>
      {sorts.map((sort) => (
        <span
          key={sort.id}
          className={sortBy === sort ? selectedTextClass : textClass}
          onClick={() => { setSortBy(sort) }}
        >
          {sort.name}
        </span>
      ))}

      <span className={`${textClass} mt-5 text-red-600`} onClick={reset}>
        Reset
      </span>
    </div>
  )
}

export default FilterPanel;