"use client";
import React, { useState } from "react";

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState(0);
  const Faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 8-16 weeks.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer comprehensive support packages including maintenance, updates, and technical assistance.",
    },
    {
      question: "Can you work with existing systems?",
      answer:
        "Absolutely! We specialize in integrating with existing infrastructure and can modernize legacy systems.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We use cutting-edge technologies including React, Next.js, Node.js, Python, AWS, and many others based on project needs.",
    },
  ];
  return (
    <section className="py-20 px-6 bg-gray-600/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {Faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => setActiveTab(activeTab === index ? -1 : index)}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <div
                  className={`transform transition-transform duration-300 ${
                    activeTab === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </div>
              </button>
              {activeTab === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
