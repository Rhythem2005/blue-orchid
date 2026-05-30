import { useState, useEffect } from 'react'

const OrchidIcon = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="30" cy="22" rx="12" ry="16" fill="url(#petal1)" opacity="0.8" transform="rotate(-15 30 22)" />
    <ellipse cx="30" cy="22" rx="12" ry="16" fill="url(#petal2)" opacity="0.8" transform="rotate(15 30 22)" />
    <ellipse cx="22" cy="26" rx="10" ry="13" fill="url(#petal3)" opacity="0.7" transform="rotate(-40 22 26)" />
    <ellipse cx="38" cy="26" rx="10" ry="13" fill="url(#petal4)" opacity="0.7" transform="rotate(40 38 26)" />
    <ellipse cx="30" cy="30" rx="6" ry="8" fill="url(#center)" opacity="0.9" />
    <circle cx="30" cy="28" r="2" fill="#ffffff" opacity="0.6" />
    <defs>
      <radialGradient id="petal1"><stop stopColor="#4da6ff" /><stop offset="1" stopColor="#1a2a6c" /></radialGradient>
      <radialGradient id="petal2"><stop stopColor="#4da6ff" /><stop offset="1" stopColor="#1a2a6c" /></radialGradient>
      <radialGradient id="petal3"><stop stopColor="#a8c5f5" /><stop offset="1" stopColor="#2d3a7a" /></radialGradient>
      <radialGradient id="petal4"><stop stopColor="#a8c5f5" /><stop offset="1" stopColor="#2d3a7a" /></radialGradient>
      <radialGradient id="center"><stop stopColor="#ffffff" /><stop offset="1" stopColor="#a8c5f5" /></radialGradient>
    </defs>
  </svg>
)

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [fadingOut, setFadingOut] = useState(false)

  useEffect(() => {
    const duration = 3000
    const interval = 30
    const step = 100 / (duration / interval)
    let current = 0

    const timer = setInterval(() => {
      current += step + Math.random() * step * 0.5
      if (current >= 100) {
        current = 100
        clearInterval(timer)
        setTimeout(() => {
          setFadingOut(true)
          setTimeout(onComplete, 1200)
        }, 400)
      }
      setProgress(Math.min(current, 100))
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className={`preloader ${fadingOut ? 'fade-out' : ''}`}>
      <div className="preloader-orchid">
        <OrchidIcon />
      </div>
      <div className="preloader-text">Preparing something special</div>
      <div className="preloader-bar-track">
        <div
          className="preloader-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
