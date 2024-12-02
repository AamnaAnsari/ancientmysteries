import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import atlantis from '../../../public/images/atlantis.jpg'
import daro from '../../../public/images/daro.jpg'
import machu from '../../../public/images/Machu.jpg'

const explore = () => {
  return (
    <div className="flex min-h-screen items-center justify-center" style={{ backgroundColor: '#704214' }}>
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
         <Image src={atlantis} alt='atlantis' className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Atlantis</h1>
          <p className="mb-3 text-lg italic text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">A legendary island said to have sunk beneath the ocean.</p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
         <Image src={machu} alt='machupichu' className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Machu Picchu</h1>
          <p className="mb-3 text-lg italic text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">An ancient city of the Indus Valley Civilization.</p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
        <Image src={daro} alt='mohenjodaro' className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Mohenjo-daro</h1>
          <p className="mb-3 text-lg italic text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">An ancient city of the Indus Valley Civilization.</p>
          <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
      </div>
    </div>
    
  </div>
  
  )
}

export default explore