import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function CTABanner() {
  const sectionRef = useScrollAnimation()

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-24 overflow-hidden" id="contact">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-ks-navy via-ks-navy-dark to-ks-navy" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-ks-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-ks-blue/10 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-ks-gold/30 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-ks-blue-light/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="animate-on-scroll slide-left lg:w-1/2">
            <h3 className="font-heading text-3xl lg:text-4xl font-bold text-white leading-tight">
              Talk to Kid Sense about your worries.{' '}
              <span className="gradient-text">
                Together we turn worried into wonderful.
              </span>
            </h3>
          </div>

          {/* Actions */}
          <div className="animate-on-scroll slide-right flex flex-col sm:flex-row gap-4 lg:w-1/2 justify-end">
            <a 
              href="tel:1800543736" 
              className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 
                         rounded-2xl px-8 py-5 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-ks-gold rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
              </div>
              <div>
                <p className="text-white/60 text-xs">Call us now</p>
                <p className="text-white font-bold text-xl font-heading">1800 543 736</p>
              </div>
            </a>

            <a 
              href="#" 
              className="btn-gold text-center text-lg !rounded-2xl !px-10 !py-5 flex items-center justify-center gap-2"
            >
              Book Now
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
