"use client";
import React, { useEffect, useState } from "react";
import CategorySection from "./CategorySection";

export default function FilterCategory() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  // SVG Icons

  const ArrowRight = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12,5 19,12 12,19"></polyline>
    </svg>
  );

  const Code = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="16,18 22,12 16,6"></polyline>
      <polyline points="8,6 2,12 8,18"></polyline>
    </svg>
  );

  const Smartphone = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
      <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
  );

  const Cloud = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18,10h-1.26A8,8 0 1 0,9,20h9a5,5 0 0 0,0-10z"></path>
    </svg>
  );

  const Shield = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12,22s8-4 8-10V5l-8-3-8,3v7c0,6 8,10 8,10z"></path>
    </svg>
  );

  const Brain = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12,1v6m0,6v6"></path>
      <path d="m15.5,3.5-3.5,3.5-3.5-3.5"></path>
      <path d="m20.5,8.5-3.5,3.5-3.5-3.5"></path>
    </svg>
  );

  const Palette = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="13.5" cy="6.5" r=".5"></circle>
      <circle cx="17.5" cy="10.5" r=".5"></circle>
      <circle cx="8.5" cy="7.5" r=".5"></circle>
      <circle cx="6.5" cy="12.5" r=".5"></circle>
      <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10c.926,0,1.648-.746,1.648-1.688,0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64,1.64 0 0 1,1.668-1.668h1.996c3.051,0,5.555-2.503,5.555-5.554C21.965,6.012,17.461,2,12,2z"></path>
    </svg>
  );

  const TrendingUp = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="23,6 13.5,15.5 8.5,10.5 1,18"></polyline>
      <polyline points="17,6 23,6 23,12"></polyline>
    </svg>
  );

  const Database = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
      <path d="M21,12c0,1.66-4,3-9,3s-9-1.34-9-3"></path>
      <path d="M3,5v14c0,1.66,4,3,9,3s9-1.34,9-3V5"></path>
    </svg>
  );

  const Users = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M17,21v-2a4,4 0 0 0-4-4H5a4,4 0 0 0-4,4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23,21v-2a4,4 0 0 0-3-3.87"></path>
      <path d="M16,3.13a4,4 0 0 1,0,7.75"></path>
    </svg>
  );

  const Globe = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12,2a15.3,15.3 0 0 1,4,10 15.3,15.3 0 0 1,-4,10 15.3,15.3 0 0 1,-4,-10 15.3,15.3 0 0 1,4,-10z"></path>
    </svg>
  );

  const Settings = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4,15a1.65,1.65 0 0 0,.33,1.82l.06.06a2,2 0 0 1,0,2.83 2,2 0 0 1-2.83,0l-.06-.06a1.65,1.65 0 0 0-1.82-.33 1.65,1.65 0 0 0-1,1.51V21a2,2 0 0 1-2,2 2,2 0 0 1-2-2v-.09A1.65,1.65 0 0 0,9,19.4a1.65,1.65 0 0 0-1.82.33l-.06.06a2,2 0 0 1-2.83,0 2,2 0 0 1,0-2.83l.06-.06a1.65,1.65 0 0 0,.33-1.82 1.65,1.65 0 0 0-1.51-1H3a2,2 0 0 1-2-2 2,2 0 0 1,2-2h.09A1.65,1.65 0 0 0,4.6,9a1.65,1.65 0 0 0-.33-1.82l-.06-.06a2,2 0 0 1,0-2.83 2,2 0 0 1,2.83,0l.06.06a1.65,1.65 0 0 0,1.82.33H9a1.65,1.65 0 0 0,1-1.51V3a2,2 0 0 1,2-2 2,2 0 0 1,2,2v.09a1.65,1.65 0 0 0,1,1.51 1.65,1.65 0 0 0,1.82-.33l.06-.06a2,2 0 0 1,2.83,0 2,2 0 0 1,0,2.83l-.06.06a1.65,1.65 0 0 0-.33,1.82V9a1.65,1.65 0 0 0,1.51,1H21a2,2 0 0 1,2,2 2,2 0 0 1-2,2h-.09a1.65,1.65 0 0 0-1.51,1z"></path>
    </svg>
  );

  const Zap = ({ size = 32 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
    </svg>
  );

  const categories = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Custom web applications, responsive websites, and modern web solutions",
      icon: Code,
      type: "development",
      gradient: "from-blue-500 to-cyan-500",
      projects: 125,
      technologies: ["React", "Next.js", "Vue.js", "Angular"],
      priceRange: "$3,000 - $25,000",
      timeline: "2-12 weeks",
    },
    {
      id: 2,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      icon: Smartphone,
      type: "development",
      gradient: "from-green-500 to-teal-500",
      projects: 89,
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
      priceRange: "$5,000 - $50,000",
      timeline: "4-16 weeks",
    },
    {
      id: 3,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure, migration, and DevOps solutions",
      icon: Cloud,
      type: "infrastructure",
      gradient: "from-purple-500 to-pink-500",
      projects: 67,
      technologies: ["AWS", "Azure", "GCP", "Docker"],
      priceRange: "$2,000 - $30,000",
      timeline: "1-8 weeks",
    },
    {
      id: 4,
      title: "Cybersecurity",
      description:
        "Security audits, penetration testing, and compliance solutions",
      icon: Shield,
      type: "security",
      gradient: "from-red-500 to-orange-500",
      projects: 45,
      technologies: ["Penetration Testing", "SOC", "SIEM", "Compliance"],
      priceRange: "$1,500 - $20,000",
      timeline: "1-6 weeks",
    },
    {
      id: 5,
      title: "AI & Machine Learning",
      description:
        "Artificial intelligence solutions, data analytics, and automation",
      icon: Brain,
      type: "ai",
      gradient: "from-indigo-500 to-purple-500",
      projects: 38,
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      priceRange: "$5,000 - $100,000",
      timeline: "6-24 weeks",
    },
    {
      id: 6,
      title: "UI/UX Design",
      description:
        "User interface design, user experience optimization, and prototyping",
      icon: Palette,
      type: "design",
      gradient: "from-pink-500 to-rose-500",
      projects: 156,
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
      priceRange: "$1,000 - $15,000",
      timeline: "1-8 weeks",
    },
    {
      id: 7,
      title: "Digital Marketing",
      description: "SEO, social media marketing, PPC campaigns, and analytics",
      icon: TrendingUp,
      type: "marketing",
      gradient: "from-yellow-500 to-orange-500",
      projects: 203,
      technologies: ["Google Ads", "Facebook Ads", "SEO Tools", "Analytics"],
      priceRange: "$1,000 - $10,000/month",
      timeline: "Ongoing",
    },
    {
      id: 8,
      title: "Data Management",
      description: "Database design, data migration, and business intelligence",
      icon: Database,
      type: "data",
      gradient: "from-cyan-500 to-blue-500",
      projects: 72,
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
      priceRange: "$2,000 - $25,000",
      timeline: "2-10 weeks",
    },
    {
      id: 9,
      title: "Consulting",
      description:
        "Technology consulting, digital transformation, and strategy",
      icon: Users,
      type: "consulting",
      gradient: "from-emerald-500 to-teal-500",
      projects: 94,
      technologies: ["Strategy", "Analysis", "Planning", "Implementation"],
      priceRange: "$150 - $500/hour",
      timeline: "1-12 weeks",
    },
    {
      id: 10,
      title: "E-commerce",
      description:
        "Online stores, payment integration, and marketplace solutions",
      icon: Globe,
      type: "ecommerce",
      gradient: "from-violet-500 to-purple-500",
      projects: 134,
      technologies: ["Shopify", "WooCommerce", "Magento", "Custom"],
      priceRange: "$3,000 - $40,000",
      timeline: "3-16 weeks",
    },
    {
      id: 11,
      title: "DevOps & Automation",
      description: "CI/CD pipelines, infrastructure automation, and monitoring",
      icon: Settings,
      type: "infrastructure",
      gradient: "from-slate-500 to-gray-600",
      projects: 58,
      technologies: ["Jenkins", "GitLab CI", "Terraform", "Ansible"],
      priceRange: "$2,500 - $35,000",
      timeline: "2-12 weeks",
    },
    {
      id: 12,
      title: "Performance Optimization",
      description: "Website speed optimization, code review, and system tuning",
      icon: Zap,
      type: "optimization",
      gradient: "from-amber-500 to-yellow-500",
      projects: 76,
      technologies: ["Lighthouse", "GTmetrix", "New Relic", "DataDog"],
      priceRange: "$1,000 - $15,000",
      timeline: "1-6 weeks",
    },
  ];

  const filterOptions = [
    { id: "all", label: "All Categories", count: categories.length },
    {
      id: "development",
      label: "Development",
      count: categories.filter((c) => c.type === "development").length,
    },
    {
      id: "infrastructure",
      label: "Infrastructure",
      count: categories.filter((c) => c.type === "infrastructure").length,
    },
    {
      id: "design",
      label: "Design",
      count: categories.filter((c) => c.type === "design").length,
    },
    {
      id: "marketing",
      label: "Marketing",
      count: categories.filter((c) => c.type === "marketing").length,
    },
    {
      id: "ai",
      label: "AI & ML",
      count: categories.filter((c) => c.type === "ai").length,
    },
  ];

  const filteredCategories = categories.filter((category) => {
    const matchesFilter = activeFilter === "all" || category.type === activeFilter;
    // const matchesSearch = category.title.toLowerCase().includes(searchTerm.toLowerCase()) || category.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter;
  });

  return (
    <div>
      <section className="py-8 px-6 border-b border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {filter.label}
                <span className="ml-2 text-sm opacity-75">
                  ({filter.count})
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CategorySection
        filteredCategories={filteredCategories}
      ></CategorySection>
    </div>
  );
}
