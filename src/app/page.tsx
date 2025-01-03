import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-73px)]">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
          <div className="flex flex-col items-start gap-6 max-w-xl z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-red-600 [text-shadow:_0_0_10px_rgb(220_38_38_/_50%)]">
            Ride Your Dream.
              
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
            Own Your Passion. Welcome to Bikeo!
            </p>
            <Link
              href="/brands"
              className="rounded bg-red-600 px-6 md:px-8 py-2 md:py-3 font-semibold text-white hover:bg-red-700 transition-colors"
            >
              SHOP NOW
            </Link>
          </div>
          <div className="mt-8 md:mt-0 w-full md:w-1/2">
            <Image
              src="/herobike.png?height=600&width=800"
              alt="Hero motorcycle"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

