import React from "react";
import { Star } from "../../components/icons/AllCategoryIcons";

export default function TestimonialsTab({ activeTab }) {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      rating: 5,
      text: "Exceptional work! The team delivered our project on time and exceeded our expectations. The attention to detail was remarkable.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b766?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "StartupXYZ",
      rating: 5,
      text: "Professional, reliable, and innovative. They transformed our vision into reality with cutting-edge technology.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    },
  ];
  return (
    <div>
      {/* Testimonials Tab */}
      {activeTab === "testimonials" && (
        <div>
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
