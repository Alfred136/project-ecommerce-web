import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineYoutube, AiFillTags } from 'react-icons/ai'

export const navTabsLeading = [
  {
    id: 'men',
    title: 'Men',
    link: '/products/men',
  },
  {
    id: 'women',
    title: 'Women',
    link: '/products/women',
  },
  {
    id: 'sale',
    title: 'Sale',
    link: '/products/sale',
  },
  {
    id: 'new',
    title: 'New Arrivals',
    link: '/products/new',
  }
];

export const navTabsTrailing = [
  {
    id: 'contact',
    title: 'Contact',
    link: '/contact',
  },
  {
    id: 'stores',
    title: 'Stores',
    link: '/stores',
  }
];

//Products
export const allSizes = [
  {
    id: 'men',
    options: [28, 29, 30, 31, 32, 33, 34, 35]
  },
  {
    id: 'women',
    options: [24, 25, 26, 27, 28, 29, 30, 31]
  },
];
//use this
export const categories = [
  {
    id: 'men',
    name: "Men's collection"
  },
  {
    id: 'women',
    name: "Women's collection"
  },
  {
    id: 'new',
    name: 'New Arrivals'
  },
  {
    id: 'sale',
    name: 'Products on Sale'
  },
]

export const collections = [
  {
    id: 'all',
    name: 'All'
  },
  {
    id: 'collection-1',
    name: 'Comfortable Jeans'
  },
  {
    id: 'collection-2',
    name: 'Looks badass'
  },
  {
    id: 'collection-3',
    name: 'Too Hot to Handle'
  },
]

export const tags = [
  {
    id: 'tag-1',
    name: 'Slim'
  },
  {
    id: 'tag-2',
    name: 'Regular'
  },
  {
    id: 'tag-3',
    name: 'Straight'
  },
  {
    id: 'tag-4',
    name: 'Loose'
  },
]

export const sorts = [
  {
    id: 'price-asc',
    name: 'Price, low to high',
    sortFn: (a, b) => a.price - b.price
  },
  {
    id: 'price-desc',
    name: 'Price, high to low',
    sortFn: (a, b) => b.price - a.price
  },
]

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
        name: "Sales",
        link: "./products/sales",
      },
      {
        name: "New Arrivals",
        link: "./products/new",
      },
    ],
  },
  {
    title: "Help",
    links: [
      {
        name: "Help 1",
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