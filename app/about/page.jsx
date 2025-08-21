import React from 'react'
import AboutHero from './components/AboutHero'
import AboutSection from './components/AboutSection'
import Stats from '../components/Stats'
import Features from '../components/Features'
import CTASection from '../components/CTASection'
import AboutMission from './components/AboutMission'
import AboutVision from './components/AboutVision'
import AboutValues from './components/AboutValues'
import AboutStats from './components/AboutStats'
export const metadata = {
  title: "NexTech | About",
  description: "Transforming businesses with innovative technology and strategic excellence",
};
export default function AboutUs() {
    
  return (
    <div className='min-h-screen bg-gray-800 text-white'>
        <AboutHero/>
        <AboutSection/>
        <AboutStats/>
        <AboutMission/>
        <AboutVision/>
        <AboutValues/>
        {/* <Features/> */}
        <CTASection/>
    </div>
  )
}
