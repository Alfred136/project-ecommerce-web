import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'

export const navTabsLeading = [
  {
    id: 'men',
    title: 'Men',
    link: '/product/men',
    content: []
  },
  {
    id: 'women',
    title: 'Women',
    link: '/',
    content: []
  },
  {
    id: 'sale',
    title: 'Sale',
    link: '/',
    content: []
  },
  {
    id: 'new-arrivals',
    title: 'New Arrivals',
    link: '/',
    content: []
  }
];

export const navTabsTrailing = [
  {
    id: 'contact',
    title: 'Contact',
    link: '/contact',
    content: []
  },
  {
    id: 'stores',
    title: 'Stores',
    link: '/stores',
    content: []
  }
];

export const footerLinks = [
  {
    title: "Shop",
    links: [
      {
        name: "Men",
        link: "./products/men",
      },
      {
        name: "Women",
        link: "./products/women",
      },
      {
        name: "New Arrivals",
        link: "./products/new",
      },
      {
        name: "Sales",
        link: "./products/sales",
      }
    ],
  },
  {
    title: "Help",
    links: [
      {
        name: "Help 1 Help 1 Help 1",
        link: "https://www.google.com",
      },
      {
        name: "Help 2",
        link: "https://www.google.com",
      },
      {
        name: "Help 3",
        link: "https://www.google.com",
      },
      {
        name: "Help 4",
        link: "https://www.google.com",
      },
    ],
  },
  {
    title: "Others",
    links: [
      {
        name: "Feature",
        link: "https://www.google.com",
      },
      {
        name: "Catelog",
        link: "https://www.google.com",
      },
    ],
  },
];

export const socialMedias = [
  {
    id: "social-media-1",
    icon: <AiOutlineInstagram className='w-5 h-5' />,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: <AiOutlineFacebook className='w-5 h-5' />,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: <AiOutlineTwitter className='w-5 h-5' />,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: <AiOutlineYoutube className='w-5 h-5' />,
    link: "https://www.youtube.com/",
  },
];