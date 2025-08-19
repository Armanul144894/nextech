import React from "react";
import { CheckmarkIcon, LightningIcon, SmileyIcon, TargetIcon } from "./icons/ServiceIcons";

export default function StatisticsSection() {

const statsData = [
  {
    number: "12+",
    label: "Service Categories",
    icon: TargetIcon,
    description: "Comprehensive service offerings"
  },
  {
    number: "1,200+",
    label: "Projects Completed",
    icon: CheckmarkIcon,
    description: "Successfully delivered projects"
  },
  {
    number: "500+",
    label: "Happy Clients",
    icon: SmileyIcon,
    description: "Satisfied customers worldwide"
  },
  {
    number: "50+",
    label: "Technologies",
    icon: LightningIcon,
    description: "Cutting-edge tech stack"
  },
];
  return (
    <div>
      {/* Statistics Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, index) => {
                const IconComponent = stat.icon;
                return(
              <div key={index} className="group text-center">
                <IconComponent size={64} className="mx-auto mb-5"/>
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            )})}
          </div>
        </div>
      </section>
    </div>
  );
}
