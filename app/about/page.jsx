import React from 'react'
import AboutHero from './components/AboutHero'
import AboutSection from './components/AboutSection'
import Stats from '../components/Stats'
import Features from '../components/Features'
import CTASection from '../components/CTASection'

export default function AboutUs() {
  return (
    <div className='min-h-screen bg-gray-100 text-white'>
        <AboutHero></AboutHero>
        <AboutSection></AboutSection>
        <Stats></Stats>
        <Features></Features>
        <CTASection></CTASection>
    </div>
  )
}
