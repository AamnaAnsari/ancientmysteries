import React from 'react'
import Image from 'next/image'
import sphi from '../../public/images/sphinx.jpg'

const Hero = () => {
  return (
    <section
    className="relative bg-cover bg-center h-screen flex items-center justify-center text-white"
    style={{
      backgroundImage: "url('/images/sphinx.jpg')",
    }}
  >
    
    <div className="absolute inset-0 bg-darkGreen/70"></div>

    {/* text  */}
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gold mb-4">
      Myths and Mysteries
      </h1>
      <p className="text-lg md:text-xl text-white/80 mb-6">
      "Lost cities, forgotten heroes, untold legends—explore the enigma of ancient history."
      </p>
      <a
        href="/explore"
        className="inline-block bg-gold text-darkGreen py-3 px-6 rounded-lg font-semibold hover:bg-gold/80 transition"
      >
        Explore Now
      </a>
    </div>
  </section>
  )
}

export default Hero