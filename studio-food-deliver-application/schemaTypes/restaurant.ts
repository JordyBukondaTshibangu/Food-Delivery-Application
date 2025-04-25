import {defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Restaurant Description',
      type: 'string',
      validation: (Rule) => Rule.max(200).required(),
    },
    {
      name: 'image',
      title: 'Restaurant Image',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Restaurant Latitude',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'long',
      title: 'Restaurant Longitude',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Restaurant Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Restaurant Rating from 1 to 5',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
    },
    {
      name: 'reviews',
      title: 'Restaurant Reviews',
      type: 'string',
    },
    {
      name: 'type',
      title: 'Restaurant Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'number',
      title: 'Restaurant Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'deliveryTime',
      title: 'Delivery Time in minutes',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isOpenNow',
      title: 'Is Open Now',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dishes',
      title: 'Restaurant Dishes',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
})
