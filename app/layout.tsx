import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/ui/Footer'
import Header from '@/components/ui/Header'
import {Toaster} from "react-hot-toast"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'women safety',
  description: 'lets make a safe place for women',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position='top-center'/>
<Header/>
        {children}
<Footer/>
        </body>
    </html>
  )
}
