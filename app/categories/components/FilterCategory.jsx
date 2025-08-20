"use client";
import React, { useEffect, useState } from "react";
import CategorySection from "./CategorySection";
import {
  Brain,
  Cloud,
  Code,
  Database,
  Globe,
  Palette,
  Settings,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
} from "./icons/AllCategoryIcons";

export default function FilterCategory() {
  const [activeFilter, setActiveFilter] = useState("all");

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
    const matchesFilter =
      activeFilter === "all" || category.type === activeFilter;
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
