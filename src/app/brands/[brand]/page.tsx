'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Bike {
  id: number
  name: string
  price: number
  image: string
}

const bikes: Record<string, Bike[]> = {
  honda: [
    { id: 1, name: 'CBR1000RR-R', price: 28500, image: '/CBR.jpg' },
    { id: 2, name: 'Africa Twin', price: 14400, image: '/AfricaTwin.png?height=300&width=400' },
    { id: 3, name: 'Gold Wing', price: 25300, image: '/goldWing.png?height=300&width=400' },
  ]
}


export default function BrandPage({ params }: { params: { brand: string } }) {
    const [inventory, setInventory] = useState<Bike[]>([])
  
    useEffect(() => {
      setInventory(bikes[params.brand] || [])
    }, [params.brand])
  
    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <h1 className="mb-8 md:mb-12 text-center text-3xl md:text-5xl font-bold text-red-800 uppercase [text-shadow:_0_0_10px_rgb(220_38_38_/_50%)]">
          {params.brand} Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {inventory.map((bike) => (
            <div
              key={bike.id}
              className="group relative overflow-hidden rounded-lg border border-red-900/20 bg-black/50 p-4"
            >
              <Image
                src={bike.image}
                alt={bike.name}
                width={400}
                height={300}
                layout="responsive"
                className="object-cover"
              />
              <div className="mt-4">
                <h2 className="text-lg md:text-xl font-bold">{bike.name}</h2>
                <p className="text-gray-400">${bike.price.toLocaleString()}</p>
                <Link
                  href={`/bikes/${bike.id}`}
                  className="mt-4 block rounded bg-red-800  px-4 py-2 text-center font-semibold text-white hover:bg-red-700 transition-colors"
                >
                  VIEW BIKE
                </Link>
              </div>
              {/* <Image
                src="/placeholder.svg?height=50&width=50"
                alt="Brand logo"
                width={50}
                height={50}
                className="absolute bottom-4 right-4 h-6 w-6 md:h-8 md:w-8 opacity-50"
              /> */}
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  