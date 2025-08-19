import HeroSection from "./components/HeroSection";
import Category from "./components/Category";
import Service from "./components/Service";
import AboutUs from "./components/AboutUs";
import Stats from "./components/Stats";
import Features from "./components/Features";
import CTASection from "./components/CTASection";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-800 text-white overflow-x-hidden">
      <HeroSection></HeroSection>
      <Category></Category>
      <Service></Service>
      <AboutUs></AboutUs>
      <Stats></Stats>
      <Features></Features>
      <CTASection></CTASection>
    </div>
  );
}
