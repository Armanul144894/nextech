import React from 'react'
import { HeartIcon, LightbulbIcon, StarIcon, UsersIcon } from './icons/AboutIcon';

export default function AboutStats() {
    const stats = [
    { number: "500+", label: "Projects Completed", icon: StarIcon },
    { number: "50+", label: "Team Members", icon: UsersIcon },
    { number: "98%", label: "Client Satisfaction", icon: HeartIcon },
    { number: "15+", label: "Years Experience", icon: LightbulbIcon }
  ];
  return (
    <div>
        <div className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-4 group-hover:text-purple-400 transition-colors duration-300" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
