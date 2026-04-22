import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Parent',
    text: 'Kid Sense has been incredible for our son. The occupational therapists are so patient and skilled. We\'ve seen amazing improvements in his fine motor skills and confidence.',
    rating: 5,
  },
  {
    name: 'James & Lisa P.',
    role: 'Parents',
    text: 'The speech therapy services have transformed our daughter\'s communication abilities. The team made her feel comfortable from day one and the progress has been remarkable.',
    rating: 5,
  },
  {
    name: 'Rachel T.',
    role: 'Educator',
    text: 'The in-education support from Kid Sense has been invaluable for our school. Their developmental screenings and workshops have empowered our teaching staff tremendously.',
    rating: 5,
  },
  {
    name: 'Michael & Kate W.',
    role: 'Parents',
    text: 'We were so worried about our child\'s development, but the team at Kid Sense turned our worry into wonderful. Their approach is warm, professional, and effective.',
    rating: 5,
  },
  {
    name: 'Dr. Amanda Chen',
    role: 'Pediatrician',
    text: 'I regularly refer families to Kid Sense and the feedback is always overwhelmingly positive. Their multi-disciplinary approach and 20 years of experience really shows in the quality of care.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const sectionRef = useScrollAnimation()

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll slide-up">
          <div className="inline-flex items-center gap-2 bg-ks-gold/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-ks-gold text-2xl">★</span>
            <span className="text-ks-gold text-sm font-semibold">What People Say</span>
          </div>
          <h3 className="section-heading">
            Trusted by <span className="gradient-text">Families</span>
          </h3>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto">
            See what parents, educators, and health professionals say about Kid Sense
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="animate-on-scroll slide-up max-w-4xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-ks-navy to-ks-navy-dark rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-ks-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-ks-blue/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <span key={i} className="text-ks-gold text-2xl">★</span>
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-white/90 text-xl lg:text-2xl leading-relaxed mb-8 font-heading font-light italic">
                "{testimonials[active].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-ks-gold/20 flex items-center justify-center text-ks-gold font-bold text-xl">
                    {testimonials[active].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{testimonials[active].name}</p>
                    <p className="text-white/50 text-sm">{testimonials[active].role}</p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button 
                    onClick={() => setActive(active === 0 ? testimonials.length - 1 : active - 1)}
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => setActive(active === testimonials.length - 1 ? 0 : active + 1)}
                    className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? 'w-8 bg-ks-gold' : 'w-2 bg-gray-300 hover:bg-ks-gold/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
