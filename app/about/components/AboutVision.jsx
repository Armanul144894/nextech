
import React from 'react'
import { EyeIcon } from './icons/AboutIcon'
import { RocketIcon } from '@/app/categories/components/icons/ProcessIcons'

export default function AboutVision() {
  return (
    <div>
        {/* Vision Section */}
      <div className="py-20 px-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`md:order-2 transform transition-all duration-500 '}`}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <EyeIcon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-semibold text-purple-400 tracking-wide uppercase">
                  Our Vision
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Building the <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Future</span> Together
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                To be the world's most trusted partner in digital transformation, pioneering breakthrough technologies that create lasting positive change. We envision a future where technology seamlessly enhances human potential and creates opportunities for everyone to thrive.
              </p>
              
              <div className="space-y-4">
                {["Global technology leadership", "Inclusive innovation", "Environmental responsibility", "Community empowerment"].map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`md:order-1 transform transition-all duration-500 delay-200'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-3xl blur-xl"></div>
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                  <div className="text-6xl font-bold text-purple-400/20 mb-4">02</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Future Forward</h3>
                  <p className="text-gray-300 mb-6">
                    We're not just adapting to the future – we're actively creating it. Our vision drives us to push boundaries and explore new possibilities.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <RocketIcon className="w-5 h-5 text-purple-400" />
                      <span className="text-sm text-gray-400">Innovation Pipeline</span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">2030</div>
                      <div className="text-xs text-gray-400">Target Year</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
