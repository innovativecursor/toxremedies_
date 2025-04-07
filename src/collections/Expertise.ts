import { CollectionConfig } from 'payload'

export const Expertise: CollectionConfig = {
  slug: 'expertise',
  labels: {
    singular: 'Expertise',
    plural: 'Expertises',
  },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'array',
      label: 'Description Points',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'point',
          type: 'text',
          label: 'Point',
          required: true,
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'media',
      required: true,
    },
  ],
}

export default Expertise
