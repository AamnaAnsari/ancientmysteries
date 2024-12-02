import React from 'react'
import Link from 'next/link'
import ancient2 from '../../public/images/ancient2.jpg'
import Image from 'next/image'
import Hero from './Hero'


const Header = () => {
  return (
    <nav className="bg-darkGreen text-gold p-4">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-3">
       <Image src={ancient2} alt='logo' width={50} height={50}/>
        <h1 className="text-xl font-bold">Myths and Mysteries</h1>
      </div>

      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-sepia transition duration-300 underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/explore" className="hover:text-sepia transition duration-300 underline">
            Explore
          </Link>
        </li>
        <li>
          <Link href="/mystery" className="hover:text-sepia transition duration-300 underline">
            Mysteries
          </Link>
        </li>
        <li>
          <Link href="/blogs" className="hover:text-sepia transition duration-300 underline">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-sepia transition duration-300 underline">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  
  )
}

export default Header