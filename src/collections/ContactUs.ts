import { CollectionConfig } from 'payload'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail', // Use the appropriate email provider
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_EMAIL_PASSWORD, // Use an App Password
  },
})

export const ContactUs: CollectionConfig = {
  slug: 'contact-us',
  labels: {
    singular: 'Contact Form',
    plural: 'Contact Forms',
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: () => true,
    read: () => true,
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
      unique: true,
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
      required: true,
      unique: true,
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

  hooks: {
    afterChange: [
      async ({ doc }) => {
        try {
          await transporter.sendMail({
            from: process.env.ADMIN_EMAIL,
            to: process.env.ADMIN_EMAIL, // Admin email
            subject: 'New Contact Form Submission',
            text: `You have a new contact form submission:\n\nName: ${doc.name}\nEmail: ${doc.email}\nPhone: ${doc.phone}\nMessage: ${doc.message}`,
          })
          console.log('Admin notification email sent successfully!')
        } catch (error) {
          console.error('Error sending email:', error)
        }
      },
    ],
  },
}

export default ContactUs
