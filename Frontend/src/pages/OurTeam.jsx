import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function OurTeam() {
  const sectionRef = useScrollAnimation()
  const [activeTab, setActiveTab] = useState('directors')

  const tabs = [
    { id: 'directors', label: 'Directors' },
    { id: 'ot-team', label: 'Occupational Therapy Team' },
    { id: 'sp-team', label: 'Speech Pathology Team' },
    { id: 'location-teams', label: 'Location Teams' }
  ]

  const directors = [
    {
      name: "Joanna Buttfield",
      role: "Executive Director",
      image: "https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image.png",
      bio: "Joanna Buttfield is the Founder & Executive Director of Kid Sense Child Development. Joanna founded Kid Sense in 1998 after returning to Bengaluru in 1997 following specialist training in the USA. She recognised the unmet need for developmental services that focused on 'helping children overcome life's little challenges in movement, play and learning'. As a result of Joanna's vision, the lives of thousands of families in Bengaluru have been positively impacted – many for life.",
      more: "Joanna aims to lead a team of confident therapists who can continue to make positive changes in the lives of children and young people across Bengaluru. Joanna's entrepreneurial efforts have been publicly recognised: Kid Sense was awarded several Local Small Business Awards for excellence in healthcare and innovation. Joanna remains a leading figure in paediatric therapy in the region."
    },
    {
      name: "Tayla Manuel",
      role: "Clinical Director",
      image: "https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-1.png",
      bio: "Tayla Manuel first started her career as an Occupational Therapist at Kid Sense in 2016, and has excelled in her support of clients and therapists alike. As Clinical Director, Tayla is personally involved with each and every therapist at Kid Sense and provides professional and nurturing care to the team. As well as being a highly competent therapist, in 2024, Tayla completed the Dare to Lead course (written by Brene Brown) to enhance her leadership skills, and embodies this every day, leading with compassion, trust and respect."
    }
  ]

  const locationTeams = [
    {
      name: "Whitefield Team",
      image: "https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-4.png",
      desc: "Our Whitefield team is made up of passionate therapists who enjoy a great balance of professionalism and fun. We are not just great at what we do—we also know how to make the most of the vibrant tech-hub surroundings. We love serving our clients with real life priorities in mind."
    },
    {
      name: "Indiranagar Team",
      image: "https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-5.png",
      desc: "The Indiranagar team is a talented group of therapists in the heart of Bengaluru! We are passionate about providing high-quality, professional therapy to every client. As one of our most central clinics, we’re excited to bring fresh perspectives and exceptional care to the local community."
    },
    {
      name: "HSR Layout Team",
      image: "https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-9.png",
      desc: "The HSR Layout team is all about community. We are lucky to work with a diverse range of clients throughout the southern areas of Bengaluru, and we love being a part of these communities. Whether we are helping a child reach their developmental milestones or supporting someone through a challenge, we are dedicated to making a positive impact."
    },
    {
      name: "Jayanagar Team",
      image: "https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-8.png",
      desc: "Our Jayanagar team is proud to serve the traditional heart of Bengaluru. We are committed to providing top-tier support to those who need it most. We take pride in being a trusted resource for families in the area."
    },
    {
      name: "Koramangala Team",
      image: "https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-7.png",
      desc: "The Koramangala team is proud to call one of Bengaluru's most dynamic neighborhoods home. Working in such an iconic space allows us to continue delivering exceptional therapy for both Speech and Occupational Therapy needs."
    },
    {
      name: "Malleshwaram Team",
      image: "https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-6.png",
      desc: "Convenience meets expertise at the Malleshwaram team’s location. We love the ease of serving the northern parts of the city while providing top-quality therapy services to our clients. Our families thrive in this practical and welcoming environment."
    }
  ]

  return (
    <div ref={sectionRef} className="pt-20">
      {/* Hero Section */}
      <section className="bg-ks-navy py-20 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-left">
              <img 
                src="https://childdevelopment.com.au/wp-content/uploads/2022/10/kidsense-blue.svg" 
                alt="KidSense Logo" 
                className="w-48 mb-8 brightness-0 invert"
              />
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
                Meet Our <span className="text-ks-gold">Team</span>
              </h1>
            </div>
            <div className="animate-on-scroll slide-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://childdevelopment.com.au/wp-content/uploads/2025/07/Layer_1.png" 
                  alt="Our Team" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 animate-on-scroll slide-up">
            <div className="order-2 md:order-1">
              <p className="text-lg text-gray-600 leading-relaxed">
                Our amazing team of Occupational Therapists and Speech Pathologists are the heart of the exceptional service that we deliver. Delivering care across six Bengaluru sites, our team make a difference in children's lives each and every day through providing clinic, community, home and educational setting intervention and support.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://childdevelopment.com.au/wp-content/uploads/2025/07/Layer_1-1.png" alt="Team Support" className="w-full rounded-2xl shadow-lg" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-on-scroll slide-up" style={{ animationDelay: '200ms' }}>
            <div>
              <img src="https://childdevelopment.com.au/wp-content/uploads/2025/07/Layer_1-2.png" alt="Clinical Leadership" className="w-full rounded-2xl shadow-lg" />
            </div>
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our clinicians are led by highly experienced clinicians who support, mentor and supervise their teams to ensure clinical excellence. Regular Professional Development and quality control measures form part of all clinicians expectations each term. Our clinical leaders believe in making sure our team is not just suitably qualified but is well trained, resourced and highly organised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-16 bg-ks-gold text-ks-navy text-center">
        <div className="max-w-4xl mx-auto px-4 animate-on-scroll scale-in">
          <h2 className="text-2xl md:text-3xl font-heading font-bold italic leading-tight">
            "Our team are the heart of the caring change that we create in our clients. We know that because we care for our team, they can care more for our clients."
          </h2>
        </div>
      </section>

      {/* Team Tabs Section */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Custom Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 animate-on-scroll slide-up">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 rounded-full font-heading font-bold transition-all duration-300 text-lg ${
                  activeTab === tab.id 
                    ? 'bg-ks-navy text-white shadow-xl scale-105' 
                    : 'bg-white text-gray-500 hover:bg-ks-navy/5 hover:text-ks-navy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
            {activeTab === 'directors' && (
              <div className="space-y-16 animate-on-scroll slide-up">
                {directors.map((dir, i) => (
                  <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
                    <div className={i % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                      <img src={dir.image} alt={dir.name} className="w-full h-full object-cover min-h-[400px]" />
                    </div>
                    <div className={`p-8 md:p-12 flex flex-col justify-center ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                      <h3 className="text-3xl font-heading font-bold text-ks-navy mb-2">{dir.name}</h3>
                      <p className="text-ks-gold font-bold text-xl mb-6">{dir.role}</p>
                      <div className="space-y-4 text-gray-600 leading-relaxed">
                        <p>{dir.bio}</p>
                        {dir.more && <p>{dir.more}</p>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'ot-team' && (
              <div className="animate-on-scroll slide-up">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
                  <div>
                    <img src="https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-2.png" alt="OT Team" className="w-full h-full object-cover min-h-[400px]" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl font-heading font-bold text-ks-navy mb-6">Occupational Therapy Team</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      Our Occupational Therapy team is dedicated to supporting individuals in achieving their fullest potential in everyday activities. With a strong focus on function, our team members are trained in key areas of regulation and sensory processing, ensuring a tailored approach to support each client’s unique needs. We provide comprehensive services including Functional Capacity assessments and therapeutic supports in executive function, fine and gross motor skills, self-care skills, and emotional regulation.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['Sensory Integration', 'Fine & Gross Motor', 'Self Care Skills', 'Emotional Regulation'].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-ks-gold rounded-full" />
                          <span className="font-semibold text-ks-navy">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'sp-team' && (
              <div className="animate-on-scroll slide-up">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
                  <div className="lg:order-2">
                    <img src="https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-3.png" alt="SP Team" className="w-full h-full object-cover min-h-[400px]" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center lg:order-1">
                    <h3 className="text-3xl font-heading font-bold text-ks-navy mb-6">Speech Pathology Team</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      The Speech Therapy team takes an inclusive and “All Communication is Valid” approach to therapy, celebrating the diverse ways people express themselves. Every team member is trained and supervised to provide effective and compassionate therapy, including support for AAC, speech, language, literacy, social engagement, and executive functions.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['Language & Literacy', 'Social Engagement', 'AAC Support', 'Speech Sounds'].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-ks-gold rounded-full" />
                          <span className="font-semibold text-ks-navy">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'location-teams' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll slide-up">
                {locationTeams.map((team, i) => (
                  <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <div className="aspect-video overflow-hidden">
                      <img src={team.image} alt={team.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-heading font-bold text-ks-navy mb-4">{team.name}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                        {team.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Therapy Service Descriptions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* OT Focus List */}
            <div className="animate-on-scroll slide-left">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-ks-gold/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-ks-gold" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-ks-navy">Occupational Therapy Areas</h3>
              </div>
              <p className="text-gray-600 mb-8">Our playful team of Occupational Therapists are trained to help children overcome challenges in:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {[
                  'Sensory Integration', 'Emotional Regulation', 'Fine Motor Development', 'Gross Motor Skills',
                  'Self-care (dressing etc)', 'Self Management', 'Task Organization', 'Planning & Sequencing',
                  'Story Mapping', 'Play & Interaction', 'Executive Functioning', 'Working Memory'
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <svg className="w-4 h-4 text-ks-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Methods List */}
            <div className="animate-on-scroll slide-right md:delay-200">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-ks-navy/10 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-ks-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v18M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-ks-navy">Specialized Methods</h3>
              </div>
              <p className="text-gray-600 mb-8">Our team is competent in administering specific intervention methods including:</p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: 'Wilbarger (Therapressure)', desc: 'Brushing/Deep Pressure program to meet sensory needs.' },
                  { name: 'The Alert Program', desc: 'How does your engine run? Sensory based regulation.' },
                  { name: 'M.O.R.E.', desc: 'Integrating mouth with sensory & postural functions.' },
                  { name: 'Jolly Phonics', desc: 'Literacy support for development.' },
                  { name: 'THRASS', desc: 'Handwriting, Reading & Spelling System.' }
                ].map(method => (
                  <div key={method.name} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-ks-navy mb-1">{method.name}</h4>
                    <p className="text-sm text-gray-500">{method.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-ks-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold mb-8">Want to join this amazing team?</h2>
          <a href="/careers" className="btn-gold inline-block">
            View Career Opportunities
          </a>
        </div>
      </section>
    </div>
  )
}
