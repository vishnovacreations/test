import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Team from '../components/Team'
import Pricing from '../components/Pricing'
import Work from '../pages/Work'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Team />
      <Work />
      <FAQ />
      <Contact />
    </>
  )
}

export default Home
