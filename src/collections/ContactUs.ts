import { CollectionConfig } from 'payload'

export const ContactUs: CollectionConfig = {
  slug: 'contact-us',
  labels: {
    singular: 'Contact Form',
    plural: 'Contact Forms',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Full Name',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      required: true,
      unique: true, // Prevents duplicate emails
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
      required: true,
      unique: true, // Prevents duplicate phone numbers
    },
    {
      name: 'message',
      type: 'textarea',
      label: 'Message',
      required: true,
    },
    {
      name: 'createdAt',
      type: 'date',
      label: 'Submitted At',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeChange: [({ value }) => value || new Date().toISOString()],
      },
    },
  ],
}

export default ContactUs
