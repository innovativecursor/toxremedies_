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
import icon from '../src/app/(frontend)/public/favicon.ico'
import FounderImages from './collections/FounderImage'
import BackendFeaturedPublications from './collections/BackendFeaturedPublications'
import Services from './collections/Services'
import favicon from './app/(frontend)/public/favicon.ico'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },

    meta: {
      titleSuffix: ' - ToxRemedies',
      icons: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          url: icon.src, // Use this instead of 'favicon' property
        },
        {
          rel: 'icon',
          type: 'image/png',
          url: icon.src,
        },
      ],
    },
  },

  collections: [Users, Media, ContactUs, FounderImages, BackendFeaturedPublications, Services],
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
