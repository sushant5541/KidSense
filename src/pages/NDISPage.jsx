import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function NDISPage() {
  const sectionRef = useScrollAnimation()

  const supports = [
    {
      title: "Self-Managed",
      desc: "You have total control over your funds and service providers. We provide invoices for you to claim through the NDIS portal.",
      icon: "🙋‍♂️"
    },
    {
      title: "Plan-Managed",
      desc: "A Plan Manager handles your funding. We work directly with them to ensure your invoices are paid promptly.",
      icon: "💼"
    },
    {
      title: "NDIA-Managed",
      desc: "The NDIA manages your funding. We (as a registered provider) claim directly from the NDIS portal for services provided.",
      icon: "🏛️"
    }
  ]

  return (
    <div ref={sectionRef} className="pt-20">
      {/* Hero */}
      <section className="bg-ks-navy py-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-left">
              <span className="inline-block bg-ks-gold/20 text-ks-gold px-4 py-1.5 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">
                Support & Funding
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6">
                NDIS <span className="text-ks-gold">Services</span>
              </h1>
              <p className="text-xl text-gray-400 mb-10 max-w-xl leading-relaxed">
                As a registered NDIS provider, we help families navigate the scheme to get the best outcomes for their children.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/contact-us" className="btn-gold !px-12">New NDIS Enquiry</Link>
                <a href="#funding-types" className="text-white hover:text-ks-gold flex items-center gap-2 font-bold transition-colors">
                  Management Types 
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="animate-on-scroll slide-right grayscale opacity-30">
               <img src="https://childdevelopment.com.au/wp-content/uploads/2022/10/kidsense-blue.svg" alt="NDIS Support" className="w-[80%] mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center animate-on-scroll slide-up">
            <h2 className="section-heading mb-8 underline decoration-ks-gold decoration-4 underline-offset-8">What is the NDIS?</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              The National Disability Insurance Scheme (NDIS) is Australia’s first national scheme for people with disability. 
              It provides funding directly to individuals so they can access the supports and services they need to live 
              an ordinary life. At Kid Sense, we have been helping families navigate the NDIS since its inception.
            </p>
        </div>
      </section>

      {/* Funding Types */}
      <section id="funding-types" className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll slide-up">
            <h2 className="section-heading mb-4">Funding Management Types</h2>
            <p className="text-gray-500">How you choose to manage your NDIS plan affects how you interact with us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supports.map((s, i) => (
              <div key={i} className="animate-on-scroll slide-up bg-white p-10 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all border border-gray-100 group" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-20 h-20 bg-ks-navy text-white rounded-2xl flex items-center justify-center text-4xl mb-8 group-hover:bg-ks-gold group-hover:text-ks-navy transition-all duration-500">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold text-ks-navy mb-6">{s.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Intervention */}
      <section className="py-24 bg-ks-gold text-ks-navy overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left">
              <h2 className="text-4xl font-heading font-bold mb-8">Early Childhood Intervention</h2>
              <p className="text-xl font-medium mb-8 leading-relaxed">
                For children under 9 years of age, the NDIS provides early intervention support through the Early Childhood Approach.
              </p>
              <div className="space-y-6">
                <p className="text-ks-navy/80">
                  Early intervention is about giving children and their families support as early as possible to help the child 
                  develop the skills they need for daily life. Getting the right support early can lead to better long-term 
                  outcomes for your child.
                </p>
                <div className="bg-white/30 p-8 rounded-3xl border border-white/20">
                   <p className="font-bold flex items-center gap-3">
                      <span className="text-2xl">✨</span> 
                      Our clinicians specialize in Early Childhood support and are experienced in writing NDIS Progress Reports for plan reviews.
                   </p>
                </div>
              </div>
            </div>
            <div className="animate-on-scroll slide-right hidden lg:block">
               <img src="https://childdevelopment.com.au/wp-content/uploads/2024/07/Image-41.png" alt="Early Intervention" className="w-full h-auto rounded-[4rem] shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center animate-on-scroll slide-up">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ks-navy mb-10">Have questions about your NDIS plan?</h2>
          <p className="text-xl text-gray-500 mb-12">
            Our friendly NDIS Coordinator can help you understand how to use your funding for Occupational and Speech Therapy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <Link to="/contact-us" className="btn-navy !px-16 !py-5 text-xl">Email our NDIS Team</Link>
            <a href="tel:0882727522" className="text-2xl font-heading font-bold text-ks-navy border-b-4 border-ks-gold pb-2 hover:text-ks-gold transition-colors">
              Call 08 8272 7522
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
