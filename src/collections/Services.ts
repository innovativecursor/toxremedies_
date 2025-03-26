import { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Service',
    plural: 'Services',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Service Title',
    },
    {
      name: 'description',
      type: 'array',
      label: 'Service Description',
      fields: [
        {
          name: 'point',
          type: 'text',
          required: true,
          label: 'Description Point',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // Assuming 'media' is the collection for images
      required: true,
      label: 'Service Image',
    },
  ],
}

export default Services
