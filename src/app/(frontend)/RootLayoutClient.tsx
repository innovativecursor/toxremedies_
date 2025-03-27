'use client'

import React, { useState, useEffect } from 'react'
import './styles.css'
import { Poppins, Albert_Sans } from 'next/font/google'
import Toaster from './components/ui/Toaster'
import Loader from './components/ui/Loader'
import { usePathname } from 'next/navigation'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const albertSans = Albert_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-albert-sans',
})

export default function RootLayoutClient({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    setLoading(true) // Show loader
    const timer = setTimeout(() => setLoading(false), 1000) // Fake delay for UX

    return () => clearTimeout(timer)
  }, [pathname]) // Run on route change

  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="ToxRemedies" />
        <meta property="og:description" content="In Service of Human and Environmental Health." />
        <meta property="og:image" content="/assets/thumbnail.webp" />
        <meta property="og:image:alt" content="About ToxRemedies" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://toxremedies.com/" />

        {/* Fallback for Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ToxRemedies" />
        <meta name="twitter:description" content="ToxRemedies" />
        {/* <meta name="twitter:image" content="/assets/home/heroSection/hero6.png" /> */}
      </head>
      <body className={`${poppins.variable} ${albertSans.variable}`}>
        <Toaster />
        {loading && <Loader />} {/* Show Loader when loading */}
        <main
          className={`${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
