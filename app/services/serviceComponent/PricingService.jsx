import React from "react";
import { Check } from "./icons/allServiceIcon";

export default function PricingService() {
 
  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small businesses getting started",
      features: [
        "Basic Website Development",
        "Mobile Responsive Design",
        "Basic SEO Setup",
        "3 Months Support",
        "Contact Form Integration",
      ],
      popular: false,
      gradient: "from-gray-700 to-gray-800",
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "one-time",
      description: "Ideal for growing businesses",
      features: [
        "Custom Web Application",
        "Advanced Features",
        "Database Integration",
        "API Development",
        "6 Months Support",
        "Performance Optimization",
        "Security Implementation",
      ],
      popular: true,
      gradient: "from-blue-600 to-purple-700",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "Comprehensive solutions for large organizations",
      features: [
        "Full-Stack Development",
        "Cloud Infrastructure",
        "Advanced Security",
        "AI Integration",
        "12 Months Support",
        "Dedicated Team",
        "Priority Support",
        "Custom Integrations",
      ],
      popular: false,
      gradient: "from-purple-600 to-pink-700",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-600/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Flexible pricing options to suit businesses of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-500 hover:transform hover:scale-105 ${
                plan.popular
                  ? "border-blue-500 bg-gradient-to-br from-blue-900/30 to-purple-900/30"
                  : "border-gray-700 bg-gray-800/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {plan.price}
                </div>
                <div className="text-gray-400">{plan.period}</div>
                <p className="text-gray-400 mt-4">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center space-x-3"
                  >
                    <div className="text-green-400 flex-shrink-0">
                      <Check />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 shadow-lg"
                    : "border border-gray-600 hover:bg-white/10"
                }`}
              >
                {plan.price === "Custom" ? "Contact Us" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
