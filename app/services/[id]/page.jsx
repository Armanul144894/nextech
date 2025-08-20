import React from "react";
import ServiceDetailsHero from "./ServiceDetailsComponents/ServiceDetailsHero";
import {
  Brain,
  Cloud,
  Code,
  Shield,
} from "../serviceComponent/icons/allServiceIcon";

export default async function ServiceDetailsPage({ params }) {
  const { id } = await params;
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
  const serviceCategory = serviceCategories.find((p) => p.id === parseInt(id));
  return (
    <div className="min-h-screen bg-gray-800 text-white">
      <ServiceDetailsHero serviceCategory={serviceCategory}></ServiceDetailsHero>
    </div>
  );
}
