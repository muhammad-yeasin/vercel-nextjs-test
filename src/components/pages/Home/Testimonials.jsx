import React from "react";
import { Star, MapPin } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing quality and fast shipping! The customer service team was incredibly helpful.",
      location: "New York, USA",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Best online shopping experience I've had. Products exactly as described.",
      location: "Los Angeles, USA",
    },
    {
      name: "Emma Williams",
      rating: 4,
      text: "Great variety of products and competitive prices. Will definitely shop again!",
      location: "London, UK",
    },
  ];
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-purple-200 rounded-full flex items-center justify-center font-bold text-purple-600">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
