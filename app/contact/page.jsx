import React from 'react'
import ContactHero from './contactComponent/ContactHero'
import ContactSection from './contactComponent/ContactSection'
export const metadata = {
  title: "NexTech | Contact",
  description: "Transforming businesses with innovative technology and strategic excellence",
};
export default function Contact() {
  return (
    <div className='min-h-screen bg-gray-100 text-white'>
        <ContactHero></ContactHero>
        <ContactSection></ContactSection>
    </div>
  )
}
