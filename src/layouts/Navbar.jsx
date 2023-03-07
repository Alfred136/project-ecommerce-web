import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { navTabsLeading, navTabsTrailing } from '@/constant'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
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
  <div className={`relative z-[-2] w-full ${show ? 'h-[100vh] overflow-y-auto' : 'h-0 overflow-y-hidden'} bg-white ease-out duration-[250ms]`}>
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
  </div>
)

const Navbar = () => {
  const { showMenu, setShowMenu, setShowCart, totalQuantities } = useStateContext();
  const { query: { category } } = useRouter();
  const iconClass = 'w-7 h-7 cursor-pointer hover:text-blue-600';
  const trailingIconClass = `xs:ml-4 ml-1 ${iconClass}`;

  return (
    <div className='fixed top-0 z-20 w-full bg-white text-[14px] text-primary font-semibold'>
      <div className='flex items-center justify-between xs:px-6 px-3 shadow-lg'>
        <div className='flex flex-1'>
          <div className='md:flex hidden'>
            {navTabsLeading.map((navTab) => (
              <LinkItem
                key={`desktop ${navTab.id}`}
                link={navTab.link}
                title={navTab.title}
                styles={`mr-7 ${category === navTab.id ? 'font-[709]' : ''}`}
              />
            ))}
          </div>

          <div className='md:hidden' onClick={() => setShowMenu(prev => !prev)}>
            {showMenu
              ? <HiOutlineXMark className={iconClass} />
              : <HiOutlineBars3BottomLeft className={iconClass} />}
          </div>
        </div>

        <Link href='/' className='logo-text' onClick={() => setShowMenu(false)}>
          {/* TODO: lOGO, font family */}
          Flamingo
        </Link>

        <div className='flex-1 flex justify-end items-center'>
          {navTabsTrailing.map((navTab) => (
            <LinkItem
              key={`desktop ${navTab.id}`}
              link={navTab.link}
              title={navTab.title}
              styles='md:block hidden ml-7'
            />
          ))}
          <AiOutlineSearch className={trailingIconClass} onClick={() => window.alert('feature coming soon!')} />
          <div className='relative' onClick={() => setShowCart(prev => !prev)}>
            <AiOutlineShoppingCart className={trailingIconClass} />
            <span className='absolute top-[-4px] right-[-4px] w-4 h-4 rounded-full bg-blue-600 text-white text-[11px] text-center font-light'>
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