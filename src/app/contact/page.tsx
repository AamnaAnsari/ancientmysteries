import React from 'react'

const contact = () => {
  return (
    <section className="bg-darkGreen text-white py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center text-gold mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-sepia p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gold mb-4">Get in Touch</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-gold focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-gold focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message
              </label>
              <textarea
                id="message"
                // rows="4"
                placeholder="Your Message"
                className="w-full mt-1 p-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-gold focus:border-gold"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-md bg-gold text-darkGreen font-semibold hover:bg-gold/80 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact us section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-gold">Our Address</h2>
            <p className="mt-2 text-white/80">123 Ancient Road, Lost City, Earth</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gold">Phone</h2>
            <p className="mt-2 text-white/80">+123 456 7890</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gold">Email</h2>
            <p className="mt-2 text-white/80">contact@myths.com</p>
          </div>
        
        </div>
      </div>
    </div>
  </section>
  )
}

export default contact