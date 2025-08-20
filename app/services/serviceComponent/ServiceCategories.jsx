import Link from "next/link";
import { Brain, Cloud, Code, Shield } from "./icons/allServiceIcon";

export default function ServiceCategories() {
  // SVG Icons

  const serviceCategories = [
    {
      id: 1,
      title: "Development",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      services: [
        "Web Development",
        "Mobile Apps",
        "Custom Software",
        "API Development",
      ],
    },
    {
      id: 2,
      title: "Cloud & Infrastructure",
      icon: Cloud,
      gradient: "from-green-500 to-teal-500",
      services: [
        "Cloud Migration",
        "DevOps Solutions",
        "Infrastructure Setup",
        "Monitoring & Support",
      ],
    },
    {
      id: 3,
      title: "Security",
      icon: Shield,
      gradient: "from-purple-500 to-pink-500",
      services: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Solutions",
        "Risk Assessment",
      ],
    },
    {
      id: 4,
      title: "AI & Analytics",
      icon: Brain,
      gradient: "from-orange-500 to-red-500",
      services: [
        "Machine Learning",
        "Data Analytics",
        "AI Automation",
        "Business Intelligence",
      ],
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Service Categories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive range of services across different domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index}>
                <Link href={`/services/${category.id}`}>
                  <div
                    className={`group relative p-8 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-90 hover:opacity-100 transform hover:scale-105 transition-all duration-500 cursor-pointer`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                    <div className="relative z-10">
                      <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon size={48} />
                      </div>
                      <h3 className="text-xl font-bold mb-4">
                        {category.title}
                      </h3>
                      <ul className="space-y-2 text-white/80 text-sm">
                        {category.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="flex items-center">
                            <div className="w-1 h-1 bg-white/60 rounded-full mr-3"></div>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
