import { TrendingUp } from "lucide-react";
import React from "react";

const TrendingNow = () => {
  const trendingProducts = [
    {
      id: 1,
      name: "Bluetooth Speaker",
      price: 79.99,
      trend: "+45%",
      image: "🔊",
    },
    { id: 2, name: "Coffee Maker", price: 149.99, trend: "+38%", image: "☕" },
    {
      id: 3,
      name: "Fitness Tracker",
      price: 99.99,
      trend: "+52%",
      image: "📊",
    },
    {
      id: 4,
      name: "Digital Camera",
      price: 599.99,
      trend: "+29%",
      image: "📷",
    },
    { id: 5, name: "Air Purifier", price: 199.99, trend: "+41%", image: "🌪️" },
    { id: 6, name: "Robot Vacuum", price: 349.99, trend: "+33%", image: "🤖" },
  ];
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-10">
          <TrendingUp className="h-8 w-8 text-purple-600" />
          <h2 className="text-black text-3xl font-bold">Trending Now</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition text-center"
            >
              <div className="text-4xl mb-3">{product.image}</div>
              <h3 className="font-semibold text-sm mb-2">{product.name}</h3>
              <p className="text-purple-600 font-bold mb-1">${product.price}</p>
              <div className="flex items-center justify-center text-green-600 text-xs">
                <TrendingUp className="h-3 w-3 mr-1" />
                <span>{product.trend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
