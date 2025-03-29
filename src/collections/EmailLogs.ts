import { CollectionConfig } from 'payload'

export const EmailLogs: CollectionConfig = {
  slug: 'email-logs', // ✅ Ensure this matches the slug used in payload.create()
  labels: { singular: 'Email Log', plural: 'Email Logs' },
  admin: { useAsTitle: 'status' },
  access: { read: () => true, create: () => true },
  fields: [
    { name: 'contactId', type: 'text', label: 'Contact ID', required: true },
    { name: 'status', type: 'text', label: 'Status', required: true },
    { name: 'response', type: 'textarea', label: 'Email Response' },
    { name: 'errorMessage', type: 'textarea', label: 'Error Message' },
  ],
}

export default EmailLogs
