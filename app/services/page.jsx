
import React from 'react'
import HeroSection from './serviceComponent/HeroSection'
import ServiceCategories from './serviceComponent/ServiceCategories'
import DetailService from './serviceComponent/DetailService'
import PorcessSection from './serviceComponent/PorcessSection'
import PricingService from './serviceComponent/PricingService'
import Testimonial from './serviceComponent/Testimonial'
import FAQSection from './serviceComponent/FAQSection'
import CTASection from '../components/CTASection'

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-800 text-white">
        <HeroSection></HeroSection>
        <ServiceCategories></ServiceCategories>
        <DetailService></DetailService>
        <PorcessSection></PorcessSection>
        <PricingService></PricingService>
        <Testimonial></Testimonial>
        <FAQSection></FAQSection>
        <CTASection></CTASection>
    </div>
  )
}
