// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import ContactUs from './collections/ContactUs'
import icon from '../public/favicon.ico'
import FounderImages from './collections/FounderImage'

import Services from './collections/Services'
import BackendFeaturedPublications from './collections/BackendFeaturedPublications'
import nodemailer from 'nodemailer'
import EmailLogs from './collections/EmailLogs'
import FounderTexts from './collections/FounderTexts'
import FAQs from './collections/FAQ'
import Expertise from './collections/Expertise'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const transporter = nodemailer.createTransport({
  service: 'gmail', // or use another email provider
  auth: {
    user: process.env.ADMIN_EMAIL, // Your email
    pass: process.env.ADMIN_EMAIL_PASSWORD, // Use an app password, NOT your real password
  },
})
export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    // @ts-ignore - Ignore "unused attribute" warning
    branding: {
      companyName: 'ToxRemedies Portal', // ✅ Keep only this if logo isn't needed
    },

    meta: {
      titleSuffix: ' - ToxRemedies',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: icon.src,
        },
      ],
    },
  },

  collections: [
    Users,
    Media,
    ContactUs,
    FounderImages,
    BackendFeaturedPublications,
    Services,
    EmailLogs,
    FounderTexts,
    FAQs,
    Expertise,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
