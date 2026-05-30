import { useState, useEffect, useCallback } from 'react'
import Preloader from './components/Preloader'
import Nebula from './components/Nebula'
import Particles from './components/Particles'
import Bokeh from './components/Bokeh'
import HeroSection from './components/HeroSection'
import QuoteSection from './components/QuoteSection'
import LetterSection from './components/LetterSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [loaded, setLoaded] = useState(false)
  const [revealed, setRevealed] = useState(false)

  const handlePreloaderComplete = useCallback(() => {
    setLoaded(true)
    setTimeout(() => setRevealed(true), 300)
  }, [])

  useEffect(() => {
    // Preload the bouquet image
    const img = new Image()
    img.src = '/bouquet.png'
  }, [])

  return (
    <div className="app">
      {!loaded && <Preloader onComplete={handlePreloaderComplete} />}

      <div className={`main-content ${revealed ? 'revealed' : ''}`}>
        {/* Atmospheric layers */}
        <Nebula />
        <Particles />
        <Bokeh />

        {/* Content sections */}
        <HeroSection revealed={revealed} />
        <QuoteSection revealed={revealed} />
        <LetterSection revealed={revealed} />
        <Footer revealed={revealed} />
      </div>
    </div>
  )
}

export default App
