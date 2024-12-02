import React from 'react'
import nazca from '../../../public/images/nazca.jpg'
import voy from '../../../public/images/voy2.jpg'
import stone from '../../../public/images/stone2.jpg'
import Image from 'next/image'

const mystery = () => {
  return (
    <section className="bg-darkGreen text-white py-8">
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">Mysteries Archive</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
          <div
            className="bg-sepia p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            
            <Image src={nazca} alt='nazca lines'  width={400}
              height={250}
              className="rounded-t-lg" />
            <h2 className="text-xl font-bold mt-4 text-gold">The Nazca Lines</h2>
            <p className="text-sm mt-2">Giant geoglyphs in Peru, visible only from the air, whose origins and purpose are unknown.'</p>
          </div>
      
          <div
            className="bg-sepia p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            
            <Image src={voy} alt='nazca lines'  width={400}
              height={250}
              className="rounded-t-lg" />
            <h2 className="text-xl font-bold mt-4 text-gold">The Voynich Manuscript</h2>
            <p className="text-sm mt-2">An illustrated codex written in an unknown language or script.</p>
          </div>

          <div
            className="bg-sepia p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            
            <Image src={stone} alt='nazca lines'  width={400}
              height={250}
              className="rounded-t-lg" />
            <h2 className="text-xl font-bold mt-4 text-gold">Stonehenge</h2>
            <p className="text-sm mt-2">A prehistoric monument whose purpose remains a mystery.</p>
          </div>
      </div>
    </div>
  </section>
  )
}

export default mystery