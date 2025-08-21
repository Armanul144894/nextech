import React from "react";
import { Brain, Cloud, Code } from "../services/serviceComponent/icons/allServiceIcon";
import Link from "next/link";
import { ShieldIcon } from "../about/components/icons/AboutIcon";
import { Shield } from "./icons/allIcons";

export default function Service() {
  // SVG Icons as components

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


  const services = [
    {
      id:1,
      title: "Development",
      description:
        "Transform your business with cutting-edge digital solutions",
      icon: Code,
      gradient: "from-blue-400 to-blue-600",
    },
    {
      id:2,
      title: "Cloud & Infrastructure",
      description: "Scalable cloud infrastructure for modern businesses",
      icon: Cloud,
      gradient: "from-green-400 to-green-600",
    },
    {
      id:3,
      title: "Security",
      description: "Protect your digital assets with enterprise-grade security",
      icon: Shield,
      gradient: "from-purple-400 to-purple-600",
    },
    {
      id:4,
      title: "AI & Analytics",
      description: "Leverage artificial intelligence to automate and optimize",
      icon: Brain,
      gradient: "from-orange-400 to-orange-600",
    },
  ];
  return (
    <section id="services" className="py-20 px-6 bg-gray-700/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <Link href={`/services/${service.id}`}>
                      <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
