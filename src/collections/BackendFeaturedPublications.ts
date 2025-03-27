import { CollectionConfig } from 'payload'
import fs from 'fs'
import path from 'path'
import pdfLib from 'pdf-lib' // PDF compression library

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
  ],
  hooks: {
    beforeChange: [
      async ({ data, req }) => {
        if (data.pdf) {
          const pdfFilePath = path.resolve(__dirname, `../../public/uploads/${data.pdf.filename}`)
          const stats = fs.statSync(pdfFilePath)
          const fileSizeInMB = stats.size / (1024 * 1024) // Convert bytes to MB

          if (fileSizeInMB > 1) {
            console.log('Compressing PDF...')

            // Load PDF and compress
            const existingPdfBytes = fs.readFileSync(pdfFilePath)
            const pdfDoc = await pdfLib.PDFDocument.load(existingPdfBytes)
            pdfDoc.setCreator('ToxRemedies') // Example metadata
            const compressedPdfBytes = await pdfDoc.save({ useObjectStreams: true }) // Optimize PDF

            // Overwrite the original file with compressed version
            fs.writeFileSync(pdfFilePath, compressedPdfBytes)
            console.log('PDF compressed successfully!')
          }
        }
      },
    ],
  },
}

export default BackendFeaturedPublications
