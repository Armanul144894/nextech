import React from 'react'

export default function TechnologySection() {
  const technologies=  [
              { name: 'React', category: 'Frontend', color: 'from-blue-400 to-blue-600' },
              { name: 'Next.js', category: 'Frontend', color: 'from-blue-300 to-blue-800' },
              { name: 'Node.js', category: 'Backend', color: 'from-green-400 to-green-600' },
              { name: 'Python', category: 'AI/ML', color: 'from-yellow-400 to-orange-500' },
              { name: 'AWS', category: 'Cloud', color: 'from-orange-400 to-red-500' },
              { name: 'Docker', category: 'DevOps', color: 'from-blue-500 to-cyan-500' },
              { name: 'MongoDB', category: 'Database', color: 'from-green-500 to-teal-500' },
              { name: 'Flutter', category: 'Mobile', color: 'from-blue-400 to-indigo-500' },
              { name: 'Figma', category: 'Design', color: 'from-purple-400 to-pink-500' },
              { name: 'TensorFlow', category: 'AI/ML', color: 'from-orange-500 to-red-600' },
              { name: 'Kubernetes', category: 'DevOps', color: 'from-blue-600 to-purple-600' },
              { name: 'PostgreSQL', category: 'Database', color: 'from-blue-500 to-blue-700' }
            ]
  return (
    <div>
        {/* Technology Stack */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Cutting-edge technologies across all our service categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group text-center"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl font-bold text-white uppercase">
                    {tech.name.charAt(0)}
                  </span>
                </div>
                <h4 className="font-semibold mb-1 text-black">{tech.name}</h4>
                <p className="text-sm text-gray-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
