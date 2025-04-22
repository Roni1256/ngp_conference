import React from 'react'

const Publications = () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Publications
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Our latest research and publications
          </p>
        </div>
        <div className="mt-12 space-y-16">
          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">A. Conference Proceedings</h3>
            <div className="prose max-w-none text-gray-600">
              <p>
                Peer-reviewed and accepted papers of the conference will be published as proceedings with IET Conference Proceedings (under confirmation). The proceedings will be included in the IET Digital Library and IEEE Xplore and indexed by the Ei Compendex, IET Inspec and Scopus.
              </p>
              <p className="mt-4">
                All authors should use the:
                <ul className="list-disc pl-6 mt-2">
                  <li>IET Proceedings Template(word)</li>
                  <li>IET Proceedings Template(Latex)</li>
                </ul>
                for submission.
              </p>
              <p className="mt-4">
                IET Conference Proceedings is ranked Q4 by <a href="#" className="text-blue-600 hover:underline">Scimago Journal Rank</a>
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">B. Extended Journal Papers</h3>
            <p className="text-gray-600">TBU</p>
          </section>

          <section>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Previous Conference Publications</h3>
            <div className="prose max-w-none text-gray-600">
              <p>Previous GEn-CITy publications (Scopus-indexed) can be found in the following links:</p>
              <ul className="space-y-4 mt-4">
                <li>
                  <a href="#" className="text-blue-600 hover:underline block">
                    International Conference on Green Energy, Computing and Intelligent Technology 2023 IET Proceedings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline block">
                    Springer's Lecture Notes on Electrical Engineering: Artificial Intelligence for Sustainable Energy Select Proceedings of the International Conference, GEn-CITy 2023
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline block">
                    International Conference on Green Energy, Computing and Intelligent Technology 2024 IET Proceedings
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Publications