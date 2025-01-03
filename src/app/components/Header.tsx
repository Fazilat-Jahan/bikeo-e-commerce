'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useCart } from '../context/CartContext'
import { ShoppingCart, Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { cart } = useCart()

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-red-900/20 bg-black/90 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link 
          href="/" 
          className="text-xl md:text-2xl font-bold text-red-600 hover:text-red-500 transition-colors"
        >
          BIKEO
        </Link>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li><Link href="/" className="text-red-600 hover:text-red-500 transition-colors">HOME</Link></li>
            {/* <li><Link href="/about" className="text-red-600 hover:text-red-500 transition-colors">ABOUT</Link></li> */}
            <li><Link href="/brands" className="text-red-600 hover:text-red-500 transition-colors">INVENTORY</Link></li>
            {/* <li><Link href="/contact" className="text-red-600 hover:text-red-500 transition-colors">CONTACT</Link></li> */}
          </ul>
        </nav>
        <div className="flex items-center">
          <Link 
            href="/cart" 
            className="text-red-600 hover:text-red-500 transition-colors relative"
          >
            <ShoppingCart className="inline-block" size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </Link>
          <button
            className="ml-4 md:hidden text-red-600 hover:text-red-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute left-0 right-0 top-full bg-black/90`}>
          <ul className="flex flex-col items-center gap-4 p-4">
            <li><Link href="/" className="block py-2 text-red-600 hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>HOME</Link></li>
            {/* <li><Link href="/about" className="block py-2 text-red-600 hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>ABOUT</Link></li> */}
            <li><Link href="/brands" className="block py-2 text-red-600 hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>INVENTORY</Link></li>
            {/* <li><Link href="/contact" className="block py-2 text-red-600 hover:text-red-500 transition-colors" onClick={() => setIsMenuOpen(false)}>CONTACT</Link></li> */}
          </ul>
        </div>
      </div>
    </header>
  )
}

