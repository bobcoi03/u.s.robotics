import './globals.css'
import { Inter } from 'next/font/google'
import { name } from './globals'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: name,
  description: 'Building super intelligent systems at scale',
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="cupcake">
      <head>
        <link rel="icon" type="image/x-icon" href="/usr_logo.webp"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
