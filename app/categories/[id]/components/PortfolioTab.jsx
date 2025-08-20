import React from "react";
import { Star } from "../../components/icons/AllCategoryIcons";

export default function PortfolioTab({activeTab}) {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform Redesign",
      client: "TechCorp Inc.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      rating: 5,
      completed: "2024",
      technologies: ["React", "Next.js", "Stripe"],
    },
    {
      id: 2,
      title: "Corporate Website Development",
      client: "StartupXYZ",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      rating: 5,
      completed: "2024",
      technologies: ["Vue.js", "Node.js", "MongoDB"],
    },
    {
      id: 3,
      title: "Real Estate Portal",
      client: "PropertyPro",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      rating: 4,
      completed: "2023",
      technologies: ["Angular", "PostgreSQL", "AWS"],
    },
  ];
  return (
    <div>
      {/* Portfolio Tab */}
      {activeTab === "portfolio" && (
        <div>
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.client}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(project.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-400">
                      {project.completed}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
