import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google'
import { ButtonFloatWttp } from '../../components/Buttons'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'GTM Test/TrabalhistaSP',
  description: 'GTM Test/TrabalhistaSP',
  verification: {
    other: {
      'facebook-domain-verification': ['12kjx6s05yq0i40t14ur1l6i16dmv8'],
    },
  },
  keywords: ['GTM Test/TrabalhistaSP'],
}
export default function TrabalhistaSPLayout({
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
      {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID_TRABALHISTASP &&
        process.env.NODE_ENV === 'production' && (
          <GoogleTagManager
            gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID_TRABALHISTASP!}
          />
        )}
    </html>
  )
}
