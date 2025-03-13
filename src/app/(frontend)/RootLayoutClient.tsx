'use client'

import React from 'react'

import './styles.css'
import { Poppins, Albert_Sans } from 'next/font/google'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
