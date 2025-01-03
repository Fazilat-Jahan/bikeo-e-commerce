'use client'

import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center text-red-600 mb-8 [text-shadow:_0_0_10px_rgb(220_38_38_/_50%)]">
        YOUR CART
      </h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-xl md:text-2xl text-gray-400 mb-8">Your cart is empty.</p>
          <Link
            href="/brands"
            className="rounded bg-red-600 px-6 md:px-8 py-2 md:py-3 font-semibold text-white hover:bg-red-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b border-gray-700 py-4">
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-400">Quantity: {item.quantity}</p>
                <p className="text-red-600">${(item.price * item.quantity).toLocaleString()}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-8 flex justify-between items-center">
            <h3 className="text-2xl font-bold">Total: ${total.toLocaleString()}</h3>
            <div>
              <button
                onClick={clearCart}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors mr-4"
              >
                Clear Cart
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

