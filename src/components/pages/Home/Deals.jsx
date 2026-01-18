"use client";
import React from "react";
import { Clock } from "lucide-react";

export default function EcommerceHomepage() {
  const deals = [
    {
      id: 1,
      name: "Gaming Console",
      price: 499.99,
      oldPrice: 599.99,
      discount: "17%",
      image: "🎮",
    },
    {
      id: 2,
      name: "4K Smart TV",
      price: 799.99,
      oldPrice: 1199.99,
      discount: "33%",
      image: "📺",
    },
    {
      id: 3,
      name: "Laptop Pro",
      price: 1299.99,
      oldPrice: 1599.99,
      discount: "19%",
      image: "💻",
    },
  ];

  return (
    <div className="bg-gray-50">
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-10">
            <Clock className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold">Flash Deals - Limited Time!</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <div
                key={deal.id}
                className="bg-linear-to-br from-blue-50 to-pink-50 rounded-xl p-6 relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {deal.discount} OFF
                </div>
                <div className="text-7xl mb-4 text-center">{deal.image}</div>
                <h3 className="font-bold text-xl mb-2">{deal.name}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    ${deal.price}
                  </span>
                  <span className="text-gray-500 line-through">
                    ${deal.oldPrice}
                  </span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                  Grab Deal
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
