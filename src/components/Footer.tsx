import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-darkGreen text-gold p-6">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
      {/* About Section */}
      <div>
        <h3 className="text-xl font-bold mb-4">About Myths and Mysteries</h3>
        <p className="text-sm">
          "Myths and Mysteries" is a digital gateway to explore the mysteries of ancient civilizations, archaeological discoveries, and unsolved histories that shaped our world.
        </p>
      </div>

    
      <div>
        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="/" className="hover:text-sepia transition duration-300">Home</a></li>
          <li><a href="/explore" className="hover:text-sepia transition duration-300">Explore Civilizations</a></li>
          <li><a href="/mystery" className="hover:text-sepia transition duration-300">Mysteries Archive</a></li>
          <li><a href="/blogs" className="hover:text-sepia transition duration-300">Blog</a></li>
          <li><a href="/contact" className="hover:text-sepia transition duration-300">Contact Us</a></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-xl font-bold mb-3">Contact Us</h3>
        <p className="text-sm">Email: info@myths.com</p>
        <p className="text-sm">Phone: +123 456 7890</p>
       
      </div>
    </div>
    <div className="text-center mt-8 border-t border-gold pt-4">
      <p className="text-sm">© 2024 Myths and Mysteries. All rights reserved.</p>
      <p className="text-sm">Designed By Aamna Ansari </p>
    </div>
  </footer>
  )
}

export default Footer