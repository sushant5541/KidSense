import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ResourcesPage() {
  const sectionRef = useScrollAnimation()

  const categories = [
    {
      title: "Motor & Physical",
      icon: "🏃‍♂️",
      resources: [
        "Fine Motor Skills Checklist",
        "Gross Motor Skills Checklist",
        "Fine Motor Development Chart",
        "Gross Motor Development Chart"
      ]
    },
    {
      title: "Speech & Language",
      icon: "🗣️",
      resources: [
        "Stages of Language Development Chart",
        "Speech Sound (Articulation) Checklist",
        "Phonological Awareness Checklist",
        "Written Communication Checklist"
      ]
    },
    {
      title: "Social & Regulation",
      icon: "🧠",
      resources: [
        "Play and Social Skills Checklist",
        "Sensory Processing Checklist",
        "Self-Care & Organisation Checklist",
        "Social Skills Development Chart"
      ]
    }
  ]

  return (
    <div ref={sectionRef} className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a365d] to-[#2c5282] py-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6">
              Resource <span className="text-ks-gold">Library</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Empowering families and educators with free developmental charts, checklists, and 
              screening tools to support children's growth and success.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll slide-up">
            <h2 className="section-heading mb-4">Developmental Checklists & Charts</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              Our clinical team has developed these resources to act as screening tools and educational guides. 
              They are designed for parents and teachers to quickly identify if a child is meeting typical developmental milestones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="animate-on-scroll slide-up bg-gray-50 p-10 rounded-[3rem] border border-transparent hover:border-ks-gold/30 hover:bg-white hover:shadow-xl transition-all group" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-ks-navy text-white rounded-2xl flex items-center justify-center text-4xl group-hover:bg-ks-gold group-hover:scale-110 transition-all duration-500 shadow-lg">
                    {cat.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-ks-navy group-hover:text-ks-gold transition-colors">{cat.title}</h3>
                </div>
                <div className="space-y-4">
                  {cat.resources.map((res, j) => (
                    <div key={j} className="flex justify-between items-center group/item hover:bg-ks-gold/5 p-3 rounded-xl transition-all">
                      <span className="text-gray-600 font-medium group-hover/item:text-ks-navy transition-colors">{res}</span>
                      <button className="text-ks-gold hover:text-ks-navy transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Detector Callout */}
      <section className="py-24 bg-ks-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 underline decoration-ks-gold decoration-4 underline-offset-8">Development Detector</h2>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Not sure which resource to start with? Our <strong>Development Detector</strong> tool is a unique, 
                interactive screening guide designed to help you identify specific areas of concern 
                and receive a tailored list of next steps for your child.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                 <Link to="/contact-us" className="btn-gold !px-10">Launch Detector</Link>
                 <Link to="/areas-of-concern" className="bg-white/10 text-white font-bold px-10 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20">View Concern Areas</Link>
              </div>
            </div>
            <div className="animate-on-scroll slide-right hidden lg:block">
               <div className="relative">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-ks-gold/10 rounded-full blur-3xl"></div>
                  <div className="bg-white/5 p-12 rounded-[5rem] border border-white/10 text-center backdrop-blur-sm">
                     <span className="text-7xl mb-6 block">✨</span>
                     <p className="text-xl leading-relaxed italic text-gray-300">
                        "The fastest way to understand if your child needs support is through professional screening. We make it accessible and free."
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center animate-on-scroll slide-up">
            <div className="bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100 shadow-inner">
               <h3 className="text-2xl font-heading font-bold text-ks-navy mb-6">A Vital Note on Usage</h3>
               <p className="text-lg text-gray-600 leading-relaxed">
                 These charts and checklists are intended as screening tools to indicate if developmental 
                 delays may be present. They do <strong>not</strong> replace a definitive clinical 
                 assessment by a qualified Occupational Therapist or Speech Pathologist. 
               </p>
               <p className="mt-6 text-ks-gold font-bold">
                 If you have immediate concerns about a child's development, please contact us for a professional consultation.
               </p>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ks-gold text-ks-navy">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Need more personalized guidance?</h2>
          <p className="text-xl font-medium mb-12 max-w-2xl mx-auto">
            Book a free 15-minute phone consultation with our Clinical Registrar to discuss your child's specific situation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:1800543736" className="btn-navy !px-16 !py-5 text-xl">Call 1800 543 736</a>
            <Link to="/contact-us" className="bg-white px-16 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-shadow shadow-lg">New Enquiry Form</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
