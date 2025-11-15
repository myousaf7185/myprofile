import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Footer from './components/Footer'
import Experience from './pages/Experience'
const App = () => {
  return (
    <>
<Navbar/>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/Projects" element={<Projects/>}/>
  <Route path="/Skills" element={<Skills/>}/>
  <Route path="/Experience" element={<Experience/>}/>
</Routes>
<Footer/>
</>
  )
}

export default App