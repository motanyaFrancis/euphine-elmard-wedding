import './globals.css'
import { Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'
import Footer from './components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Euphine & Elmard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
