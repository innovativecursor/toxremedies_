import { CollectionConfig } from 'payload'
import nodemailer from 'nodemailer'
import payload from 'payload'
import path from 'path' // ✅ Import path to handle image file

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_EMAIL_PASSWORD,
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
    { name: 'name', type: 'text', label: 'Full Name', required: true },
    { name: 'email', type: 'email', label: 'Email Address', required: true },
    { name: 'phone', type: 'text', label: 'Phone Number', required: true },
    { name: 'message', type: 'textarea', label: 'Message', required: true },
    {
      name: 'createdAt',
      type: 'date',
      label: 'Submitted At',
      admin: { readOnly: true },
      hooks: { beforeChange: [({ value }) => value || new Date().toISOString()] },
    },
    {
      name: 'emailSent',
      type: 'checkbox', // ✅ Ensure it's a checkbox (boolean)
      label: 'Email Sent',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
  ],

  hooks: {
    afterChange: [
      async ({ doc }) => {
        if (doc?.emailSent) return // ✅ Skip if email already sent

        try {
          // ✅ Send admin notification
          await transporter.sendMail({
            from: `"ToxRemedies New Form Update" <${process.env.ADMIN_EMAIL}>`,
            to: process.env.ADMIN_EMAIL,
            subject: 'ToxRemedies Business Inquiry',
            text: `You have a new contact form submission:\n\nName: ${doc.name}\nEmail: ${doc.email}\nPhone: ${doc.phone}\nMessage: ${doc.message}`,
          })

          console.log('✅ Email sent to admin successfully!')

          // ✅ Send auto-reply email to the sender
          await transporter.sendMail({
            from: `"ToxRemedies Support" <${process.env.ADMIN_EMAIL}>`,
            to: doc.email,
            subject: 'Thank You for Contacting Us',
            html: `
              <div style="text-align: center;">
                <h2>Thank you for reaching out to ToxRemedies!</h2>
                <p>Hello ${doc.name},</p>
                <p>We have received your message and will get back to you shortly.</p>
                <p>Best regards, <br>ToxRemedies Team</p>
                <img src="cid:tox_remedies_nav" alt="ToxRemedies Logo" style="max-width: 200px; margin-top: 10px;">
              </div>
            `,
            attachments: [
              {
                filename: 'tox_remedies_nav.png', // ✅ Update with your actual image filename
                path: path.join(__dirname, 'public/images/tox_remedies_nav.png'), // ✅ Correct path to image
                cid: 'tox_remedies_nav', // ✅ This makes the image inline
              },
            ],
          })

          console.log('✅ Auto-reply sent to user successfully!')

          // ✅ Double-check field existence before updating
          if (typeof doc.id !== 'undefined') {
            await payload.update({
              collection: 'contact-us',
              id: doc.id,
              // @ts-ignore - Ignore "unused attribute" warning
              data: { emailSent: true }, // ✅ Correct boolean type
            })
          }
        } catch (error) {
          console.error('❌ Error sending email:', error)
        }
      },
    ],
  },
}

export default ContactUs
