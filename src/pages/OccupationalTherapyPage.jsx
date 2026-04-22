import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function OccupationalTherapyPage() {
  const sectionRef = useScrollAnimation()

  const services = [
    {
      title: "Fine Motor Skills",
      desc: "Developing hand and finger strength for handwriting, drawing, and using tools.",
      icon: "✍️"
    },
    {
      title: "Gross Motor Skills",
      desc: "Improving balance, coordination, and strength for physical play and sports.",
      icon: "🏃‍♂️"
    },
    {
      title: "Sensory Processing",
      desc: "Helping children organize and respond to sensory information from their environment.",
      icon: "🧠"
    },
    {
      title: "Self-Care Skills",
      desc: "Independence in daily tasks like dressing, eating, and hygiene.",
      icon: "👔"
    },
    {
      title: "Attention & Concentration",
      desc: "Strategies to improve focus and task persistence in school and home settings.",
      icon: "🎯"
    },
    {
      title: "Play & Social Skills",
      desc: "Facilitating positive interactions and cooperative play with peers.",
      icon: "🤝"
    }
  ]

  return (
    <div ref={sectionRef} className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ks-navy/90 to-ks-navy py-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-left">
              <span className="inline-block bg-ks-gold/20 text-ks-gold px-4 py-1.5 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">
                Our Core Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                Pediatric <br />
                <span className="text-ks-gold">Occupational Therapy</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
                Helping children overcome life's little challenges in movement, play, and learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact-us" className="btn-gold">Book a Consultation</Link>
                <a href="#about-ot" className="text-white hover:text-ks-gold flex items-center gap-2 font-bold transition-colors">
                  Learn More 
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="animate-on-scroll slide-right relative">
              <div className="aspect-square rounded-full border-2 border-ks-gold/30 absolute -inset-4 animate-spin-slow hide-on-mobile"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=800&q=80" 
                  alt="Occupational Therapy session" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-ot" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left">
              <h2 className="section-heading mb-8">What is Occupational Therapy?</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Pediatric Occupational Therapy (OT) focuses on helping children gain independence and build the skills they need for the "occupations" of childhood: playing, learning, and self-care.
                </p>
                <p>
                  At Kid Sense, our OT approach is playful and child-centered. We look at the whole child to understand the underlying reasons for their challenges—whether they are sensory, physical, or emotional—and create a personalized plan to help them thrive.
                </p>
                <p className="font-bold text-ks-navy">
                  Our goal is to make every day functionally easier than the last!
                </p>
              </div>
            </div>
            <div className="animate-on-scroll slide-right bg-ks-navy/5 p-12 rounded-3xl">
              <h3 className="text-2xl font-heading font-bold text-ks-navy mb-6 text-center">We help with</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-3xl">{service.icon}</span>
                    <div>
                      <h4 className="font-bold text-ks-navy">{service.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll slide-up">
            <h2 className="section-heading mb-4">Comprehensive Support</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our clinicians use evidence-based practices to support your child across various developmental domains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="animate-on-scroll slide-up bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all group" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 bg-ks-gold/10 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:bg-ks-navy group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-ks-navy mb-4">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs your child might need OT */}
      <section className="py-24 bg-ks-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">When to Seek Support?</h2>
              <p className="text-gray-400 mb-10 text-lg">
                You might consider Occupational Therapy if your child is displaying challenges with:
              </p>
              <div className="space-y-4">
                {[
                  "Messy or slow handwriting compared to peers",
                  "Difficulty with buttons, zippers, or tying shoelaces",
                  "Over-reacting or under-reacting to lights, noises, or textures",
                  "Commonly tripping or appearing 'clumsy'",
                  "Difficulty staying focused or following instructions",
                  "Frequent emotional outbursts or difficulty regulating mood"
                ].map((sign, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-6 h-6 bg-ks-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-ks-navy" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-300">{sign}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll slide-right relative">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-heading font-bold text-ks-gold mb-6 italic">Kid Sense Fact:</h3>
                <p className="text-xl leading-relaxed text-gray-200">
                  "Children with strong motor skills and sensory regulation feel more confident at school and in social settings, leading to better academic and emotional outcomes."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ks-gold">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-ks-navy mb-8">Ready to help your child reach their full potential?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact-us" className="btn-navy !px-12">Book an Appointment</Link>
            <Link to="/resources" className="bg-white text-ks-navy font-bold px-12 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg">View Resources</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
