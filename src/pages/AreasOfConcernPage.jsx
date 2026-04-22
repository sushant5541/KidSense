import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function AreasOfConcernPage() {
  const sectionRef = useScrollAnimation()

  const categories = [
    {
      title: "Communication & Literacy",
      icon: "🗣️",
      items: [
        "Speech Sound (Articulation)",
        "Expressive & Receptive Language",
        "Following Instructions",
        "Phonological (Sound) Awareness",
        "Social Communication Skills",
        "Reading, Spelling & Writing"
      ]
    },
    {
      title: "Motor Skills",
      icon: "🏃‍♂️",
      items: [
        "Fine Motor / Hand Control",
        "Gross Motor / Balance",
        "Handwriting Performance",
        "Crossing Body Midline",
        "Manipulation & Coordination",
        "Motor Planning & Sequencing"
      ]
    },
    {
      title: "Regulation & Behavior",
      icon: "🧠",
      items: [
        "Sensory Processing & Diet",
        "Attention & Concentration",
        "Executive Functioning",
        "Emotional Regulation",
        "Self-Regulation Strategies",
        "Interoception (Body Awareness)"
      ]
    },
    {
      title: "Daily Living & Social",
      icon: "🏠",
      items: [
        "Self-Care Independence",
        "Organization & Planning",
        "Play & Social Skills",
        "Kids Organisation Skills",
        "Sleep & Routine Support",
        "Transitions & Flexibility"
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
              Your <span className="text-ks-gold">Concerns</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Every child follows their own developmental path. We provide specialized resources and 
              clinical support to help you understand and overcome the challenges your child may be facing.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll slide-up">
            <h2 className="section-heading mb-4">Developmental Support Categories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              The first step in supporting your child is identifying the areas where they are struggling. 
              Below are the primary developmental domains where our Occupational and Speech Therapy team can provide expert assistance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="animate-on-scroll slide-up bg-gray-50 p-10 rounded-[3rem] border border-transparent hover:border-ks-gold/30 hover:bg-white hover:shadow-xl transition-all group" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-ks-navy text-white rounded-2xl flex items-center justify-center text-4xl group-hover:bg-ks-gold group-hover:scale-110 transition-all duration-500 shadow-lg">
                    {cat.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-ks-navy group-hover:text-ks-gold transition-colors">{cat.title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cat.items.map((item, j) => (
                    <div key={j} className="flex gap-3 items-center group/item">
                      <div className="w-1.5 h-1.5 bg-ks-gold rounded-full flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                      <span className="text-gray-600 text-[15px] group-hover/item:text-ks-navy transition-colors">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fact Sheets Section */}
      <section className="py-24 bg-ks-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Clinical Fact Sheets</h2>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Our expert clinicians have developed over 40+ fact sheets covering specific diagnoses, 
                therapeutic interventions, and educational strategies. These resources are designed to 
                provide you with immediate, actionable information.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
                 <Link to="/resources" className="btn-gold !px-10">Access Resource Library</Link>
                 <Link to="/contact-us" className="bg-white/10 text-white font-bold px-10 py-3 rounded-full hover:bg-white/20 transition-colors border border-white/20">Ask a Question</Link>
              </div>
            </div>
            <div className="animate-on-scroll slide-right hidden lg:block">
               <div className="relative">
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-ks-gold/10 rounded-full blur-3xl"></div>
                  <div className="bg-white/5 p-12 rounded-[5rem] border border-white/10 backdrop-blur-sm">
                     <p className="text-2xl leading-relaxed italic text-gray-300">
                        "Empowering parents with knowledge is the most powerful intervention. Our fact sheets bridge the gap between clinical theory and daily life."
                     </p>
                     <p className="mt-8 font-bold text-ks-gold">— Joanna Buttfield, Director</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnoses Checklist */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center animate-on-scroll slide-up">
            <h2 className="section-heading mb-8">Diagnoses Support</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              We provide assessment and ongoing therapy for children with specific diagnoses including but not limited to:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               {["Autism (ASD)", "ADHD / ADD", "Dyspraxia / DCD", "Dyslexia & Literacy Challenges", "Sensory Processing Disorder", "Developmental Delay", "Cerebral Palsy"].map((diag, i) => (
                  <span key={i} className="bg-ks-gold/10 text-ks-navy px-6 py-3 rounded-full font-bold border border-ks-gold/20 hover:bg-ks-gold hover:text-white transition-all transform hover:-translate-y-1">
                     {diag}
                  </span>
               ))}
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-ks-gold text-ks-navy">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Not sure which area to focus on?</h2>
          <p className="text-xl font-medium mb-12 max-w-2xl mx-auto">
            Book a free 15-minute phone consultation with our Clinical Registrar to discuss your concerns.
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
