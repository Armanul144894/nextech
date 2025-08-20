import React from "react";
import { CheckCircle } from "../../components/icons/AllCategoryIcons";

export default function PricingTab({ activeTab }) {
  return (
    <div>
      {/* Pricing Tab */}
      {activeTab === "pricing" && (
        <div>
          <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$3,000",
                description: "Perfect for small projects and startups",
                features: [
                  "Basic functionality",
                  "Responsive design",
                  "3 months support",
                  "Basic SEO optimization",
                ],
              },
              {
                name: "Professional",
                price: "$10,000",
                description: "Ideal for growing businesses",
                features: [
                  "Advanced functionality",
                  "Custom design",
                  "6 months support",
                  "Advanced SEO optimization",
                  "Third-party integrations",
                  "Performance optimization",
                ],
              },
              {
                name: "Enterprise",
                price: "$25,000+",
                description: "For large-scale enterprise solutions",
                features: [
                  "Complex functionality",
                  "Premium design",
                  "12 months support",
                  "Enterprise SEO",
                  "Custom integrations",
                  "Advanced analytics",
                  "Priority support",
                  "Scalable architecture",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-xl p-6 border ${
                  index === 1 ? "border-blue-500 relative" : "border-gray-700"
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-blue-400 mb-4">
                  {plan.price}
                </div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="text-green-500" size={16} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="">
                  <button
                    onClick={() => setShowQuoteModal(true)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      index === 1
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
