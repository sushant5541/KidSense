import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function OccupationalTherapy() {
  const sectionRef = useScrollAnimation()

  return (
    <section ref={sectionRef} id="ot" className="py-0 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-stretch">
        {/* Image Side */}
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] animate-on-scroll slide-left">
          <div className="absolute inset-0 bg-gradient-to-br from-ks-navy/90 to-ks-blue/80" />
          <img 
            src="https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=800&q=80" 
            alt="Occupational Therapy for children" 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/20">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="#FFB71A" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <p className="text-white/70 text-lg font-heading">Expert Therapy</p>
              <p className="text-ks-gold font-bold text-2xl font-heading">For Growing Minds</p>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2 flex items-center animate-on-scroll slide-right">
          <div className="px-8 lg:px-16 py-16 lg:py-0 max-w-xl">
            <div className="inline-flex items-center gap-2 bg-ks-gold/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-ks-gold rounded-full" />
              <span className="text-ks-gold text-sm font-semibold">Our Services</span>
            </div>
            
            <h2 className="section-heading mb-6">
              Occupational<br />
              <span className="gradient-text">Therapy</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Occupational Therapy improves the functional attention/concentration, behaviour, fine and gross motor movement, play and learning skills that children require across all environments and across the age span to do the things that kids do.
            </p>

            <div className="space-y-3 mb-8">
              {['Fine & Gross Motor Skills', 'Attention & Concentration', 'Sensory Processing', 'Play & Social Skills', 'Self-Care Skills'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-ks-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-ks-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <a href="#" className="btn-gold inline-block">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
