import { ArrowRight } from "@/app/categories/components/icons/AllCategoryIcons";
import { TargetIcon } from "@/app/categories/components/icons/ServiceIcons";

export default function AboutMission() {
  return (
    <div>
      {/* Mission Section */}
      <div className="container mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={`transform transition-all duration-500`}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <TargetIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-semibold text-blue-400 tracking-wide uppercase">
                Our Mission
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Empowering Tomorrow,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Today
              </span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We are dedicated to creating innovative solutions that transform
              businesses and improve lives. Our mission is to bridge the gap
              between cutting-edge technology and human needs, delivering
              exceptional value through creativity, integrity, and unwavering
              commitment to excellence.
            </p>

            <div className="space-y-4">
              {[
                "Innovation-driven solutions",
                "Customer-centric approach",
                "Sustainable business practices",
                "Global impact focus",
              ].map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className={`transform transition-all duration-500 delay-200'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-3xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                <div className="text-6xl font-bold text-blue-400/20 mb-4">
                  01
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Our Purpose
                </h3>
                <p className="text-gray-300 mb-6">
                  To create meaningful impact through technology, fostering
                  innovation that drives positive change in businesses and
                  communities worldwide.
                </p>
                <div className="flex items-center text-blue-400 group cursor-pointer">
                  <span className="mr-2">Learn more about our journey</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
