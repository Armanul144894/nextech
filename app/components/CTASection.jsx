import Link from 'next/link'
import React from 'react'

export default function CTASection() {

  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join hundreds of successful companies that trust us with their digital transformation journey
          </p>
          <Link href={"/contact"}>
          <button className="px-12 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25">
            Start Your Journey
          </button>
          </Link>
        </div>
      </section>
  )
}
