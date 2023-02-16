import React from 'react'
import Link from 'next/link'
import { navTabsLeading, navTabsTrailing } from '@/constant'
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { HiOutlineBars3BottomLeft, HiOutlineXMark } from 'react-icons/hi2'
import { Cart } from '@/components'
import { useStateContext } from '@/context/stateContext'

const LinkItem = ({ link, title, styles = '', onClick = () => { } }) => (
  <Link
    href={link}
    className={`${styles} cursor-pointer hover:underline`}
    onClick={onClick}
  >
    {title}
  </Link>
)

const MobileMenu = ({ show, setShow }) => (
  <>
    {show ?
      <div className='absolute top-[50px] z-[-1] w-full min-h-[100vh] bg-white'>
        <div className='flex flex-col'>
          {navTabsLeading.map((navTab) => (
            <LinkItem
              key={`mobile ${navTab.id}`}
              link={navTab.link}
              title={navTab.title}
              styles='pl-3 py-6 border-b'
              onClick={() => setShow(false)}
            />
          ))}

          {navTabsTrailing.map((navTab) => (
            <LinkItem
              key={`mobile ${navTab.id}`}
              link={navTab.link}
              title={navTab.title}
              styles='pl-3 py-6 border-b'
              onClick={() => setShow(false)}
            />
          ))}
        </div>
      </div> : null
    }
  </>
)

const Navbar = () => {
  const { showMenu, setShowMenu, setShowCart, totalQuantities } = useStateContext();
  const iconClass = 'w-5 h-5 cursor-pointer hover:text-blue-600';
  const trailingIconClass = `ml-4 ${iconClass}`;

  return (
    <div className='fixed top-0 z-10 w-full bg-white text-[12px] font-semibold'>
      <div className='flex items-center justify-between px-6 py-2 shadow-lg'>
        <div className='flex flex-1'>
          <div className='md:flex hidden'>
            {navTabsLeading.map((navTab) => (
              <LinkItem
                key={`desktop ${navTab.id}`}
                link={navTab.link}
                title={navTab.title}
                styles='mr-5'
              />
            ))}
          </div>

          <div className='md:hidden' onClick={() => setShowMenu(prev => !prev)}>
            {showMenu
              ? <HiOutlineXMark className={iconClass} />
              : <HiOutlineBars3BottomLeft className={iconClass} />}
          </div>
        </div>

        <Link href='/' className='text-[24px] font-semibold'>
          {/* TODO: lOGO, font family */}
          Flamingo
        </Link>

        <div className='flex-1 flex justify-end items-center'>
          {navTabsTrailing.map((navTab) => (
            <LinkItem
              key={`desktop ${navTab.id}`}
              link={navTab.link}
              title={navTab.title}
              styles='md:block hidden ml-5'
            />
          ))}
          <AiOutlineSearch className={trailingIconClass} />
          <div className='relative' onClick={() => setShowCart(prev => !prev)}>
            <AiOutlineShoppingCart className={trailingIconClass} />
            <span className='absolute top-[-4px] right-[-4px] w-3 h-3 rounded-full bg-blue-600 text-white text-[8px] text-center'>
              {totalQuantities}
            </span>
          </div>
        </div>
      </div>

      <MobileMenu
        show={showMenu}
        setShow={setShowMenu}
      />
      <Cart />
    </div>
  )
}

export default Navbar;