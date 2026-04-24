export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] h-[180vh] min-w-full min-h-full"
          src="https://www.youtube.com/embed/m40F5C7YCmI?autoplay=1&mute=1&loop=1&playlist=m40F5C7YCmI&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Kid Sense Child Development"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Overlay */}
      <div className="hero-overlay absolute inset-0 z-10" />

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-ks-gold/10 rounded-full blur-3xl z-10 animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl z-10" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in-down">
            <span className="w-2 h-2 bg-ks-gold rounded-full animate-pulse" />
             <span className="text-white/90 text-sm font-medium">Expert Pediatric Care</span>
          </div>

          {/* KidSense brand */}
          <div className="mb-4">
            <span className="text-ks-blue-light font-heading font-bold text-2xl">
              Kid<span className="text-ks-gold">Sense</span>
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            Occupational &<br />
            <span className="gradient-text">Speech Therapy</span><br />
            For Children
          </h1>

          {/* Subtext */}
          <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Helping children reach their full potential through expert therapy across Bengaluru.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="#contact" className="btn-gold text-center text-lg">
              Book an Appointment
            </a>
            <a href="tel:+918041234567" className="btn-outline-white text-center text-lg">
              📞 +91 80 4123 4567
            </a>
          </div>

          {/* Support Badge */}
          <div className="mt-12 flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <span className="font-heading font-bold text-ks-navy text-[10px] text-center">Quality<br/>First</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Certified Center</p>
                  <p className="text-white/60 text-xs">Standard of Excellence</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
              <div className="flex items-center gap-3">
                <div className="text-ks-gold text-3xl">★</div>
                <div>
                  <p className="text-white font-semibold text-sm">20+ Years</p>
                  <p className="text-white/60 text-xs">Of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  )
}
