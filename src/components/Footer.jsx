import { useEffect, useRef, useState } from 'react'

export default function Footer({ revealed }) {
  const footerRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!revealed) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [revealed])

  const now = new Date()
  const dateStr = now.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <footer
      className={`footer-section ${visible ? 'visible' : ''}`}
      ref={footerRef}
      id="footer"
    >
      <div className="footer-orchid-icon">
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="15" cy="12" rx="6" ry="9" fill="rgba(77,166,255,0.2)" transform="rotate(-10 15 12)" />
          <ellipse cx="15" cy="12" rx="6" ry="9" fill="rgba(77,166,255,0.2)" transform="rotate(10 15 12)" />
          <ellipse cx="15" cy="16" rx="3" ry="4" fill="rgba(168,197,245,0.2)" />
          <line x1="15" y1="20" x2="15" y2="28" stroke="rgba(42,94,50,0.3)" strokeWidth="1" />
        </svg>
      </div>
      <div className="footer-text">For Mehak 💙</div>
      <div className="footer-date">{dateStr}</div>
    </footer>
  )
}
