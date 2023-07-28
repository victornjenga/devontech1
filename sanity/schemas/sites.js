export default {
    name: 'sites',
    title: 'Sites',
    type: 'document',
    fields: [
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
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        },
      },
      {
        name: 'userId',
        title: 'UserId',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'string',
      },
      {
        name: 'priceone',
        title: 'Priceone',
        type: 'string',
      },
      {
        title: 'Description',
        name: 'description',
        type: 'text',
      },
     
      {
        name: 'postedBy',
        title: 'PostedBy',
        type: 'postedBy',
      },
      {
        name: 'likes',
        title: 'Likes',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{type: 'user'}],
          },
        ],
      },
      
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
    ],
  }
  