import { useMemo } from 'react'

export default function Bokeh() {
  const orbs = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${5 + Math.random() * 90}%`,
      top: `${5 + Math.random() * 90}%`,
      size: 30 + Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
    }))
  }, [])

  return (
    <div className="bokeh-container">
      {orbs.map((o) => (
        <div
          key={o.id}
          className="bokeh-circle"
          style={{
            left: o.left,
            top: o.top,
            width: `${o.size}px`,
            height: `${o.size}px`,
            animationDuration: `${o.duration}s`,
            animationDelay: `${o.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
