"use client";
import React, { useState, useEffect, use } from "react";
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
  CheckCircle,
} from "../components/icons/AllCategoryIcons";
import CategoryDetailsCta from "./components/CategoryDetailsCta";
import CategoryDetailsSection from "./components/CategoryDetailsSection";

export default function CategoryDetailsPage({ params }) {
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

  const [selectedCategory, setSelectedCategory] = useState(null);

  // Unwrap the params Promise
  const resolvedParams = use(params);

  useEffect(() => {
    // Extract the category ID from params - adjust the key name based on your routing
    // Common patterns: resolvedParams.id, resolvedParams.categoryId, resolvedParams.slug
    const categoryId = resolvedParams?.id || resolvedParams?.categoryId; // Adjust this based on your route parameter name

    if (categoryId) {
      // Convert string to number for comparison
      const category = categories.find(
        (cat) => cat.id === parseInt(categoryId, 10)
      );
      setSelectedCategory(category || null);
    }
  }, [resolvedParams]);

  // Show loading or error state if no category is found
  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <p className="text-gray-400">
            The requested category could not be found.
          </p>
        </div>
      </div>
    );
  }

  const Icon = selectedCategory.icon;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div
            className={`absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r ${selectedCategory.gradient} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse`}
          ></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        </div>

        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${selectedCategory.gradient} mb-6`}
            >
              <Icon size={40} />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {selectedCategory.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              {selectedCategory.description}
            </p>

            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">
                  {selectedCategory.projects}+
                </div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">4.9/5</div>
                <div className="text-gray-400">Client Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">
                  {selectedCategory.timeline}
                </div>
                <div className="text-gray-400">Timeline</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">
                  {selectedCategory.priceRange}
                </div>
                <div className="text-gray-400">Price Range</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CategoryDetailsSection
        selectedCategory={selectedCategory}
      ></CategoryDetailsSection>

      <CategoryDetailsCta
        selectedCategory={selectedCategory}
      ></CategoryDetailsCta>
    </div>
  );
}
