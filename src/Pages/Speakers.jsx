import React from 'react'

const Speakers = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Speakers
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Meet our distinguished speakers and industry experts
          </p>
        </div>
        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Speaker Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="h-48 w-full object-cover"
              src="https://placekitten.com/400/300"
              alt="Speaker"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">John Doe</h3>
              <p className="text-sm text-gray-500">CEO, Tech Company</p>
              <p className="mt-4 text-gray-600">
                Expert in artificial intelligence and machine learning
              </p>
            </div>
          </div>

          {/* Speaker Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="h-48 w-full object-cover"
              src="https://placekitten.com/401/300"
              alt="Speaker"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Jane Smith</h3>
              <p className="text-sm text-gray-500">CTO, Innovation Labs</p>
              <p className="mt-4 text-gray-600">
                Blockchain and cryptocurrency specialist
              </p>
            </div>
          </div>

          {/* Speaker Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="h-48 w-full object-cover"
              src="https://placekitten.com/402/300"
              alt="Speaker"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">Mike Johnson</h3>
              <p className="text-sm text-gray-500">Lead Developer, WebTech</p>
              <p className="mt-4 text-gray-600">
                Full-stack development and cloud architecture expert
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Speakers