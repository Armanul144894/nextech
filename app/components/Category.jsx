"use client";
import React, { useState } from "react";

export default function Category() {
  // SVG Icons as components

  const Zap = ({ size = 24 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
    </svg>
  );

  const Shield = ({ size = 24 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12,22s8-4 8-10V5l-8-3-8,3v7c0,6 8,10 8,10z"></path>
    </svg>
  );

  const Globe = ({ size = 24 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12,2a15.3,15.3 0 0 1 4,10 15.3,15.3 0 0 1 -4,10 15.3,15.3 0 0 1 -4,-10 15.3,15.3 0 0 1 4,-10z"></path>
    </svg>
  );

  const Award = ({ size = 24 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="8" r="7"></circle>
      <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88"></polyline>
    </svg>
  );

  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    { name: "Technology", icon: Zap, color: "from-blue-500 to-purple-600" },
    { name: "Security", icon: Shield, color: "from-green-500 to-teal-600" },
    { name: "Global Reach", icon: Globe, color: "from-orange-500 to-red-600" },
    { name: "Excellence", icon: Award, color: "from-purple-500 to-pink-600" },
  ];

  return (
    <section id="categories" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the areas where we excel and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${category.color} opacity-90 hover:opacity-100 transform hover:scale-105 transition-all duration-500 cursor-pointer`}
                onMouseEnter={() => setActiveCategory(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                <div className="relative z-10">
                  <Icon
                    size={48}
                    className="mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/80 text-sm">
                    Leading the industry with innovative{" "}
                    {category.name.toLowerCase()} solutions
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
