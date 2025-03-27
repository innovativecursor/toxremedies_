import type { CollectionConfig } from 'payload'
import fs from 'fs'
import path from 'path'
import { execa } from 'execa' // For running Ghostscript (gs)

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
            let stats = fs.statSync(filePath)
            let fileSizeInMB = stats.size / (1024 * 1024) // Convert to MB

            if (fileSizeInMB > 1) {
              console.log(
                `📄 Compressing PDF: ${data.filename} (Size: ${fileSizeInMB.toFixed(2)}MB)`,
              )

              const outputPath = filePath.replace('.pdf', '-compressed.pdf')

              try {
                // 🔥 Compress PDF using Ghostscript (gs)
                await execa('gs', [
                  '-sDEVICE=pdfwrite',
                  '-dCompatibilityLevel=1.4',
                  '-dPDFSETTINGS=/screen', // ✅ High compression
                  '-dNOPAUSE',
                  '-dQUIET',
                  '-dBATCH',
                  `-sOutputFile=${outputPath}`,
                  filePath,
                ])

                // ✅ Replace the original file with the compressed one
                fs.renameSync(outputPath, filePath)

                // ✅ Check new file size
                stats = fs.statSync(filePath)
                fileSizeInMB = stats.size / (1024 * 1024)

                console.log(`✅ PDF compressed to ${fileSizeInMB.toFixed(2)}MB!`)
              } catch (error) {
                console.error('❌ PDF compression failed:', error)
              }
            }
          }
        }
      },
    ],
  },
}

export default Media
