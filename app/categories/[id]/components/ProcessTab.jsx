import React from 'react'

export default function ProcessTab({activeTab,selectedCategory }) {
  return (
    <div>
                {/* Process Tab */}
                {activeTab === "process" && (
                  <div>
                    <h2 className="text-3xl font-bold mb-8">Our Development Process</h2>
                    <div className="space-y-8">
                      {[
                        {
                          step: 1,
                          title: "Discovery & Planning",
                          description:
                            "We start by understanding your requirements, goals, and constraints to create a detailed project plan.",
                          duration: "1-2 weeks",
                        },
                        {
                          step: 2,
                          title: "Design & Prototyping",
                          description:
                            "Creating wireframes, mockups, and interactive prototypes to visualize the final product.",
                          duration: "1-3 weeks",
                        },
                        {
                          step: 3,
                          title: "Development",
                          description:
                            "Building your solution using best practices, clean code, and modern technologies.",
                          duration: "4-12 weeks",
                        },
                        {
                          step: 4,
                          title: "Testing & Quality Assurance",
                          description:
                            "Rigorous testing to ensure your solution works flawlessly across all devices and scenarios.",
                          duration: "1-2 weeks",
                        },
                        {
                          step: 5,
                          title: "Deployment & Launch",
                          description:
                            "Deploying your solution to production and ensuring a smooth launch.",
                          duration: "1 week",
                        },
                        {
                          step: 6,
                          title: "Support & Maintenance",
                          description:
                            "Ongoing support and maintenance to keep your solution running optimally.",
                          duration: "Ongoing",
                        },
                      ].map((phase, index) => (
                        <div key={index} className="flex gap-6">
                          <div
                            className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r ${selectedCategory.gradient} flex items-center justify-center font-bold text-white`}
                          >
                            {phase.step}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold">{phase.title}</h3>
                              <span className="text-sm text-gray-400">
                                {phase.duration}
                              </span>
                            </div>
                            <p className="text-gray-300">{phase.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
    </div>
  )
}
