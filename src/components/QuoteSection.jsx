import { useEffect, useRef, useState } from 'react'

export default function QuoteSection({ revealed }) {
  const sectionRef = useRef(null)
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
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [revealed])

  return (
    <section className="quote-section" ref={sectionRef} id="quote">
      <div className={`quote-divider ${visible ? 'visible' : ''}`}>
        <div className="quote-divider-line" />
        <div className="quote-divider-diamond" />
        <div className="quote-divider-line" />
      </div>

      <blockquote className={`quote-text ${visible ? 'visible' : ''}`}>
        In a world full of roses, I chose the rarest bloom —<br />
        a blue orchid that glows in the dark,<br />
        just like you light up every room you walk into.
      </blockquote>

      <span className={`quote-author ${visible ? 'visible' : ''}`}>
        — For the one who makes darkness beautiful
      </span>
    </section>
  )
}
