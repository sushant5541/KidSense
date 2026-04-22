import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function SpeechTherapyPage() {
  const sectionRef = useScrollAnimation()

  const services = [
    {
      title: "Speech Sounds",
      desc: "Articulation and clarity—helping children produce sounds correctly and be understood.",
      icon: "📢"
    },
    {
      title: "Receptive Language",
      desc: "Understanding what others say, following directions, and processing information.",
      icon: "👂"
    },
    {
      title: "Expressive Language",
      desc: "Using words, sentences, and gestures to communicate needs, thoughts, and ideas.",
      icon: "🗣️"
    },
    {
      title: "Early Literacy",
      desc: "Pre-reading skills, phonological awareness, and early writing development.",
      icon: "📚"
    },
    {
      title: "Social Communication",
      desc: "Navigating conversations, understanding social cues, and interacting with peers.",
      icon: "🤝"
    },
    {
      title: "Stuttering & Fluency",
      desc: "Managing the flow of speech to increase confidence in communication.",
      icon: "➰"
    }
  ]

  return (
    <div ref={sectionRef} className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ks-gold/90 to-ks-gold py-20 text-ks-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-left">
              <span className="inline-block bg-ks-navy/10 text-ks-navy px-4 py-1.5 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">
                Our Core Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                Pediatric <br />
                <span className="text-white drop-shadow-sm">Speech Pathology</span>
              </h1>
              <p className="text-xl text-ks-navy/80 mb-10 max-w-xl leading-relaxed">
                Empowering children to communicate confidently and connect with the world around them.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact-us" className="btn-navy !bg-ks-navy !text-white">Book a Consultation</Link>
                <a href="#about-sp" className="text-ks-navy hover:text-white flex items-center gap-2 font-bold transition-colors">
                  Learn More 
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="animate-on-scroll slide-right relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1594608661623-aa0bd3a67d28?w=800&q=80" 
                  alt="Speech Therapy session" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-sp" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left order-2 lg:order-1 flex items-center justify-center">
               <div className="relative">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-ks-gold/10 rounded-full blur-3xl animate-pulse" />
                  <img src="https://childdevelopment.com.au/wp-content/uploads/2024/07/Image-27.png" alt="Communication" className="w-[80%] mx-auto rounded-3xl shadow-xl border border-gray-100" />
               </div>
            </div>
            <div className="animate-on-scroll slide-right order-1 lg:order-2">
              <h2 className="section-heading mb-8 underline decoration-ks-gold decoration-4 underline-offset-8">What is Speech Pathology?</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Pediatric Speech Pathology (also known as Speech Therapy) helps children who have difficulty with various aspects of communication, literacy, and social interaction.
                </p>
                <p>
                  At Kid Sense, we take an inclusive and <strong>“All Communication is Valid”</strong> approach. We celebrate the diverse ways people express themselves and tailor our therapy to suit each individual child’s unique communication style.
                </p>
                <p className="font-bold text-ks-navy">
                  Communication is the key to connection!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 bg-ks-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Areas of Expert Support</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our Speech Pathologists are trained and supervised to provide effective, compassionate therapy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="animate-on-scroll slide-up bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-ks-gold hover:text-ks-navy transition-all duration-500 group" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 bg-ks-gold text-ks-navy rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:bg-ks-navy group-hover:text-ks-gold transition-all duration-300 shadow-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-4 group-hover:text-ks-navy transition-colors">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-ks-navy/80 transition-colors leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs your child might need SP */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left">
              <h2 className="section-heading mb-8">When to Seek Support?</h2>
              <p className="text-gray-600 mb-10 text-lg">
                You might consider Speech Pathology if your child is displaying challenges with:
              </p>
              <div className="space-y-6">
                {[
                  "Being hard to understand by unfamiliar people (at age 3+)",
                  "Struggling to follow household or school instructions",
                  "Using shorter or less complex sentences than other children their age",
                  "Having trouble learning new words or remembering labels for things",
                  "Avoiding eye contact or possessing limited interest in social games",
                  "Showing frustration when they cannot communicate their needs"
                ].map((sign, i) => (
                  <div key={i} className="flex gap-4 items-center group">
                    <div className="w-8 h-8 bg-ks-gold/10 text-ks-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-ks-gold group-hover:text-ks-navy transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1.293-11.293a1 1 0 00-1.414-1.414L7 10.586 5.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium group-hover:translate-x-2 transition-transform duration-300">{sign}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-on-scroll slide-right">
                <div className="p-10 bg-ks-navy rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-ks-gold/10 rounded-full blur-3xl"></div>
                  <h3 className="text-2xl font-heading font-bold text-ks-gold mb-6 italic">Communication Mission:</h3>
                  <p className="text-xl leading-relaxed text-gray-200">
                    "Every person has the right to communicate. We support children to find their voice, whether through speech, signs, or technology, to ensure they can connect with those they love."
                  </p>
                  <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 bg-ks-gold text-ks-navy rounded-full flex items-center justify-center font-bold">KS</div>
                    <div>
                      <p className="font-bold">Speech Pathology Team</p>
                      <p className="text-xs text-gray-400">Clinical Leadership @ Kid Sense</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ks-navy">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">Empower your child's communication today.</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact-us" className="btn-gold !px-12">Book an Appointment</Link>
            <a href="tel:0882727522" className="bg-white/10 text-white font-bold px-12 py-3 rounded-full hover:bg-white hover:text-ks-navy transition-all shadow-lg border border-white/20">
              Call Clinical Director
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
