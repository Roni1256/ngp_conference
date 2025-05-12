import React from 'react'

const Venue = () => {
  return (
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-neutral-900 mb-16 text-center tracking-tight">
          Conference Venue
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl  p-8 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-bold text-neutral-800 mb-6">Location Details</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <svg className="w-6 h-6 text-neutral-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="text-base font-semibold text-gray-800">Address</h3>
                  <p className="text-sm text-gray-600">Conference Centre,</p>
                  <p className="text-sm text-gray-600">Dr. N.G.P Arts and Science College,</p>
                  <p className="text-sm text-gray-600">Coimbatore, India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.47685815545!2d76.90074549726567!3d11.016844000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1689827247584!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '500px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Venue