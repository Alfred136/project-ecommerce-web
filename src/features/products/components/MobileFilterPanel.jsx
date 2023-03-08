import { useProductsContext } from "../context/productsContext";
import { collections, tags, sorts } from "@/constant";
import { Button } from "@/components";

const h2Class = 'font-semibold mb-3';
const textClass = 'mb-3 text-[14px] cursor-pointer hover:underline';
const selectedTextClass = 'mb-3 text-[16px] text-secondary font-semibold cursor-pointer hover:underline';
const filterGroupClass = 'flex flex-col w-[40%] xs:w-[30%]';

const MobileFilterPanel = (props) => {
  const { collection, setCollection, sortBy, setSortBy, onFilterChange, showFilterDropdown, setShowFilterDropdown, reset } = useProductsContext();

  return (
    <>
      {showFilterDropdown ?
        <div className='absolute top-[-1px] left-[-1%] z-10 w-[102%] bg-[#fefefe] rounded-b-sm shadow-[0_25px_50px_-5px_rgba(0,0,0,0.3)] ss:px-10 px-4 pt-4 pb-10'>
          <div className='flex flex-col'>
            {/* filter panel */}
            {/* <div className='flex flex-wrap xs:justify-between ss:justify-around gap-10'> */}
            <div className='flex flex-wrap justify-between gap-5'>
              <div className={filterGroupClass}>
                <h2 className={h2Class}>
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

              <div className={filterGroupClass}>
                <h2 className={h2Class}>
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

              <div className={filterGroupClass}>
                <h2 className={h2Class}>
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

            <div className='flex xs:flex-row flex-col justify-end gap-5 mt-10'>
              <Button
                title='Apply'
                onClick={() => setShowFilterDropdown(false)}
              />
              <Button
                title='Reset'
                theme='primary-outline'
                onClick={reset}
              />
            </div>
          </div>
        </div> : null
      }
    </>
  )
}

export default MobileFilterPanel;