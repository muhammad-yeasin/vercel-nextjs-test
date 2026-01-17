import React from "react";
import { Truck, Shield, Headphones, Package } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-black font-bold mb-2">Free Shipping</h3>
            <p className="text-gray-600 text-sm">On orders over $50</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-black font-bold mb-2">Secure Payment</h3>
            <p className="text-gray-600 text-sm">100% secure transactions</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-black font-bold mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">Dedicated customer service</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-black font-bold mb-2">Easy Returns</h3>
            <p className="text-gray-600 text-sm">30-day return policy</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
