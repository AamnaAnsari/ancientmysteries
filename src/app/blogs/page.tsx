import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const blogs = () => {
  return (
    <section className="bg-darkGreen text-white py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center text-gold mb-8">Latest Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
          <div
           
            className="bg-sepia rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gold mb-2">Lost Cities of the Amazon</h2>
              <p className="text-sm text-white/80 mb-4">'Uncover the fascinating tales of ancient civilizations hidden deep within the Amazon rainforest.'</p>
              <p className="text-xs text-white/60 mb-4">12 January 2024</p>
              <a
                href= "https://www.bbc.com/news/science-environment-67940671"
                className="text-darkGreen bg-gold px-4 py-2 rounded-md font-semibold hover:bg-gold/80 transition"
              >
                Read More →
              </a>
             
            </div>
          </div>

          <div
           
            className="bg-sepia rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gold mb-2">The Enigma of the Antikythera Mechanism</h2>
              <p className="text-sm text-white/80 mb-4">'Explore the ancient Greek device that is often referred to as the world’s first computer.'</p>
              <p className="text-xs text-white/60 mb-4">14 october 2022</p>
              <a
                href= "https://en.wikipedia.org/wiki/Antikythera_mechanism"
                className="text-darkGreen bg-gold px-4 py-2 rounded-md font-semibold hover:bg-gold/80 transition"
              >
                Read More →
              </a>
             
            </div>
          </div>

          <div
           
           className="bg-sepia rounded-lg shadow-lg hover:shadow-xl transition duration-300 overflow-hidden"
         >
           <div className="p-6">
             <h2 className="text-2xl font-semibold text-gold mb-2">Rapa Nui: The Mysteries of Easter Island</h2>
             <p className="text-sm text-white/80 mb-4">'Learn about the iconic Moai statues and the intriguing history of this isolated island.'</p>
             <p className="text-xs text-white/60 mb-4">23 April 2023</p>
             <a
               href= "https://www.universityofcalifornia.edu/news/mystery-easter-island-revealed"
               className="text-darkGreen bg-gold px-4 py-2 rounded-md font-semibold hover:bg-gold/80 transition"
             >
               Read More →
             </a>
            
           </div>
         </div>
      
      </div>
    </div>
  </section>
  )
}

export default blogs