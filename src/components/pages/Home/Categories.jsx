import React from "react";

const Categories = () => {
  const categories = [
    { name: "Electronics", image: "📱", items: "1,234" },
    { name: "Fashion", image: "👗", items: "2,456" },
    { name: "Home & Living", image: "🏠", items: "987" },
    { name: "Beauty", image: "💄", items: "1,567" },
    { name: "Sports", image: "⚽", items: "834" },
    { name: "Books", image: "📚", items: "3,421" },
  ];
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-black text-3xl font-bold text-center mb-10">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition cursor-pointer group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition">
                {category.image}
              </div>
              <h3 className="text-blue-500 font-semibold mb-1">
                {category.name}
              </h3>
              <p className="text-sm text-gray-500">{category.items} items</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
