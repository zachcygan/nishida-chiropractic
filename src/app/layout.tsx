import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import { FormDataProvider, useFormData } from '../components/formContext'
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export const metadata: Metadata = {
  title: 'Nishida Chriropractic',
  description: 'Dr. Paul Nishida\'s Chiropractic Practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-white'>
        <FormDataProvider>
          <header>
            <Navbar />
          </header>
          <div className='min-h-[73vh]'>
            {children}
            <Analytics />
          </div>
          <footer>
            <Footer />
          </footer>
        </FormDataProvider>
      </body>
    </html>
  )
}
