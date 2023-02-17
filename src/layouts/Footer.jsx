import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components'
import { footerLinks, socialMedias } from '@/constant'

const SignupForm = () => {
  const [inputEmail, setInputEmail] = useState('');

  const onSubmit = () => {
    window.alert('You are subscipted!');
    setInputEmail('');
  }

  return (
    <div className='flex flex-col mb-6'>
      <p className='mb-2 font-semibold'>
        Sign up to recieve latest news
      </p>
      <input
        type='text'
        value={inputEmail}
        placeholder='Email address...'
        className='text-black text-[14px] font-medium bg-gray-50 p-2 mb-3 focus:outline-none'
        onChange={(event) => setInputEmail(event.target.value)}
      />
      <Button
        title='Sign Up'
        theme='secondary-outline'
        onClick={onSubmit}
      />
    </div>
  )
}

const SocialMedias = () => (
  <div className='flex mb-8'>
    {socialMedias.map((item) => (
      <Link
        key={item.id}
        href={item.link}
        className='mr-2 cursor-pointer'
      >
        {item.icon}
      </Link>
    ))}
  </div>
)

const SiteMap = () => (
  <div className='flex-grow-[2] flex ss:justify-start justify-between md:flex-nowrap flex-wrap md:pl-[100px]'>
    {footerLinks.map((footerLink) => (
      <div key={footerLink.title} className='ss:flex-1 flex flex-col mb-6 sm:m-0 mr-6'>
        <p className='font-semibold mb-2'>{footerLink.title}</p>

        {footerLink.links.map((item) => (
          <Link
            key={`${item.name} ${item.link}`}
            className='mt-2 text-[12px] hover:underline'
            href={item.link}
          >
            {item.name}
          </Link>
        ))}
      </div>
    ))}
  </div>
)

const Footer = () => (
  <div className='w-full bg-primary text-gray-50'>
    <div className='max-w-[1400px] m-auto px-8 py-10 bg-skate-700'>
      <div className='w-full flex md:flex-row flex-col'>
        <div className='flex-1 flex flex-col'>
          <SignupForm />
          <SocialMedias />
        </div>
        <SiteMap />
      </div>
    </div>
  </div>
)

export default Footer