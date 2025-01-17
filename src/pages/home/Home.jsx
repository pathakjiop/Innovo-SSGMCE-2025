import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Collaboration from '../../components/Collaboration'
import Services from '../../components/Services'
import ContactUS from '../../components/Pricing'
import Roadmap from '../../components/Roadmap'
import Footer from '../../components/Footer'
import Events from '../../components/Events'
import SecondPage from '../../components/SecondPage'
import ProblemStatements from '../../components/ProblemStatements'
import Faq from '../../components/Faq'
import BentoGallery from '../../components/BentoGallery'

const Home = () => {
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <SecondPage/>
        <Events />
        {/* <Collaboration /> */}
        {/* <Services /> */}
        <Roadmap />
        <ProblemStatements/>
        <BentoGallery />
        <Faq/>
        <ContactUS /> 
        <Footer />
      </div>
    </>
      
    
  )
}

export default Home
