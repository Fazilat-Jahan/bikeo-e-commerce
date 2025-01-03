import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black/90 text-white py-8 border-t border-red-900/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-600">BIKEO</h3>
            <p className="text-gray-400">Premium motorcycles for enthusiasts</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-600">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-red-500 transition-colors">Home</Link></li>
              {/* <li><Link href="/about" className="text-gray-400 hover:text-red-500 transition-colors">About</Link></li> */}
              <li><Link href="/brands" className="text-gray-400 hover:text-red-500 transition-colors">Inventory</Link></li>
              {/* <li><Link href="/contact" className="text-gray-400 hover:text-red-500 transition-colors">Contact</Link></li> */}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-red-600">Contact Us</h4>
            <p className="text-gray-400">247 Bike Street, Moto City, TechWare</p>
            <p className="text-gray-400">Phone: (123) (tech) (ware)</p>
            <p className="text-gray-400">Email: techware@gmail.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 BYKEO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

