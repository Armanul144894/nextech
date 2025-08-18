"use client";
import React, { useEffect, useState } from "react";

export default function ServiceCategories() {
  // SVG Icons

  const Code = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="16,18 22,12 16,6"></polyline>
      <polyline points="8,6 2,12 8,18"></polyline>
    </svg>
  );

  const Cloud = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18,10h-1.26A8,8 0 1 0,9,20h9a5,5 0 0 0,0-10z"></path>
    </svg>
  );

  const Shield = ({ size = 32 }) => (
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

  const Brain = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9.5,2A2.5,2.5 0 0,1 12,4.5c0,0.44-0.06,0.86-0.17,1.25C13.18,5.28 14.5,4 16,4c1.66,0 3,1.34 3,3c0,0.24-0.03,0.47-0.09,0.7C19.81,8.25 20.5,9.55 20.5,11c0,1.66-1.34,3-3,3c-0.22,0-0.43-0.02-0.64-0.06c-0.1,0.64-0.29,1.25-0.56,1.81C17.18,16.5 17.77,17.2 18,18c0.39,1.36-0.47,2.75-1.92,3.11c-0.48,0.12-0.98,0.06-1.42-0.17c-0.44,0.23-0.94,0.29-1.42,0.17C11.79,20.75 10.92,19.36 11.31,18c0.23-0.8 0.82-1.5 1.69-1.75c-0.27-0.56-0.46-1.17-0.56-1.81C12.23,14.48 12.02,14.5 11.8,14.5c-1.66,0-3-1.34-3-3c0-1.45 0.69-2.75 1.59-3.3C10.33,7.97 10.3,7.74 10.3,7.5c0-1.66 1.34-3 3-3c1.5,0 2.82,1.28 3.17,2.75C16.58,6.86 16.72,6.44 16.72,6c0-1.66 1.34-3 3-3s3,1.34 3,3c0,0.86-0.36,1.63-0.94,2.17c0.11,0.38 0.17,0.8 0.17,1.25c0,2.5-2,4.5-4.5,4.5A2.5,2.5 0 0,1 15,11.5c0-0.44 0.06-0.86 0.17-1.25C13.82,9.72 12.5,11 11,11c-1.66,0-3-1.34-3-3c0-0.24 0.03-0.47 0.09-0.7C7.19,6.75 6.5,5.45 6.5,4c0-1.66 1.34-3 3-3z"></path>
    </svg>
  );

  const serviceCategories = [
    {
      title: "Development",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      services: [
        "Web Development",
        "Mobile Apps",
        "Custom Software",
        "API Development",
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      gradient: "from-green-500 to-teal-500",
      services: [
        "Cloud Migration",
        "DevOps Solutions",
        "Infrastructure Setup",
        "Monitoring & Support",
      ],
    },
    {
      title: "Security",
      icon: Shield,
      gradient: "from-purple-500 to-pink-500",
      services: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Solutions",
        "Risk Assessment",
      ],
    },
    {
      title: "AI & Analytics",
      icon: Brain,
      gradient: "from-orange-500 to-red-500",
      services: [
        "Machine Learning",
        "Data Analytics",
        "AI Automation",
        "Business Intelligence",
      ],
    },
  ];

  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Service Categories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive range of services across different domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-90 hover:opacity-100 transform hover:scale-105 transition-all duration-500 cursor-pointer`}
                onMouseEnter={() => setHoveredService(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                <div className="relative z-10">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={48} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <ul className="space-y-2 text-white/80 text-sm">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center">
                        <div className="w-1 h-1 bg-white/60 rounded-full mr-3"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
