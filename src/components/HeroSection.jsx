export default function HeroSection({ revealed }) {
  return (
    <section className="hero-section" id="hero">
      {/* Top subtitle */}
      <span className="hero-subtitle">A Magical Surprise</span>

      {/* Bouquet with floating petals */}
      <div className="hero-bouquet-container">
        <div className="floating-petal" />
        <div className="floating-petal" />
        <div className="floating-petal" />
        <div className="floating-petal" />
        <div className="floating-petal" />

        <img
          src="/bouquet.png"
          alt="A breathtaking bouquet of seven blue Phalaenopsis orchids in moonlight"
          className="hero-bouquet-img"
          loading="eager"
        />

        {/* Glow pool beneath bouquet */}
        <div className="hero-bouquet-glow" />
      </div>

      {/* Name reveal */}
      <div className="hero-name-container">
        <h1 className="hero-name">XZY</h1>
        <div className="hero-name-line" />
        <p className="hero-tagline">
          &ldquo;Like blue orchids in moonlight, you make everything beautiful.&rdquo;
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator-line" />
        <span className="scroll-indicator-text">Scroll</span>
      </div>
    </section>
  )
}
