import React from "react";
import { CheckCircle } from "../../components/icons/AllCategoryIcons";

export default function OverviewTab({activeTab,selectedCategory}) {
  return (
    <div>
      {/* Overview Tab */}
      {activeTab === "overview" && (
        <div className="space-y-12">
          {/* Technologies */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {selectedCategory.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-4 text-center border border-gray-700 hover:border-blue-500 transition-colors"
                >
                  <div className="text-lg font-semibold">{tech}</div>
                </div>
              ))}
            </div>
          </div>

          {/* What We Deliver */}
          <div>
            <h2 className="text-3xl font-bold mb-8">What We Deliver</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  "Custom solutions tailored to your needs",
                  "Scalable and maintainable code",
                  "Responsive and modern design",
                  "Performance optimization",
                  "Security best practices",
                  "Comprehensive documentation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Key Benefits
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>• Increased efficiency and productivity</li>
                  <li>• Enhanced user experience</li>
                  <li>• Reduced operational costs</li>
                  <li>• Competitive advantage</li>
                  <li>• Future-proof solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
