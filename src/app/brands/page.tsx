import Link from 'next/link'
import Image from 'next/image'

const brands = [
  {
    id: 'honda',
    name: 'Honda',
    image: '/hero-picture.jpg?height=300&width=400',
    logo: '/hondaLogo.png?height=100&width=100'
  },
//   {
//     id: 'yamaha',
//     name: 'Yamaha',
//     image: '/placeholder.svg?height=300&width=400',
//     logo: '/placeholder.svg?height=100&width=100'
//   },
//   {
//     id: 'kawasaki',
//     name: 'Kawasaki',
//     image: '/placeholder.svg?height=300&width=400',
//     logo: '/placeholder.svg?height=100&width=100'
//   }
]
export default function BrandsPage() {
    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="mb-8 md:mb-12 text-center text-3xl md:text-5xl font-bold text-red-600 [text-shadow:_0_0_10px_rgb(220_38_38_/_50%)]">
          CHOOSE YOUR BIKE BRAND
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group relative overflow-hidden rounded-lg border border-red-900/20 bg-black/50"
            >
              <Image
                src={brand.image}
                alt={brand.name}
                width={400}
                height={300}
                layout="responsive"
                className="opacity-50 transition-opacity group-hover:opacity-30"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                {/* <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  width={100}
                  height={100}
                  className="h-16 w-16 md:h-20 md:w-20"
                /> */}
                <Link
                  href={`/brands/${brand.id}`}
                  className="rounded bg-red-600 px-4 md:px-6 py-2 font-semibold text-white hover:bg-red-700 transition-colors"
                >
                  View Bikes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  