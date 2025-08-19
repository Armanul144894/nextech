import Link from "next/link";
import React from "react";

export default function CallSection() {
  return (
    <div>
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Choose from our comprehensive service categories and let's build
            something amazing together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/contact"}>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
                Get Free Consultation
              </button>
            </Link>
            <Link href={"/service"}>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Services
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
