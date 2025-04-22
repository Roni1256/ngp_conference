import React from 'react'

const Registration = () => {
  return (
    <div className="container max-w-[1200px] mx-auto px-4 py-16">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-center text-gray-800 mb-8">
          Registration & Fees
        </h1>

        <div className="mb-8">
          <h2 className="text-gray-600 mb-4">
            Conference Fees
          </h2>
          <hr className="mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Student</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$150</div>
              <p className="text-gray-600 text-sm">Early Bird: $120</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Regular</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$250</div>
              <p className="text-gray-600 text-sm">Early Bird: $200</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Non-Presenter</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$100</div>
              <p className="text-gray-600 text-sm">Early Bird: $80</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Paper</h3>
              <div className="text-3xl font-bold text-gray-900 mb-2">$75</div>
              <p className="text-gray-600 text-sm">Per paper</p>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-gray-600 mb-4">
            Important Notes
          </h2>
          <hr className="mb-4" />
          <ul className="list-none p-0">
            <li className="py-2">
              IDR fees are only for participants with Indonesian affiliation(s), who are encouraged to attend the conference physically.
            </li>
            <li className="py-2">
              Conference fees include all plenary sessions, parallel sessions, seminar kit, program book, lunches, and coffee breaks.
            </li>
            <li className="py-2">
              Conference fees exclude hotel accommodation, journal publication for extended papers (if any), and other personal fees (e.g., visa).
            </li>
            <li className="py-2">
              Conference fees are NOT refundable.
            </li>
            <li className="py-2">
              No-show papers are NOT included in the proceedings and are NOT eligible for fee refund for any good reason.
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-gray-600 mb-4">
            Registration and Payment
          </h2>
          <hr className="mb-4" />
          <p className="italic">
            Registration and payment details will be updated soon.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Registration