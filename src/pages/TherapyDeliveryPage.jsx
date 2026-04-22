import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function TherapyDeliveryPage() {
  const sectionRef = useScrollAnimation()

  const deliveryOptions = [
    {
      title: "In Clinic",
      desc: "Our six modern, purpose-built clinics provide a structured environment with specialized equipment for sensory and motor therapy.",
      benefits: [
        "Specialized sensory rooms",
        "Large motor gyms",
        "Quiet observation areas",
        "Collaborative therapist environment"
      ],
      icon: "🏥",
      path: "/therapy-delivery/in-clinic",
      image: "https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-7.png"
    },
    {
      title: "At Home",
      desc: "Therapy in the child's natural environment where they feel most comfortable and where daily routines actually happen.",
      benefits: [
        "Practical strategies for home life",
        "Training for parents in natural setting",
        "Zero travel time for families",
        "Customized to your specific home layout"
      ],
      icon: "🏠",
      path: "/therapy-delivery/at-home",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80"
    },
    {
      title: "In School",
      desc: "Liaising directly with teachers to implement strategies that support the child's learning and social participation at school.",
      benefits: [
        "Direct classroom support",
        "Collaboration with educators",
        "Peer interaction observation",
        "Education session for school staff"
      ],
      icon: "🏫",
      path: "/therapy-delivery/at-school",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
    },
    {
      title: "Telehealth",
      desc: "Access high-quality therapy from anywhere via secure video link. Effective, convenient, and highly interactive.",
      benefits: [
        "Access for rural families",
        "Flexible scheduling",
        "Screen-sharing interactive games",
        "Recorded sessions for review"
      ],
      icon: "💻",
      path: "/therapy-delivery/telehealth",
      image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?w=800&q=80"
    }
  ]

  return (
    <div ref={sectionRef} className="pt-20">
      {/* Hero */}
      <section className="bg-ks-gold py-20 text-ks-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-on-scroll slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6">
              Therapy <span className="text-white drop-shadow-sm">Delivery Options</span>
            </h1>
            <p className="text-xl font-medium leading-relaxed opacity-90">
              We deliver therapy where it matters most to your child and your family. 
              Find the perfect environment for your child's developmental journey.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Message */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center animate-on-scroll slide-up">
            <h2 className="text-3xl font-heading font-bold text-ks-navy mb-8">Flexibility for Every Family</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              At Kid Sense, we recognize that every family’s needs are unique. That’s why we offer four distinct ways to receive 
              Occupational and Speech Therapy. Whether you prefer the specialized equipment of our clinics, the comfort 
              of your home, the collaborative environment of a school, or the convenience of telehealth, we are here to support you.
            </p>
            <div className="w-24 h-1 bg-ks-gold mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Delivery Grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {deliveryOptions.map((opt, i) => (
              <div key={i} className="animate-on-scroll slide-up bg-gray-50 rounded-[3rem] overflow-hidden flex flex-col group hover:bg-ks-navy transition-all duration-700 shadow-xl border border-gray-100" style={{ animationDelay: `${i * 150}ms` }}>
                <div className="h-64 relative overflow-hidden">
                  <img src={opt.image} alt={opt.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-ks-navy/20 group-hover:bg-ks-navy/0 transition-all"></div>
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white text-4xl flex items-center justify-center rounded-2xl shadow-lg border border-gray-100 group-hover:bg-ks-gold group-hover:scale-110 transition-all duration-500">
                    {opt.icon}
                  </div>
                </div>
                <div className="p-10 flex-grow">
                  <h3 className="text-3xl font-heading font-bold text-ks-navy group-hover:text-ks-gold mb-6 transition-colors">{opt.title}</h3>
                  <p className="text-gray-600 group-hover:text-gray-300 mb-8 leading-relaxed text-lg transition-colors">{opt.desc}</p>
                  
                  <div className="space-y-4 mb-10">
                    {opt.benefits.map((benefit, j) => (
                      <div key={j} className="flex gap-4 items-center">
                        <div className="w-6 h-6 bg-ks-gold/20 text-ks-gold rounded-full flex-shrink-0 flex items-center justify-center group-hover:bg-white group-hover:text-ks-navy transition-all">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700 group-hover:text-gray-200 transition-colors">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <Link to={opt.path} className="inline-flex items-center gap-3 font-bold text-ks-navy group-hover:text-ks-gold transition-all duration-300 group/btn">
                    Explore {opt.title} Depth 
                    <svg className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Question */}
      <section className="py-24 bg-ks-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4 animate-on-scroll slide-up">
          <h2 className="text-3xl font-heading font-bold mb-8 italic text-ks-gold">Did you know?</h2>
          <p className="text-2xl leading-relaxed text-gray-300 mb-10">
            "Mixing environments can be highly beneficial! Some families choose clinic-based therapy for intensive work and home-based therapy for generalization of skills."
          </p>
          <Link to="/contact-us" className="btn-gold !px-12">Discuss Options with our Clinical Registrar</Link>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
             <div className="text-left md:text-center animate-on-scroll slide-left">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2 font-body">Ready to Start?</p>
                <Link to="/contact-us" className="text-3xl font-heading font-bold text-ks-navy hover:text-ks-gold transition-colors">Book Now</Link>
             </div>
             <div className="h-20 w-px bg-gray-200 hidden md:block"></div>
             <div className="text-left md:text-center animate-on-scroll slide-right">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2 font-body">Need Advice?</p>
                <a href="tel:1800543736" className="text-3xl font-heading font-bold text-ks-navy hover:text-ks-gold transition-colors">1800 543 736</a>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}
