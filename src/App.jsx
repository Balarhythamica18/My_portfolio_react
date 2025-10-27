import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App(){
  // optional theme toggle (bonus)
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'))

  return (
    <div className={theme === 'light' ? '' : 'dark-theme'}>
      <Header onToggleTheme={toggleTheme} theme={theme}/>
      <main>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
