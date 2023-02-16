import { useProductsContext } from "../context/productsContext";
import MobileFilterPanel from "./MobileFilterPanel";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { IoSquareSharp, IoGridSharp } from "react-icons/io5";

const MobileFilterMenu = ({ title }) => {
  const { showFilterDropdown, setShowFilterDropdown } = useProductsContext();

  return (
    <div className='md:hidden flex flex-col w-full md:px-3 px-2 pb-4'>
      <p className='text-[20px] font-bold pb-3 text-center '>{title}</p>
      <div className='w-full flex justify-between py-3 border-y-[0.5px] border-gray-500'>
        <div className='flex cursor-pointer' onClick={() => setShowFilterDropdown(prev => !prev)}>
          <span>Filter/Sort</span>
          {showFilterDropdown
            ? <SlArrowUp className='w-4 h-4 ml-4' />
            : <SlArrowDown className='w-4 h-4 ml-4' />}
        </div>
        <div onClick={() => { }}>
          <IoGridSharp className='w-5 h-5 mr-2' />
        </div>
      </div>

      <div className='relative'>
        <MobileFilterPanel />
      </div>
    </div>
  )
}

export default MobileFilterMenu;