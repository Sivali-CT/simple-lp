"use client"
import React from 'react'
// Main Components
import Cta from './components/Cta'
import Faq from './components/Faq'
import Features from './components/Features'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
// Nav
import Navbar from './components/Navbar'

export default function Home() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <>
    <Navbar scrollToSection={scrollToSection}/>
    <main>
      <Hero scrollToSection={scrollToSection}/>
      <Features/>
      <Pricing/>
      <Cta scrollToSection={scrollToSection}/>
      <Faq/>
    </main>
    </>
  )
}
