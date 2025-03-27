import { CollectionConfig } from 'payload'
import fs from 'fs'
import path from 'path'
import { execa } from 'execa' // For running shell commands

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
          let stats = fs.statSync(pdfFilePath)
          let fileSizeInMB = stats.size / (1024 * 1024) // Convert bytes to MB

          if (fileSizeInMB > 1) {
            console.log(
              `Compressing PDF: ${data.pdf.filename} (Size: ${fileSizeInMB.toFixed(2)}MB)`,
            )

            const outputPath = pdfFilePath.replace('.pdf', '-compressed.pdf')

            try {
              // Run Ghostscript to compress the PDF
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

              // Replace the original PDF with the compressed one
              fs.renameSync(outputPath, pdfFilePath)

              // Check new file size
              stats = fs.statSync(pdfFilePath)
              fileSizeInMB = stats.size / (1024 * 1024)

              console.log(`✅ PDF compressed to ${fileSizeInMB.toFixed(2)}MB!`)
            } catch (error) {
              console.error('❌ PDF compression failed:', error)
            }
          }
        }
      },
    ],
  },
}

export default BackendFeaturedPublications
