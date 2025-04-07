import { CollectionConfig } from 'payload'

export const FounderTexts: CollectionConfig = {
  slug: 'founder-texts',
  labels: {
    singular: 'Founder Description',
    plural: 'Founder Description',
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
      label: 'Title', // Optional for admin readability
    },
    {
      name: 'sectionOne',
      type: 'textarea',
      required: true,
      label: 'Founder Story - Section One',
    },
    {
      name: 'sectionTwo',
      type: 'textarea',
      required: true,
      label: 'Founder Story - Section Two',
    },
  ],
}

export default FounderTexts
