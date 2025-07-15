import React from 'react'
import Hero from '../components/Hero'
import TravelPlannerSection from '../components/TravelPlannerSection'
import InteractiveMap from '../components/InteractiveMap'
import ItineraryBuilder from '../components/ItineraryBuilder'
import RecommendationGrid from '../components/Recommendation'
import Faq from '../components/Faq'
import LocalSecrets from "../components/LocalSecrets"
import GuidBy from '../components/GuidBy'

function HomePage() {
  return (
    <div className='container max-w-[1200px] mx-auto'>
      <Hero/>
      <hr></hr>
      <TravelPlannerSection/>
      <InteractiveMap/>
      <ItineraryBuilder/>
      <hr />
      <LocalSecrets/>
      <hr></hr>
      <GuidBy/>
      <hr />
      <RecommendationGrid/>
      <hr></hr>
      <Faq/>
    </div>
  )
}

export default HomePage