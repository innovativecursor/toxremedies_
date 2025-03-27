import type { CollectionConfig } from 'payload'
import path from 'path'
import fs from 'fs'
import { execa } from 'execa' // Ghostscript for compression

export const PdfCompressor: CollectionConfig = {
  slug: 'pdf-compressor',
  access: {
    read: () => true, // Allow read access to all users
    create: () => true, // Allow uploads
  },
  upload: {
    staticDir: path.resolve(__dirname, '../../compressed-pdfs'), // Save compressed PDFs
    mimeTypes: ['application/pdf'], // Only allow PDF uploads
  },
  fields: [
    {
      name: 'originalSize',
      type: 'number',
      label: 'Original File Size (MB)',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'compressedSize',
      type: 'number',
      label: 'Compressed File Size (MB)',
      admin: {
        readOnly: true,
      },
    },
  ],
  hooks: {
    afterChange: [
      async ({ doc }) => {
        const filePath = path.resolve(__dirname, `../../compressed-pdfs/${doc.filename}`)

        if (fs.existsSync(filePath)) {
          const originalStats = fs.statSync(filePath)
          const originalSizeMB = originalStats.size / (1024 * 1024) // Convert to MB

          console.log(`Compressing PDF: ${doc.filename} (Size: ${originalSizeMB.toFixed(2)}MB)`)

          const compressedPath = filePath.replace('.pdf', '-compressed.pdf')

          try {
            await execa('gs', [
              '-sDEVICE=pdfwrite',
              '-dCompatibilityLevel=1.4',
              '-dPDFSETTINGS=/screen',
              '-dNOPAUSE',
              '-dQUIET',
              '-dBATCH',
              `-sOutputFile=${compressedPath}`,
              filePath,
            ])

            // Replace the original file with the compressed version
            fs.renameSync(compressedPath, filePath)

            const newStats = fs.statSync(filePath)
            const compressedSizeMB = newStats.size / (1024 * 1024)

            console.log(`✅ PDF compressed to ${compressedSizeMB.toFixed(2)}MB!`)

            return {
              ...doc,
              originalSize: parseFloat(originalSizeMB.toFixed(2)),
              compressedSize: parseFloat(compressedSizeMB.toFixed(2)),
            }
          } catch (error) {
            console.error('❌ PDF compression failed:', error)
          }
        }
      },
    ],
  },
}

export default PdfCompressor
