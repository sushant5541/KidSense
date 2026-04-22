import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function SpeechTherapy() {
  const sectionRef = useScrollAnimation()

  return (
    <section ref={sectionRef} id="st" className="py-0 overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-stretch">
        {/* Content Side */}
        <div className="lg:w-1/2 flex items-center animate-on-scroll slide-left">
          <div className="px-8 lg:px-16 py-16 lg:py-0 max-w-xl ml-auto">
            <div className="inline-flex items-center gap-2 bg-ks-blue/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-ks-blue rounded-full" />
              <span className="text-ks-blue text-sm font-semibold">Our Services</span>
            </div>
            
            <h2 className="section-heading mb-6">
              Speech<br />
              <span className="gradient-text">Therapy</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Speech Therapy improves the functional talking, listening and understanding skills as well as play that children require across all environments, allowing them to be the best kids they can be.
            </p>

            <div className="space-y-3 mb-8">
              {['Speech & Articulation', 'Language Development', 'Social Communication', 'Literacy Skills', 'Fluency & Voice'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-ks-blue/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-ks-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <a href="#" className="btn-navy inline-block">
              Learn More
            </a>
          </div>
        </div>

        {/* Image Side */}
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] animate-on-scroll slide-right">
          <div className="absolute inset-0 bg-gradient-to-bl from-ks-gold/80 to-orange-500/80" />
          <img 
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80" 
            alt="Speech Therapy for children" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <p className="text-white/90 text-lg font-heading">Communication</p>
              <p className="text-white font-bold text-2xl font-heading">Is Key</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
