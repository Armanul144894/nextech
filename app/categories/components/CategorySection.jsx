"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function CategorySection({filteredCategories}) {
  // SVG Icons

  const ArrowRight = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12,5 19,12 12,19"></polyline>
    </svg>
  );

  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.id}
                  className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 p-6">
                    {/* Icon and Title */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={32} />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-400">
                          {category.projects}
                        </div>
                        <div className="text-xs text-gray-400">Projects</div>
                      </div>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="text-xs text-gray-500 mb-2">
                        Technologies:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        {category.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-700 rounded-full text-xs text-gray-300">
                            +{category.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Pricing and Timeline */}
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          Price Range:
                        </span>
                        <span className="text-sm font-semibold text-green-400">
                          {category.priceRange}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">Timeline:</span>
                        <span className="text-sm font-semibold text-blue-400">
                          {category.timeline}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link href={`/categories/${category.id}`}>
                    <button className="w-full py-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl font-semibold group-hover:from-blue-500 group-hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                      Learn More
                      <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                        <ArrowRight />
                      </div>
                    </button></Link>
                  </div>

                  {/* Hover Effect Overlay */}
                  {hoveredCategory === category.id && (
                    <div className="absolute inset-0 border-2 border-blue-500/50 rounded-2xl pointer-events-none"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No categories found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
