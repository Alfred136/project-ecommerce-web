import React, { useState } from 'react'
import Link from 'next/link'
import { navTabsLeading, navTabsTrailing } from '@/constant'
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { HiOutlineBars3BottomLeft, HiOutlineXMark } from 'react-icons/hi2'
import { Cart } from '@/components'

const LinkItem = ({ link, title, styles = '' }) => (
  <Link href={link} className={`${styles} cursor-pointer hover:underline`}>
    {title}
  </Link>
)

const MobileMenu = ({ show }) => (
  <>
    {show &&
      <div className='absolute top-[50px] z-[-1] w-full bg-white'>
        <div className='flex flex-col'>
          {navTabsLeading.map((navTab) => (
            <LinkItem
              key={`mobile ${navTab.id}`}
              link={navTab.link}
              title={navTab.title}
              styles='pl-3 py-6 border-b'
            />
          ))}

          {navTabsTrailing.map((navTab) => (
            <LinkItem
              key={`mobile ${navTab.id}`}
              link={navTab.link}
              title={navTab.title}
              styles='pl-3 py-6 border-b'
            />
          ))}
        </div>
      </div>
    }
  </>
)

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const iconClass = 'w-5 h-5 cursor-pointer hover:text-blue-600'
  const trailingIconClass = `ml-4 ${iconClass}`

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
            <span className='absolute top-[-4px] right-[-4px] w-3 h-3 rounded-full bg-blue-600 text-white text-[8px] text-center'>1</span>
          </div>
        </div>
      </div>

      <MobileMenu show={showMenu} />
      {/* move to somewhere else? */}
      <Cart show={showCart} setShow={setShowCart} />
    </div>
  )
}

export default Navbar