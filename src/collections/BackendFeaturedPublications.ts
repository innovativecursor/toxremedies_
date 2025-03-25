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
      relationTo: 'users', // Assuming "users" is the user collection slug
      required: true,
      label: 'Uploaded By',
    },
    {
      name: 'publicationImage',
      type: 'upload',
      relationTo: 'media', // Assuming media collection handles images
      required: true,
      label: 'Publication Cover Image',
    },
    {
      name: 'pdf',
      type: 'upload',
      relationTo: 'media', // Assuming media collection handles files
      required: true,
      label: 'Publication PDF',
    },
  ],
}

export default BackendFeaturedPublications
