import React, { useState } from 'react'
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
import Reviewers from './Pages/Reviewers'
import PrevConf from './Pages/PrevConf'
import Payment from './Pages/Payment'
import Contact from './Pages/Contact'

const App = () => {
  const [isOpen,setOpen]=useState(false)
  return (
    <div className='font-display' >
      <Navigation isOpen={isOpen} setIsOpen={setOpen}/>
      <div className="" onClick={()=>setOpen(false)}>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/call-for-papers' element={<CallForPaper/>}/>
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/venue' element={<Venue />} />
        <Route path='/committee' element={<Committee/>}/>
        <Route path='/tpc-member' element={<Reviewers/>}/>
        <Route path='/previous-conference' element={<PrevConf/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </div>
    </div>
  )
}

export default App

