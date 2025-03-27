import type { CollectionConfig } from 'payload'
import fs from 'fs'
import path from 'path'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media', // ✅ Store files in /media folder
    mimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'application/pdf'], // ✅ Allowed file types
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        if (data.filename) {
          const filePath = path.resolve(__dirname, `../../media/${data.filename}`)
          if (fs.existsSync(filePath)) {
            const stats = fs.statSync(filePath)
            const fileSizeInMB = stats.size / (1024 * 1024) // Convert to MB

            if (fileSizeInMB > 5) {
              throw new Error('File size must be under 5MB.')
            }
          }
        }
      },
    ],
  },
}

export default Media
