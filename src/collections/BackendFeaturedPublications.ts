import { CollectionConfig } from 'payload'

export const BackendFeaturedPublications: CollectionConfig = {
  slug: 'backend-featured-publications',
  labels: {
    singular: 'Backend Featured Publication',
    plural: 'Backend Featured Publications',
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
      required: true,
      label: 'Publication Title',
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      label: 'Uploaded By',
    },
    {
      name: 'publicationImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Publication Cover Image',
    },
    {
      name: 'pdf',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Publication PDF',
    },
    {
      name: 'publicationDate',
      type: 'date',
      required: true,
      label: 'Publication Date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
  ],
}

export default BackendFeaturedPublications
