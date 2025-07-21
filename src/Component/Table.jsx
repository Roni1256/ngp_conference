import React from 'react'

const Table = ({ title,data }) => {
  return (
    <div className="overflow-x-auto">
        <h1 className='text-2xl text-gray-600 font-semibold mb-5'>{title}</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sno</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th> */}
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">College</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index+1}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.name}</td>
              {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.designation}</td> */}
              {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.department}</td> */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{item.college}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table