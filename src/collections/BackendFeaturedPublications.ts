import { CollectionConfig } from 'payload'
import fs from 'fs'
import path from 'path'
import { execa } from 'execa' // Run shell commands
import { promisify } from 'util'

const stat = promisify(fs.stat) // Async file size check
const rename = promisify(fs.rename) // Async rename

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
    update: () => true,
    delete: () => true,
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
          try {
            const uploadDir = path.resolve(__dirname, '../../../public/uploads') // Adjust path
            const pdfFilePath = path.join(uploadDir, data.pdf.filename)

            let stats = await stat(pdfFilePath)
            let fileSizeInMB = stats.size / (1024 * 1024) // Convert bytes to MB

            if (fileSizeInMB > 1) {
              console.log(
                `⚡ Compressing PDF: ${data.pdf.filename} (Size: ${fileSizeInMB.toFixed(2)}MB)`,
              )

              const outputPath = pdfFilePath.replace('.pdf', '-compressed.pdf')

              await execa('gs', [
                '-sDEVICE=pdfwrite',
                '-dCompatibilityLevel=1.4',
                '-dPDFSETTINGS=/screen', // Aggressive compression
                '-dNOPAUSE',
                '-dQUIET',
                '-dBATCH',
                `-sOutputFile=${outputPath}`,
                pdfFilePath,
              ])

              // Replace original file with compressed one
              await rename(outputPath, pdfFilePath)

              // Re-check file size
              stats = await stat(pdfFilePath)
              fileSizeInMB = stats.size / (1024 * 1024)

              console.log(`✅ PDF compressed to ${fileSizeInMB.toFixed(2)}MB!`)
            }
          } catch (error) {
            console.error('❌ PDF compression failed:', error)
          }
        }
      },
    ],
  },
}

export default BackendFeaturedPublications
