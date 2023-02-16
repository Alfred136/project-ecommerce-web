import { useProductsContext } from "../context/productsContext";
import { collections, tags, sorts } from "@/constant";
import { HiOutlineXMark } from "react-icons/hi2";

const textClass = 'mb-3 text-[14px] cursor-pointer hover:underline'
const selectedTextClass = 'mb-3 text-[15px] text-blue-800 font-semibold cursor-pointer hover:underline'


const MobileFilterPanel = (props) => {
  const { collection, setCollection, sortBy, setSortBy, onFilterChange, showFilterDropdown, setShowFilterDropdown } = useProductsContext();

  return (
    <>
      {showFilterDropdown ?
        <div className='absolute top-0 z-20 w-full bg-gray-100'>
          <div className='flex flex-col'>
            <div className='flex justify-around'>
              <span>Filter</span>
              <HiOutlineXMark className='w-4 h-4 cursor-pointer hove:text-blue-600' onClick={() => { setShowFilterDropdown(false) }} />
            </div>
            {/* filter panel */}
            <div className='flex justify-between gap-4'>
              <div className='flex flex-col'>
                <h2 className='text-[20px] font-bold mb-3'>
                  Collections
                </h2>
                {collections.map((item) => (
                  <span
                    key={item.id}
                    className={item.id === collection ? selectedTextClass : textClass}
                    onClick={() => { setCollection(item.id) }}
                  >
                    {item.name}
                  </span>
                ))}
              </div>

              <div className='flex flex-col'>
                <h2 className='text-[18px] font-bold mb-3'>
                  Filter By
                </h2>
                {tags.map((tag) => (
                  <div key={tag.id} className='flex items-center text-[14px] mb-3'>
                    <input
                      type='checkbox'
                      name='filterTag'
                      onChange={() => { onFilterChange(tag.id) }}
                      className='w-[16px] h-[16px] mt-1 mr-[4px]'
                    />
                    <span>{tag.name}</span>
                  </div>
                ))}
              </div>

              <div className='flex flex-col'>
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
              </div>
            </div>
          </div>
        </div> : null
      }
    </>
  )
}

export default MobileFilterPanel;