import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const sectionRef = useScrollAnimation()

  return (
    <div ref={sectionRef} className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ks-navy/5 to-ks-navy/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-left">
              <img 
                src="https://childdevelopment.com.au/wp-content/uploads/2022/10/kidsense-blue.svg" 
                alt="KidSense Logo" 
                className="w-48 mb-6 mx-auto lg:mx-0"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ks-navy mb-6 leading-tight">
                About <span className="text-ks-gold">Kid Sense</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Improving daily function, no matter where we deliver therapy.
              </p>
            </div>
            <div className="animate-on-scroll slide-right h-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] lg:h-[500px]">
                <img 
                  src="https://childdevelopment.com.au/wp-content/uploads/2022/12/banner-template-1024x619.png" 
                  alt="KidSense Banner" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll slide-up">
            <h2 className="section-heading mb-4">
              Our team are committed to Improving daily function, <br className="hidden md:block" /> 
              no matter where we deliver therapy. 
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left">
              <img 
                src="https://childdevelopment.com.au/wp-content/uploads/2024/07/Layer_1.png" 
                alt="KidSense Illustration" 
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
            <div className="animate-on-scroll slide-right">
              <h2 className="text-3xl font-heading font-bold text-ks-navy mb-6">Who Are We?</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 1998 by Joanna Buttfield (Occupational Therapist), Kid Sense began with a vision to overcome life’s challenges, 
                  believing in the importance of small steps. Evolving from a single clinic, we now proudly offer therapy from six 
                  metropolitan clinics, as well as community (home and school/preschool). Our dedicated team now also offer 
                  educator-focused supports (including workshops, developing screening, and In-Education services to educational settings).
                </p>
                <p>
                  We are now one of Bengaluru’s longest-standing private providers of paediatric 
                  <span className="text-ks-gold font-semibold"> Occupational Therapy</span> and 
                  <span className="text-ks-gold font-semibold"> Speech Therapy</span>, with a team of 40+ experienced therapists 
                  across six metropolitan clinics and the surrounding community.
                </p>
                <p>
                  Our aim is simple – to make each day functionally easier than the last!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Values */}
      <section className="py-20 bg-ks-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left">
              <h2 className="text-4xl font-heading font-bold mb-6">Our Vision and Values</h2>
              <div className="space-y-6 text-gray-300 text-lg">
                <p>
                  At Kid Sense, we recognise the challenges parents and educators face in today’s digital age and strive to provide support 
                  and knowledge, allowing them to feel supported and confident in delivering the ‘best fit’ child and young adult centered support.
                </p>
                <p>
                  We believe in <em className="text-ks-gold">holistic</em> child development (of all surrounding the child/young adults), 
                  and our approach aims to integrate therapy seamlessly into daily life, making a meaningful and functional impact well 
                  beyond traditional therapy appointments.
                </p>
                <blockquote className="border-l-4 border-ks-gold pl-6 italic text-xl text-white">
                  "We turn Worry into Wonderful with playful games, passionate staff and education of parents, carers and educators."
                </blockquote>
              </div>
            </div>
            <div className="animate-on-scroll slide-right">
              <img 
                src="https://childdevelopment.com.au/wp-content/uploads/2024/07/Image-27.png" 
                alt="Vision and Values" 
                className="w-full h-auto rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left order-2 lg:order-1">
              <img 
                src="https://childdevelopment.com.au/wp-content/uploads/2024/07/Image-41.png" 
                alt="Therapy Values" 
                className="w-full h-auto rounded-3xl"
              />
            </div>
            <div className="animate-on-scroll slide-right order-1 lg:order-2">
              <h2 className="text-4xl font-heading font-bold text-ks-navy mb-8">Therapy Values</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link to="/about/cultural-inclusivity" className="btn-outline-gold !px-4 !py-4 text-center text-sm md:text-base">
                  Cultural Inclusivity
                </Link>
                <Link to="/about/neuro-diverse-approach" className="btn-outline-gold !px-4 !py-4 text-center text-sm md:text-base">
                  Neuro Diverse Approach
                </Link>
                <Link to="/about/trauma-informed-practice" className="btn-outline-gold !px-4 !py-4 text-center text-sm md:text-base">
                  Trauma Informed Practice
                </Link>
                <Link to="/about/child-safe-environment" className="btn-outline-gold !px-4 !py-4 text-center text-sm md:text-base">
                  Child Safe Environment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interaction Quote CTA */}
      <section className="py-16 bg-ks-gold">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-ks-navy mb-10 leading-tight">
            In every interaction we ask: <br className="hidden md:block" />
            how can we improve the child’s daily life, not what therapy can we offer?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="tel:+918041234567" className="btn-navy w-full sm:w-auto">
              +91 80 4123 4567
            </a>
            <Link to="/contact-us" className="bg-white text-ks-navy text-center font-bold px-10 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto">
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
