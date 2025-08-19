import React from 'react'
import CategoryHero from './components/CategoryHero'
import FilterCategory from './components/FilterCategory';
import StatisticsSection from './components/StatisticsSection';
import PopularCategory from './components/PopularCategory';
import TechnologySection from './components/TechnologySection';
import ProcessSection from './components/ProcessSection';
import CallSection from './components/CallSection';
import ContactSection from './components/ContactSection';

export const metadata = {
  title: "NexTech | Categories",
  description: "Transforming businesses with innovative technology and strategic excellence",
};
export default function page() {
  return (
    <div className='min-h-screen bg-gray-100 text-white'>
        <CategoryHero></CategoryHero>
        <FilterCategory></FilterCategory>
        <StatisticsSection></StatisticsSection>
        <PopularCategory></PopularCategory>
        <TechnologySection></TechnologySection>
        <ProcessSection></ProcessSection>
        <CallSection></CallSection>
        <ContactSection/>
    </div>
  )
}
