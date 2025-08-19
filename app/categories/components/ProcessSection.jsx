import React from "react";
import {
  ClipboardIcon,
  GearIcon,
  RocketIcon,
  SearchIcon,
} from "./icons/ProcessIcons";
import { CheckmarkIcon } from "./icons/ServiceIcons";

export default function ProcessSection() {
  const allProcess = [
    {
      step: "01",
      title: "Consultation & Analysis",
      description:
        "We analyze your requirements and recommend the best category and approach for your project.",
      iconType: "search",
      icon: SearchIcon,
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "Develop a comprehensive roadmap with timelines, milestones, and resource allocation.",
      iconType: "clipboard",
      icon: ClipboardIcon,
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      step: "03",
      title: "Design & Development",
      description:
        "Execute the project using best practices and cutting-edge technologies.",
      iconType: "gear",
      icon: GearIcon,
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing to ensure quality, performance, and security standards.",
      iconType: "checkmark",
      icon: CheckmarkIcon,
      gradient: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      step: "05",
      title: "Deployment & Support",
      description:
        "Launch your solution and provide ongoing support and maintenance.",
      iconType: "rocket",
      icon: RocketIcon,
      gradient: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
  ];

  return (
    <div>
      <section className="py-20 px-6 bg-gray-800/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              How We Work
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our streamlined process ensures quality delivery across all
              categories
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Process Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 hidden lg:block"></div>

            <div className="space-y-12">
              {allProcess.map((process, index) => {
                const ProcessIcon = process.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    } gap-8`}
                  >
                    <div className="flex-1">
                      <div
                        className={`p-8 rounded-2xl bg-gray-800 border border-gray-700 ${
                          index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                        }`}
                      >
                        <div
                          className={` ${
                            index % 2 === 0
                              ? "lg:flex flex-col justify-start items-end"
                              : "lg:flex flex-col justify-start items-start"
                          }`}
                        >
                          <div>
                            <ProcessIcon className="mb-3" />
                          </div>
                          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {process.step}
                          </div>
                          <h3 className="text-xl font-bold mb-3">
                            {process.title}
                          </h3>
                          <p className="text-gray-400">{process.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className="hidden lg:block">
                      <div
                        className={`w-16 h-16 ${
                          index % 2 === 0 ? "lg:me-[80px]" : "lg:ms-[80px]"
                        } rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold shadow-lg`}
                      >
                        {process.step}
                      </div>
                    </div>

                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
