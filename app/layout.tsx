import './globals.css'
import { Playfair_Display, Cinzel_Decorative } from 'next/font/google'
import Header from '@/components/Header'
import Footer from './components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const serifAlt = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700'], // Decorative only supports 400 & 700
  variable: '--font-serif-alt'
});

export const metadata = {
  title: 'Euphine & Elmard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.className} ${serifAlt.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
