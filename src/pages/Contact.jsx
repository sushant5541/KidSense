import { useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const sectionRef = useScrollAnimation()

  return (
    <div ref={sectionRef} className="pt-20">
      {/* Hero Section */}
      <section className="bg-ks-navy py-16 md:py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Get in <span className="text-ks-gold">Touch</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-xl">
                We're here to help your child reach their full potential. Contact our friendly team for any enquiries or to book an appointment.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="tel:1800543736" className="btn-gold flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  1800 543 736
                </a>
                <a href="mailto:kidsense@childdevelopment.com.au" className="btn-outline-gold flex items-center justify-center gap-2 border-white/20 text-white hover:border-ks-gold hover:text-ks-gold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
              </div>
            </div>
            <div className="animate-on-scroll slide-right hidden lg:block">
              <div className="relative">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-ks-gold/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-ks-blue/20 rounded-full blur-3xl animate-pulse delay-700" />
                <img 
                  src="https://childdevelopment.com.au/wp-content/uploads/2022/10/Logo.png" 
                  alt="KidSense Logo Large" 
                  className="w-full opacity-10 drop-shadow-2xl grayscale brightness-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-on-scroll slide-left bg-gray-50 p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-heading font-bold text-ks-navy mb-8">Send us an Enquiry</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-ks-gold focus:border-ks-gold outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-ks-gold focus:border-ks-gold outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-ks-gold focus:border-ks-gold outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-ks-gold focus:border-ks-gold outline-none transition-all" placeholder="0400 000 000" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Reason for Enquiry</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-ks-gold focus:border-ks-gold outline-none transition-all appearance-none bg-white">
                    <option>General Enquiry</option>
                    <option>Occupational Therapy</option>
                    <option>Speech Therapy</option>
                    <option>Careers</option>
                    <option>Book Appointment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-ks-gold focus:border-ks-gold outline-none transition-all" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="btn-gold w-full py-4 text-lg">Send Message</button>
              </form>
            </div>

            {/* Information Side */}
            <div className="animate-on-scroll slide-right space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-ks-navy mb-8">Contact Information</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-3xl shadow-lg shadow-gray-100 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-ks-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-ks-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-ks-navy">Office Hours</h4>
                      <p className="text-gray-500">Mon - Fri: 8:15am - 5:15pm</p>
                      <p className="text-gray-400 text-sm italic">Clinics vary, please call to confirm.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-white border border-gray-100 rounded-3xl shadow-lg shadow-gray-100 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-ks-gold/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-ks-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-ks-navy">Main Office</h4>
                      <p className="text-gray-500">90 Fullarton Road, Unley SA 5061</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-heading font-bold text-ks-navy mb-6">Our Locations</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['Unley', 'Morphett Vale', 'Walkerville', 'Golden Grove', 'West Lakes', 'Glenelg'].map(loc => (
                    <div key={loc} className="p-4 border border-gray-100 rounded-2xl text-center hover:bg-ks-gold hover:text-white transition-all cursor-pointer font-semibold text-gray-600">
                      {loc}
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-gray-400 text-center">
                  Click a location to see map and specific details.
                </p>
              </div>

              <div className="bg-ks-navy p-8 rounded-3xl text-white">
                <h4 className="text-xl font-bold mb-4">Emergency Support</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Please note that we are a scheduled multidisciplinary clinic and are not equipped to handle medical emergencies.
                </p>
                <div className="flex items-center gap-4 text-ks-gold font-bold">
                  <span>If life is in danger, please call</span>
                  <span className="text-2xl">000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
