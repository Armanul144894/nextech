import React from 'react'
import AboutHero from './components/AboutHero'
import AboutSection from './components/AboutSection'
import Stats from '../components/Stats'
import Features from '../components/Features'
import CTASection from '../components/CTASection'
export const metadata = {
  title: "NexTech | About",
  description: "Transforming businesses with innovative technology and strategic excellence",
};
export default function AboutUs() {
    
  return (
    <div className='min-h-screen bg-gray-800 text-white'>
        <AboutHero></AboutHero>
        <AboutSection></AboutSection>
        <Stats></Stats>
        <Features></Features>
        <CTASection></CTASection>
    </div>
  )
}
