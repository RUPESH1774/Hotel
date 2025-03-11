import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Booking from './Booking'
import Resturant from './Resturant'
import Contact from './Contact'
import Footer from './Footer'
import BubbleCursor from './Cursor'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/booking' element={<Booking/>}></Route>
        <Route path='/resturant' element={<Resturant/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/footer' element={<Footer/>}></Route>
      </Routes>
      </BrowserRouter>
      <BubbleCursor/>
    </div>
  )
}
