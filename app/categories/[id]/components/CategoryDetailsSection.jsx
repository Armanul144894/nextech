"use client"
import React, { useState } from 'react'
import OverviewTab from './OverviewTab';
import ProcessTab from './ProcessTab';
import PortfolioTab from './PortfolioTab';
import TestimonialsTab from './TestimonialsTab';
import PricingTab from './PricingTab';

export default function CategoryDetailsSection({selectedCategory}) {
  const [activeTab, setActiveTab] = useState("overview");
  
    return (
      <div>
        {/* Navigation Tabs */}
        <section className="px-6 border-b border-gray-700">
          <div className="container mx-auto">
            <div className="flex space-x-8 overflow-x-auto">
              {[
                "overview",
                "process",
                "portfolio",
                "testimonials",
                "pricing",
              ].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 transition-colors capitalize whitespace-nowrap ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-400"
                      : "border-transparent text-gray-400 hover:text-white"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </section>
  
        {/* Content Sections */}
        <div className="container mx-auto px-6 py-12">
          <OverviewTab
            selectedCategory={selectedCategory}
            activeTab={activeTab}
          ></OverviewTab>
  
          <ProcessTab
            activeTab={activeTab}
            selectedCategory={selectedCategory}
          ></ProcessTab>
  
          <PortfolioTab activeTab={activeTab}></PortfolioTab>
  
          <TestimonialsTab activeTab={activeTab}></TestimonialsTab>
  
          <PricingTab activeTab={activeTab}></PricingTab>
        </div>
      </div>
    );
}
