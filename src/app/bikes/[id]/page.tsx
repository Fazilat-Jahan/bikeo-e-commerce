'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../../context/CartContext';

interface Bike {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
}

const bikes: Bike[] = [
  {
    id: 1,
    name: 'CBR1000RR-R',
    brand: 'Honda',
    price: 28500,
    image: '/CBR.jpg?height=600&width=800',
    description: 'The CBR1000RR-R Fireblade is the ultimate expression of Honda racing DNA. Born on the track and bred for the road, this superbike delivers unparalleled performance and cutting-edge technology.',
  },
  {
    id: 2,
    name: 'Africa Twin',
    brand: 'Honda',
    price: 14400,
    image: '/AfricaTwin.png?height=600&width=800',
    description: 'The Africa Twin is built for adventure, combining power, comfort, and versatility. Whether you are crossing continents or navigating city streets, this bike is ready for any journey.',
  },
  {
    id: 3,
    name: 'Gold Wing',
    brand: 'Honda',
    price: 25300,
    image: '/goldWing.png?height=600&width=800',
    description: 'Honda Goldwing Tour is a super bike available in only 1 variant and 1 colour. The Honda Goldwing Tour is powered by 1833cc BS6 engine which develops a power of 124.7 bhp and a torque of 170 Nm. With both front and rear disc brakes, Honda Goldwing Tour comes up with anti-locking braking system. This Goldwing Tour bike weighs 390 kg and has a fuel tank capacity of 21.1 liters.',
  },
];

export default function BikePage({ params }: { params: { id: string } }) {
  const [bike, setBike] = useState<Bike | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const bikeId = parseInt(params.id, 10);
    if (!isNaN(bikeId)) {
      const foundBike = bikes.find((b) => b.id === bikeId);
      setBike(foundBike || null);
    } else {
      setBike(null);
    }
  }, [params.id]);

  if (!bike) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Bike not found
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: bike.id,
      name: bike.name,
      price: bike.price,
      quantity: 1,
    });
    alert(`${bike.name} added to cart!`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/brands"
        className="text-red-800 hover:text-red-500 mb-4 inline-block"
      >
        &larr; Back to Inventory
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[300px] md:h-[500px]">
          <Image
            src={bike.image}
            alt={bike.name}
            objectFit="fill"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{bike.name}</h1>
          <p className="text-xl text-red-800 mb-4">
            ${bike.price.toLocaleString()}
          </p>
          <p className="text-gray-400 mb-6">{bike.description}</p>
          <button
            className="bg-red-800 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
