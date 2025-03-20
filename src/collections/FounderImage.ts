import { CollectionConfig } from 'payload'

export const FounderImages: CollectionConfig = {
  slug: 'founder-images',
  labels: {
    singular: 'Founder Image',
    plural: 'Founder Images',
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'images',
      type: 'array',
      label: 'Founder Images',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // Ensure 'media' collection exists for handling uploads
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          required: true,
          label: 'Alt Text',
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Caption',
        },
      ],
    },
  ],
}

export default FounderImages
