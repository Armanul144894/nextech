import React from 'react'
import { GlobeIcon, HeartIcon, ShieldIcon, UsersIcon, ZapIcon } from './icons/AboutIcon';

export default function AboutValues() {
    const values = [
    {
      icon: ShieldIcon,
      title: "Integrity & Trust",
      description: "We build lasting relationships through honesty, transparency, and ethical practices in everything we do."
    },
    {
      icon: ZapIcon,
      title: "Innovation & Excellence",
      description: "We push boundaries and strive for perfection, delivering cutting-edge solutions that exceed expectations."
    },
    {
      icon: UsersIcon,
      title: "Collaboration & Respect",
      description: "We believe in the power of teamwork and treat every individual with dignity and respect."
    },
    {
      icon: GlobeIcon,
      title: "Global Impact",
      description: "We create solutions that make a positive difference in communities around the world."
    }
  ];
  return (
    <div>
        <div className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <HeartIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-semibold text-green-400 tracking-wide uppercase">
                Our Values
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Principles</span> That Guide Us
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Our values form the foundation of everything we do. They guide our decisions, shape our culture, and define our relationships with clients, partners, and communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
