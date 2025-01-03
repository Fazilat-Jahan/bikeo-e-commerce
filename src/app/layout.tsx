import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/footer'
import { CartProvider } from './context/CartContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bikeo',
  description: 'Premium motorcycles for enthusiasts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white flex flex-col">
        <CartProvider>
          <div className="flex-grow">
            <div className="relative min-h-screen bg-hexagon-pattern">
              <Header />
              <main className="pt-[73px] pb-8">
                {children}
              </main>
            </div>
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
