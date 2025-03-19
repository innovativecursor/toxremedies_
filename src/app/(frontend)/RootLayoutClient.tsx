'use client'

import React from 'react'
import './styles.css'
import { Poppins, Albert_Sans } from 'next/font/google'
import Toaster from './components/ui/Toaster'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins', // ✅ Define a CSS variable for usage
})

const albertSans = Albert_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-albert-sans', // ✅ Define a CSS variable for usage
})

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${albertSans.variable}`}>
        <Toaster />
        <main>{children}</main>
      </body>
    </html>
  )
}
