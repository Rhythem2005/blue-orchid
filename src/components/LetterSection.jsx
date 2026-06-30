import { useEffect, useRef, useState } from 'react'

export default function LetterSection({ revealed }) {
  const cardRef = useRef(null)
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
      { threshold: 0.2 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [revealed])

  return (
    <section className="letter-section" id="letter">
      <div className={`letter-card ${visible ? 'visible' : ''}`} ref={cardRef}>
        <div className="letter-header">
          <div className="letter-for">Written for</div>
          <h2 className="letter-name">XYZ</h2>
          <div className="letter-line" />
        </div>

        <div className="letter-body">
         <p>
  Some people have a way of making the world feel a little brighter.
  Their presence feels easy, their energy genuine, and ordinary moments somehow become more memorable.
</p>
<p>
  You are one of those people — someone who brings warmth, kindness,
  and a quiet charm wherever you go, reminding people that true beauty
  is not only seen, but also felt through the way someone carries themselves.
</p>
<p>
  These blue orchids are admired for their rare beauty and striking presence.
  Graceful, unique, and naturally captivating — they felt like the perfect
  reminder that standing out does not require trying too hard.
</p>
<p>
  This is simply for you — a small gesture of appreciation for the beauty,
  positivity, and uniqueness that make you memorable in your own way.
</p>

        </div>

        <div className="letter-closing">
          <div className="letter-heart">💙</div>
          <div className="letter-sign">Forever & always</div>
        </div>
      </div>
    </section>
  )
}
