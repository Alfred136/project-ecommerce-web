export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      }
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'gender',
      title: 'Gender',
      type: 'string',
    },
    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'discount',
      title: 'Discount (%)',
      type: 'number',
    },
    {
      name: 'categoryId',
      title: 'CategoryId',
      type: 'string',
    },
    {
      name: 'collectionId',
      title: 'CollectionId',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        hotspot: true,
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      }
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
    },
  ]
}