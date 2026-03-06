import React, { useState } from 'react'
import Header from './components/layout/Header'
import MobileMenu from './components/layout/MobileMenu'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Services from './components/sections/Services'
import Portfolio from './components/sections/Portfolio'
import Testimonials from './components/sections/Testimonials'
import CTA from './components/sections/CTA'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <Header onMenuToggle={toggleMobileMenu} isMenuOpen={isMobileMenuOpen} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App