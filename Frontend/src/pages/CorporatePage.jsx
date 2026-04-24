import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function CorporatePage() {
  const sectionRef = useScrollAnimation()

  const values = [
    {
      title: "Holistic Development",
      desc: "We look beyond the immediate challenge to understand the whole child and their environment.",
      icon: "🌱"
    },
    {
      title: "Inclusivity",
      desc: "Celebrating neurodiversity and creating a safe space for every child to belong.",
      icon: "🌈"
    },
    {
      title: "Integrity",
      desc: "Transparent, honest, and evidence-based practice in everything we do.",
      icon: "🛡️"
    },
    {
      title: "Playfulness",
      desc: "We believe therapy works best when it's fun, engaging, and child-centered.",
      icon: "🎈"
    }
  ]

  return (
    <div ref={sectionRef} className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-ks-navy to-[#0a192f] py-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-on-scroll slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6">
              Our <span className="text-ks-gold">Vision & Values</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Founded on the belief that small steps lead to big changes, we are dedicated to improving the daily lives of children and families.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-on-scroll slide-left border-l-4 border-ks-gold pl-8">
              <h2 className="text-3xl font-heading font-bold text-ks-navy mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To provide accessible, high-quality pediatric Occupational and Speech Therapy that empowers children to reach their full potential and makes their daily lives functionally easier.
              </p>
            </div>
            <div className="animate-on-scroll slide-right border-l-4 border-ks-navy pl-8">
              <h2 className="text-3xl font-heading font-bold text-ks-navy mb-4">Our Vision</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                To be the leading provider of child-centered therapy in India, recognized for our commitment to families, our innovative approach, and our passionate team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll slide-up">
            <h2 className="section-heading mb-4">Core Values</h2>
            <p className="text-gray-500">The principles that guide our clinical practice and team culture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="animate-on-scroll slide-up bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border border-transparent hover:border-ks-gold/30" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-4xl mb-6">{v.icon}</div>
                <h3 className="text-xl font-heading font-bold text-ks-navy mb-4">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Child Safe Environment */}
      <section className="py-24 bg-ks-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Child Safe Environment</h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Kid Sense is committed to providing a child safe environment. We have zero tolerance for child abuse and are committed to the protection of children from all forms of harm.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-ks-gold rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">All staff undergo rigorous background checks and police verification.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-ks-gold rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">Regular training in child protection and ethical conduct.</p>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-ks-gold rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-300">Strict adherence to POSH and Child Protection Guidelines.</p>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll slide-right grayscale opacity-50">
               <img src="https://childdevelopment.com.au/wp-content/uploads/2022/10/kidsense-blue.svg" alt="Kid Sense Logo" className="w-[300px] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-ks-gold">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-ks-navy mb-8">Want to learn more about our commitment to excellence?</h2>
            <Link to="/about" className="btn-navy !px-12">Return to About Us</Link>
        </div>
      </section>
    </div>
  )
}
