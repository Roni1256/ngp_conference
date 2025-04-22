import React, { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const Navigation = () => {
    const Navigate=useNavigate()
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='py-10 bg-white px-10'>
      <div className='container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center'>
        <div className='w-full lg:w-auto flex justify-between items-center'>
          <div className='flex items-center cursor-pointer' onClick={()=>{Navigate('/')}}>
            <img src="/ngplogo.png" alt="NGP Conference Logo" className='h-14' />
            <span className='text-neutral-700 font-bold text-2xl ml-3'>NGP Conference</span>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className='lg:hidden text-neutral-700'
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        <div className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8 w-full lg:w-auto mt-10 lg:mt-0`}>
          <Link to="/call-for-papers" className={`hover:text-blue-500 font-medium transition-colors duration-300 ${location.pathname === '/call-for-papers' ? 'text-blue-500' : 'text-neutral-700'}`}>Call for Papers</Link>
          <Link to="/speakers" className={` hover:text-blue-500 font-medium transition-colors duration-300 ${location.pathname === '/speakers' ? 'text-blue-500' : 'text-neutral-700'}`}>Speakers</Link>
          <Link to="/publications" className={` hover:text-blue-500 font-medium transition-colors duration-300 ${location.pathname === '/publications' ? 'text-blue-500' : 'text-neutral-700'}`}>Publications</Link>
          <Link to="/venue" className={` hover:text-blue-500 font-medium transition-colors duration-300 ${location.pathname === '/venue' ? 'text-blue-500' : 'text-neutral-700'}`}>Venue</Link>
          <Link to="/registration" className={` hover:text-blue-500 font-medium transition-colors duration-300 ${location.pathname === '/registration' ? 'text-blue-500' : 'text-neutral-700'}`}>Registration & Fees</Link>
          <Link to="/committee" className={` hover:text-blue-500 font-medium transition-colors duration-300 ${location.pathname === '/comittee' ? 'text-blue-500' : 'text-neutral-700'}`}>Committee</Link>
          <Link to="/schedule" className={` hover:text-blue-500 font-medium transition-colors duration-300 ${location.pathname === '/schedule' ? 'text-blue-500' : 'text-neutral-700'}`}>Schedule</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation