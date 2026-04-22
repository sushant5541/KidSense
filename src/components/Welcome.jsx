import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Welcome() {
  const sectionRef = useScrollAnimation()

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white" id="about">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="animate-on-scroll slide-up">
          <h2 className="section-heading mb-6">
            Welcome to <span className="gradient-text">Kid Sense</span>
          </h2>
        </div>
        
        <div className="animate-on-scroll slide-up" style={{ transitionDelay: '0.15s' }}>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Through Occupational Therapy and Speech Therapy we have helped thousands of children reach their full developmental potential. We take the worry out of children's developmental hurdles so they can get on with being wonderful!
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Through clinic and community therapy, your child can unlock their wonderful too!
          </p>
        </div>

        <div className="animate-on-scroll slide-up" style={{ transitionDelay: '0.3s' }}>
          <a href="#contact" className="btn-gold inline-block">
            Contact Us
          </a>
        </div>

        {/* Decorative divider */}
        <div className="mt-16 flex items-center justify-center gap-3 animate-on-scroll slide-up" style={{ transitionDelay: '0.4s' }}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-ks-gold/40" />
          <div className="w-3 h-3 rounded-full bg-ks-gold/30" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-ks-gold/40" />
        </div>
      </div>
    </section>
  )
}
