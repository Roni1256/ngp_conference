import React from 'react'

const CallForPaper = () => {
  return (
    <div className='py-20 px-10 bg-white'>
        <h1 className='text-3xl lg:text-5xl text-neutral-800 font-bold w-full leading-tight mb-6 border-b-4 border-neutral-500 pb-4 inline-block'>Call for Papers</h1>
        <p className='text-lg text-gray-700 max-w-4xl mt-3 leading-relaxed'>The International Conference on Green Energy, Computing and Intelligent Technology 2025 (GEn-CITy 2025) is the premier forum for the presentation of new advances and research results in the fields of but not limited to Green Computing and Security, Green Communications, Networks, and Signal Processing, Intelligent Embedded Systems and Analytics, Green Energy and Power System, Smart Grid, Sensors, Green Materials, Alternative Energy and Control Process. The conference will bring together leading researchers, engineers, and scientists in the domain of interest from around the world.</p>
        
        <h2 className='text-2xl font-semibold text-neutral-700 mt-10 mb-6'>Conference Tracks</h2>
        
        <div className="grid gap-10 mt-8">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                    <div className="flex-1">
                        <div className="inline-block px-4 py-2 bg-green-100 text-neutral-800 rounded-full font-semibold mb-4">Track-1</div>
                        <h3 className="text-xl font-bold text-neutral-800 mb-4">Green Computing and Security</h3>
                        <ul className="list-disc ml-5 space-y-2 text-gray-600">
                            <li>Sustainable Computing Infrastructure</li>
                            <li>Energy-Efficient Data Centers</li>
                            <li>Green Cloud Computing</li>
                            <li>Eco-friendly Software Development</li>
                            <li>Security in Green Computing</li>
                        </ul>
                    </div>
                    <img src="/images/green-computing.jpg" alt="Green Computing" className="w-full lg:w-96 h-64 object-cover rounded-lg shadow-md" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                    <div className="flex-1">
                        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold mb-4">Track-2</div>
                        <h3 className="text-xl font-bold text-neutral-800 mb-4">Green Communications and Networks</h3>
                        <ul className="list-disc ml-5 space-y-2 text-gray-600">
                            <li>Energy-Efficient Network Protocols</li>
                            <li>Green 5G/6G Technologies</li>
                            <li>Sustainable IoT Solutions</li>
                            <li>Smart Grid Communications</li>
                            <li>Green Network Architecture</li>
                        </ul>
                    </div>
                    <img src="/images/green-network.jpg" alt="Green Networks" className="w-full lg:w-96 h-64 object-cover rounded-lg shadow-md" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                    <div className="flex-1">
                        <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-semibold mb-4">Track-3</div>
                        <h3 className="text-xl font-bold text-neutral-800 mb-4">Intelligent Embedded Systems and Analytics</h3>
                        <ul className="list-disc ml-5 space-y-2 text-gray-600">
                            <li>AI for Green Computing</li>
                            <li>Smart Sensors and Systems</li>
                            <li>Embedded Intelligence</li>
                            <li>Green Data Analytics</li>
                            <li>Sustainable AI Solutions</li>
                        </ul>
                    </div>
                    <img src="/images/embedded-systems.jpg" alt="Embedded Systems" className="w-full lg:w-96 h-64 object-cover rounded-lg shadow-md" />
                </div>
            </div>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold text-neutral-800 mb-4">Important Dates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-neutral-800">Paper Submission Deadline</h3>
                    <p className="text-gray-600">January 15, 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-neutral-800">Notification of Acceptance</h3>
                    <p className="text-gray-600">March 1, 2025</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h3 className="font-semibold text-neutral-800">Camera-ready Submission</h3>
                    <p className="text-gray-600">April 15, 2025</p>
                </div>
            </div>
        </div>

        <div className="mt-12 text-center">
            <a href="#" className="inline-block px-8 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors duration-300">Submit Your Paper</a>
        </div>
    </div>
  )
}

export default CallForPaper