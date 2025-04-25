import {defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Dish Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Dish Image',
      type: 'image',
    },
    {
      name: 'price',
      title: 'Dish Price in USD',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
  ],
})
