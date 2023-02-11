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
    id: 'new-arrivals',
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

export const newArrivals = [
  {
    id: 'p1',
    name: 'p1 ppppp1 ppppp1ppppp1 ppppp1',
    description: 'desc1, desc1 desc1desc1desc1 desc1',
    price: 140
  },
  {
    id: 'p2',
    name: 'p2',
    description: 'desc1, desc1',
    price: 700
  },
  {
    id: 'p3',
    name: 'p3',
    description: 'desc1, desc1',
    price: 70
  },
  {
    id: 'p4',
    name: 'p4',
    description: 'desc1, desc1',
    price: 70
  },
  {
    id: 'p5',
    name: 'p5',
    description: 'desc1, desc1',
    price: 70
  },
  {
    id: 'p6',
    name: 'p1',
    description: 'desc1, desc1',
    price: 70
  },
  {
    id: 'p7',
    name: 'p1',
    description: 'desc1, desc1',
    price: 70
  },
  {
    id: 'p8',
    name: 'p1',
    description: 'desc1, desc1',
    price: 70
  },
  {
    id: 'p9',
    name: 'p1',
    description: 'desc1, desc1',
    price: 70
  },
  {
    id: 'p10',
    name: 'p1',
    description: 'desc1, desc1',
    price: 70
  },
]

export const featureProducts = [
  {
    id: 'f1',
    name: 'f1',
    description: 'desc1, desc1',
    price: 70
  },
  {
    id: 'f2',
    name: 'f2',
    description: 'desc1, desc1',
    price: 70
  },
  {
    id: 'f3',
    name: 'f3',
    description: 'desc1, desc1',
    price: 70
  },
  {
    id: 'f4',
    name: 'f4',
    description: 'desc1, desc1',
    price: 70
  },
  {
    id: 'f5',
    name: 'f5',
    description: 'desc1, desc1',
    price: 70
  },
  {
    id: 'f6',
    name: 'f1',
    description: 'desc1, desc1',
    price: 70
  },
  {
    id: 'f7',
    name: 'f1',
    description: 'desc1, desc1',
    price: 70
  },
]

//Products
export const menSizes = [28, 29, 30, 31, 32, 33, 34, 35]

export const womenSizes = [24, 25, 26, 27, 28, 29, 30, 31]

export const collections = [
  {
    id: 'collection-1',
    name: 'Collection 1'
  },
  {
    id: 'collection-2',
    name: 'Collection 2'
  },
  {
    id: 'collection-3',
    name: 'Collection 3'
  },
]

export const tags = [
  {
    id: 'tag-1',
    name: 'Tag 1'
  },
  {
    id: 'tag-2',
    name: 'Tag 2'
  },
  {
    id: 'tag-3',
    name: 'Tag 3'
  },
  {
    id: 'tag-4',
    name: 'Tag 4'
  },
]

export const sortBy = [
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

export const products = [
  {
    id: 'product1',
    name: 'product1',
    description: 'product1 desc',
    price: 70,
    gender: 'men',
    category: 'new',
    collection: 'collection-2',
    tags: [
      'tag1',
      'tag2'
    ]
  },
  {
    id: 'product2',
    name: 'product2',
    description: 'product1 desc',
    price: 70,
    gender: 'men',
    category: 'sale',
    collection: 'collection-2',
    tags: [
      'tag1',
      'tag2'
    ]
  },
  {
    id: 'product3',
    name: 'product3',
    description: 'product1 desc',
    price: 70,
    gender: 'men',
    category: 'new',
    collection: 'collection-2',
    tags: [
      'tag1',
      'tag2'
    ]
  },
  {
    id: 'product4',
    name: 'product4',
    description: 'product1 desc',
    price: 70,
    gender: 'men',
    category: 'new',
    collection: 'collection-1',
    tags: [
      'tag2'
    ]
  },
  {
    id: 'product5',
    name: 'product5',
    description: 'product1 desc',
    price: 70,
    gender: 'men',
    category: 'new',
    collection: 'collection-1',
    tags: [
      'tag1',
    ]
  },
  {
    id: 'product6',
    name: 'product6',
    description: 'product1 desc',
    price: 70,
    gender: 'men',
    category: 'new',
    collection: 'collection-1',
    tags: [
      'tag1',
    ]
  },
  {
    id: 'product7',
    name: 'product7',
    description: 'product1 desc',
    price: 70,
    gender: 'women',
    category: 'new',
    collection: 'collection-2',
    tags: [
      'tag1',
      'tag2'
    ]
  },
  {
    id: 'product8',
    name: 'product8',
    description: 'product1 desc',
    price: 70,
    gender: 'women',
    category: 'new',
    collection: 'collection-3',
    tags: [
      'tag1',
      'tag2'
    ]
  }, {
    id: 'product9',
    name: 'product9',
    description: 'product1 desc',
    price: 70,
    gender: 'women',
    category: 'new',
    collection: 'collection-1',
    tags: [
      'tag2'
    ]
  },
  {
    id: 'product10',
    name: 'product10',
    description: 'product1 desc',
    price: 70,
    gender: 'women',
    category: 'new',
    collection: 'collection-1',
    tags: [
      'tag1',
    ]
  }
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