import React from "react";
import { ArrowRight, Check, Code, Smartphone, TrendingUp } from "./icons/allServiceIcon";
import Link from "next/link";

export default function DetailService() {

  const detailedServices = [
    {
      id:1,
      title: "Custom Web Development",
      description:
        "Build powerful, scalable web applications tailored to your business needs",
      icon: Code,
      features: [
        "React/Next.js",
        "Node.js Backend",
        "Database Design",
        "API Integration",
      ],
      price: "Starting at $5,000",
      duration: "4-8 weeks",
      gradient: "from-blue-500 to-purple-600",
      progress: 95,
      width: "w-[95%]"
    },
    {
      id:1,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      icon: Smartphone,
      features: [
        "React Native",
        "Flutter",
        "Native iOS/Android",
        "App Store Deployment",
      ],
      price: "Starting at $8,000",
      duration: "6-12 weeks",
      gradient: "from-green-500 to-blue-500",
      progress: 90,
      width: "w-[90%]"
    },
    {
      id:2,
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to grow your online presence",
      icon: TrendingUp,
      features: [
        "SEO Optimization",
        "Social Media",
        "PPC Campaigns",
        "Analytics",
      ],
      price: "Starting at $2,000/month",
      duration: "Ongoing",
      gradient: "from-purple-500 to-pink-500",
      progress: 75,
      width: "w-[75%]"
    },
  ];
  return (
    <section className="py-20 px-6 bg-gray-600/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Featured Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Detailed breakdown of our most popular service offerings
          </p>
        </div>

        <div className="space-y-12">
          {detailedServices.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 === 1;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6`}
                  >
                    <Icon size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-xl text-gray-400 mb-6">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <div className="text-green-400">
                          <Check />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="text-2xl font-bold text-blue-400">
                      {service.price}
                    </div>
                    <div className="text-gray-400">
                      Duration: {service.duration}
                    </div>
                  </div>

                  <Link href={`/services/${service.id}`}>
                  <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center">
                    Get Started <ArrowRight />
                  </button></Link>
                </div>

                <div className="flex-1">
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-3xl transform rotate-3 opacity-20`}
                    ></div>
                    <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700">
                      <div className="space-y-4">
                        <div
                          className={`h-6 bg-gradient-to-r ${service.gradient} rounded-full w-full opacity-80`}
                        ></div>
                        <div
                          className={`h-4 bg-gradient-to-r ${service.gradient} rounded-full w-3/4 opacity-60`}
                        ></div>
                        <div
                          className={`h-4 bg-gradient-to-r ${service.gradient} rounded-full w-1/2 opacity-40`}
                        ></div>
                        <div className="pt-6">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-gray-400">Progress</span>
                            <span className="text-blue-400 font-semibold">
                              {service.progress}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className={`bg-gradient-to-r ${service.gradient} h-2 rounded-full ${service.width} transition-all duration-1000`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
