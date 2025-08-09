import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {Routes, Route} from 'react-router-dom'

const App = () => {

  return (
    <>
    <Navbar />

    <Routes>
      <Route path='/div' element={<div>I am a Div</div>}/>
      <Route path='/span' element={<span>I am a Span</span>}/>
    </Routes>

      <Footer/>
      
    </>
  )
}

export default App
