import React from 'react'
import CategoryHero from './components/CategoryHero'

export const metadata = {
  title: "NexTech | Categories",
  description: "Transforming businesses with innovative technology and strategic excellence",
};
export default function page() {
  return (
    <div className='min-h-screen bg-gray-100 text-white'>
        <CategoryHero></CategoryHero>
    </div>
  )
}
