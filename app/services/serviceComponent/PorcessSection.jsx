import React from "react";

export default function PorcessSection() {
  const process = [
    {
      step: "01",
      title: "Discovery",
      description: "We analyze your business needs and technical requirements",
    },
    {
      step: "02",
      title: "Strategy",
      description: "Develop a comprehensive roadmap and technical architecture",
    },
    {
      step: "03",
      title: "Development",
      description: "Build your solution using cutting-edge technologies",
    },
    {
      step: "04",
      title: "Launch",
      description: "Deploy, test, and optimize for peak performance",
    },
    {
      step: "05",
      title: "Support",
      description: "Ongoing maintenance and continuous improvement",
    },
  ];
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery
          </p>
        </div>

        <div className="relative">
          {/* Process Line */}
          <div className="absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative text-center group">
                <div className="relative z-10 mb-6">
                  <div className={`w-16 h-16  ${
                      index % 2 === 0 ? "" : "lg:mt-24"
                    } mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
