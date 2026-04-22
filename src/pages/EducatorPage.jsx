import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function EducatorPage() {
  const sectionRef = useScrollAnimation()

  const services = [
    {
      title: "In-Education Service",
      desc: "Engage an 'in-house' Allied Health team of OTs and Speech Pathologists specifically for your facility.",
      icon: "🏢"
    },
    {
      title: "Professional Development",
      desc: "Interactive workshops and small-group learning for educators and parents on diverse developmental topics.",
      icon: "🎓"
    },
    {
      title: "Strategic Support",
      desc: "Expert input on Individual Education Plans (IEPs), curriculum modifications, and environment policies.",
      icon: "📈"
    },
    {
      title: "Developmental Screening",
      desc: "Optional age-based screenings to identify students who may need additional support.",
      icon: "📋"
    }
  ]

  const workshopTopics = [
    "Sensory Processing & Regulation in the Classroom",
    "Language & Literacy: Visual Strategies that Work",
    "Understanding Developmental Milestones",
    "Effective Questioning Techniques for Success",
    "Social-Emotional Skills and Peer Interaction",
    "Fine Motor Skills: Foundations for Handwriting"
  ]

  return (
    <div ref={sectionRef} className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2c5282] py-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-left text-center lg:text-left">
              <span className="inline-block bg-ks-gold/20 text-ks-gold px-4 py-1.5 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">
                Support for Schools & Educators
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                Partner with <br />
                <span className="text-ks-gold">Kid Sense</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Empowering educators with clinical expertise to create inclusive and thriving learning environments.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                <Link to="/contact-us" className="btn-gold !px-12">Discuss with our Team</Link>
                <a href="#services" className="text-white hover:text-ks-gold flex items-center gap-2 font-bold transition-colors">
                  View Services 
                  <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="animate-on-scroll slide-right relative hidden lg:block">
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80" 
                  alt="Educator support" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll slide-up">
            <h2 className="section-heading mb-4">Educator Focused Support</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              We understand the challenges teachers face in managing diverse classroom needs. Our Educator Options provide 
              practical, actionable, and sustainable strategies that integrate seamlessly into the school environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="animate-on-scroll slide-up bg-gray-50 p-8 rounded-3xl border border-transparent hover:border-ks-gold/30 hover:bg-white hover:shadow-xl transition-all group" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 bg-ks-navy text-white rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:bg-ks-gold group-hover:scale-110 transition-all duration-500">
                  {s.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-ks-navy mb-4">{s.title}</h3>
                <p className="text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="py-24 bg-ks-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Workshops & Presentations</h2>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed italic">
                "Practical, evidence-based training for teachers, ASOs, and administrators."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {workshopTopics.map((topic, i) => (
                  <div key={i} className="flex gap-4 items-center bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 bg-ks-gold rounded-full flex-shrink-0"></div>
                    <p className="text-sm font-medium">{topic}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                 <Link to="/contact-us" className="btn-gold !px-10">Request a Booking</Link>
              </div>
            </div>
            <div className="animate-on-scroll slide-right grayscale opacity-50 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-ks-navy to-transparent z-10" />
               <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?w=800&q=80" alt="Teacher training" className="w-full h-auto rounded-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Developmental Screening */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left order-2 lg:order-1">
               <div className="bg-ks-gold/10 p-12 rounded-[5rem] border border-ks-gold/20 flex items-center justify-center">
                  <div className="text-center">
                     <span className="text-6xl mb-6 block">🔍</span>
                     <h3 className="text-2xl font-heading font-bold text-ks-navy mb-4">Identification is key</h3>
                     <p className="text-gray-600 italic">Early detection leads to the most impactful interventions.</p>
                  </div>
               </div>
            </div>
            <div className="animate-on-scroll slide-right order-1 lg:order-2">
              <h2 className="section-heading mb-8">Developmental Screening</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Kid Sense can perform optional developmental screenings within your educational setting. These are designed to:
                </p>
                <ul className="space-y-4">
                   {[
                      "Assess individual students across various learning and developmental areas",
                      "Determine if a student’s skills are within age expectations",
                      "Identify children who would benefit from further clinical assessment",
                      "Provide data to help prioritize support for those with higher needs"
                   ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                         <span className="text-ks-gold font-bold">•</span>
                         <span>{item}</span>
                      </li>
                   ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ks-gold text-ks-navy">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Ready to bring Kid Sense to your school?</h2>
          <p className="text-xl font-medium mb-12 max-w-2xl mx-auto">
            Contact our Clinical Direction team today to discuss a tailored needs assessment for your educational setting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact-us" className="btn-navy !px-16 !py-5 text-xl">Email our Clinical Team</Link>
            <a href="tel:0882727522" className="bg-white px-16 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-shadow shadow-lg">Call 08 8272 7522</a>
          </div>
        </div>
      </section>
    </div>
  )
}
