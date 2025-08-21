import React from "react";
import { AwardIcon, GlobeIcon, UsersIcon } from "./icons/AboutIcon";

export default function AboutSection() {

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              About NexTech
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We are pioneers in digital transformation, combining cutting-edge
              technology with strategic thinking to help businesses thrive in
              the digital age.
            </p>
            <div className="space-y-6">
              {[
                { icon: UsersIcon, text: "500+ Happy Clients", number: "500+" },
                { icon: AwardIcon, text: "Industry Awards", number: "25+" },
                { icon: GlobeIcon, text: "Countries Served", number: "40+" },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <Icon size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">
                        {stat.number}
                      </div>
                      <div className="text-gray-400">{stat.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-6"></div>
            <div className="relative bg-gray-800 rounded-3xl p-8 border border-gray-700">
              <div className="space-y-4">
                <div className="h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-3/4"></div>
                <div className="h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-1/2"></div>
                <div className="h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-5/6"></div>
                <div className="mt-8 text-center">
                  <div className="text-3xl font-bold mb-2">Innovation</div>
                  <div className="text-gray-400">
                    At the heart of everything we do
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
