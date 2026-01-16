"use client";
import { useState } from "react";
import { ShoppingCart, Search, Menu, X, Heart } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-md ">
      <div className="bg-purple-600 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span>🎉 Free shipping on orders over $50!</span>
          <div className="hidden md:flex gap-4">
            <span>📞 1-800-SHOP-NOW</span>
            <span>📧 support@shophub.com</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-purple-600">ShopHub</h1>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-purple-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600">
              Shop
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600">
              Deals
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600">
              Contact
            </a>
            <button className="relative">
              <Heart className="h-6 w-6 text-gray-700 hover:text-purple-600" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>
            <button className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-purple-600" />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
            <a href="#" className="block py-2 text-gray-700">
              Home
            </a>
            <a href="#" className="block py-2 text-gray-700">
              Shop
            </a>
            <a href="#" className="block py-2 text-gray-700">
              Deals
            </a>
            <a href="#" className="block py-2 text-gray-700">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
