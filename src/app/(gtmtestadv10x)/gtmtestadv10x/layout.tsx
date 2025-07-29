import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ButtonFloatWttp } from '../components/Buttons'
import { GoogleTagManager } from '@next/third-parties/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'GTM Test Adv10x',
  description: 'GTM Test Adv10x',
  verification: {
    other: {
      'facebook-domain-verification': ['12kjx6s05yq0i40t14ur1l6i16dmv8'],
    },
  },
  keywords: ['GTM Test Adv10x'],
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ButtonFloatWttp />
        {children}
      </body>
      {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID_ADV10X &&
        process.env.NODE_ENV === 'production' && (
          <GoogleTagManager
            gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID_ADV10X!}
          />
        )}
    </html>
  )
}
