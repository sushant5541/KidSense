import { useScrollAnimation } from '../hooks/useScrollAnimation'

const audiences = [
  {
    title: 'Parents',
    icon: '👨‍👩‍👧',
    gradient: 'from-blue-500 to-ks-navy',
    buttons: [
      { label: 'Occupational Therapy', href: '#ot' },
      { label: 'Speech Therapy', href: '#st' },
      { label: 'Therapy Delivery Options', href: '#' },
    ]
  },
  {
    title: 'Educators',
    icon: '👩‍🏫',
    gradient: 'from-ks-gold to-orange-500',
    buttons: [
      { label: 'Presentations & Workshops', href: '#' },
      { label: 'Developmental Screenings', href: '#' },
      { label: 'In-Education Service', href: '#' },
    ]
  },
  {
    title: 'Career Seekers',
    icon: '💼',
    gradient: 'from-emerald-500 to-teal-600',
    buttons: [
      { label: 'Careers at Kid Sense', href: '#' },
      { label: 'Graduate Program', href: '#' },
      { label: 'Positions Available', href: '#' },
    ]
  },
]

export default function InfoForYou() {
  const sectionRef = useScrollAnimation()

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-ks-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll slide-up">
          <h3 className="section-heading mb-4">
            See the Information <span className="gradient-text">specific to you...</span>
          </h3>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We provide tailored support for parents, educators, and career seekers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="animate-on-scroll slide-up group"
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Header with Gradient */}
                <div className={`bg-gradient-to-r ${audience.gradient} p-8 text-center relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl border border-white/20">
                      {audience.icon}
                    </div>
                    <h3 className="text-white font-heading font-bold text-2xl">
                      {audience.title}
                    </h3>
                  </div>
                </div>

                {/* Buttons */}
                <div className="p-6 space-y-3">
                  {audience.buttons.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.href}
                      className="block w-full text-center py-3 px-4 rounded-xl bg-ks-gray text-ks-navy font-medium text-sm
                               hover:bg-ks-gold hover:text-white transition-all duration-300 hover:shadow-md"
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
