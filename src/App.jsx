import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navigation from './Component/Navigation'
import CallForPaper from './Pages/CallForPaper'
import Speakers from './Pages/Speakers'
import Publications from './Pages/Publications'
import Venue from './Pages/Venue'
import Registration from './Pages/Registration'
import Committee from './Pages/Committee'
import Schedule from './Pages/Schedule'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div className='font-display'>
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/call-for-papers' element={<CallForPaper/>}/>
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/venue' element={<Venue />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/committee' element={<Committee/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
