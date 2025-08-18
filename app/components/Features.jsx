import React from 'react'

export default function Features() {

  return (
    <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Why Choose Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation First',
                description: 'We stay ahead of the curve with the latest technologies and methodologies',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Client-Centric',
                description: 'Your success is our priority. We tailor solutions to your unique needs',
                color: 'from-purple-500 to-pink-500'
              },
              {
                title: 'Proven Results',
                description: 'Track record of delivering exceptional outcomes for businesses worldwide',
                color: 'from-green-500 to-teal-500'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gray-800 border border-gray-700 hover:border-transparent transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
