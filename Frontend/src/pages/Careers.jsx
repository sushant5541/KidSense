import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Careers() {
  const sectionRef = useScrollAnimation()

  const benefits = [
    {
      title: "Competitive salaries and benefits",
      desc: "We meet and exceed others.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.02 45.73" className="w-10 h-10 fill-ks-gold">
          <path d="M32,16.69a14.39,14.39,0,0,1-2.21,7.49c-4.16,7.05-8.6,13.94-13,20.84-.61.95-1,.95-1.57,0-4.41-6.9-8.88-13.76-13-20.84A16,16,0,0,1,27,4.42C30.35,7.53,32,11.44,32,16.69ZM15.9,22.87a6.76,6.76,0,0,0,7-6.76A6.85,6.85,0,1,0,9.17,16,6.76,6.76,0,0,0,15.9,22.87Z" />
        </svg>
      )
    },
    {
      title: "Support, Supervision & Professional Development",
      desc: "1:1 supervision & team and individual PD budgets.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.39 53.01" className="w-10 h-10 fill-ks-gold">
          <path d="M37,.15h0C35.45.63,33.72,5,33.27,8.4c-.21,1.68-.21,3.85,1,4.62a2.4,2.4,0,0,0,2,.33c1.48-.43,3-2.35,4.89-6.24a4.81,4.81,0,0,0,.41-1.38,6.13,6.13,0,0,0-1.77-5A2.84,2.84,0,0,0,37,.15" />
          <path d="M12.6,2.32a3.06,3.06,0,0,0-1.53,2.62c0,2,5.36,7.83,8.61,9.37,1.18.56,2.09.59,2.69.08a3.64,3.64,0,0,0,1-2.7,12.57,12.57,0,0,0-4.08-8.88A4.66,4.66,0,0,0,18.14,2a6.4,6.4,0,0,0-5.54.32" />
          <path d="M3.94,20.93A6.17,6.17,0,0,0,.11,24.64a3.36,3.36,0,0,0-.11.82,2.94,2.94,0,0,0,.79,2c1.23,1.37,8.49,1.15,12.3,0C15,26.81,16,26,16.1,25.1a2,2,0,0,0-.54-1.6c-1.37-1.59-5.28-2.65-10.19-2.77a5.14,5.14,0,0,0-1.43.2" />
          <path d="M39.86,34.74a2.38,2.38,0,0,0-.58,1.9C39.43,39.2,42,43,45.37,45.71a5,5,0,0,0,1.26.7,6.17,6.17,0,0,0,5.26-1.1,3.61,3.61,0,0,0,1.56-3.15c-.15-1.84-6.06-6.06-9.81-7.42-1.85-.67-3.13-.67-3.78,0" />
          <path d="M29.35,40.84c-1.91.58-4,2.68-4,6.69,0,.45,0,.92.08,1.42a4.07,4.07,0,0,0,.34,1.28A4.5,4.5,0,0,0,32,52.53a2.68,2.68,0,0,0,1.5-1.62l0-.11,0-.1a20.19,20.19,0,0,1-1-6.49l-.1-2.15,0-.07a2.56,2.56,0,0,0-3-1.15" />
          <path d="M54.66,14.5h-.11l-.1.06a49.57,49.57,0,0,1-11.12,5.9l-.07,0-.06.05c-.79.79-1.86,3.34-.64,4.55,2,2,6.91,1.52,12.59-1.18A5.48,5.48,0,0,0,56.44,23c2.39-2.37,2.59-5.06.54-7.37a3.1,3.1,0,0,0-2.32-1.13" />
          <path d="M16.06,35.13l-.08,0-.05.05A53.86,53.86,0,0,1,6,42.55l-.09.06,0,.1a2.87,2.87,0,0,0,.07,2.36,4.91,4.91,0,0,0,2.74,2.69,5.14,5.14,0,0,0,3.9-.17,4.72,4.72,0,0,0,1.17-.79c4.2-4,6.14-7.95,5.08-10.3a2.14,2.14,0,0,0-2.77-1.37" />
          <path d="M23.9,36.34C18.66,33.17,17.1,27,22,20c3.41-4.88,6.9-6.2,9.25-4.78a3.81,3.81,0,0,1,2,2.81,2.21,2.21,0,0,1,1.81.32c4.14,2.5,5,8.26,1.09,14.72C33.2,37.89,28.8,39.3,23.9,36.34m7.18-7.19c2.29-4.4,1.88-5.57,1-7.94-2,.45-4.53,2.87-5.77,4.93-2.17,3.62,2.66,7.13,4.8,3" />
        </svg>
      )
    },
    {
      title: "Flexibility",
      desc: "Optional compressed schedules and flexibility to work from home.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.49 41.49" className="w-10 h-10 fill-ks-gold">
          <path d="M23,.89,27.22,14a1.3,1.3,0,0,0,1.24.9H42.19A1.29,1.29,0,0,1,43,17.2L31.84,25.28a1.3,1.3,0,0,0-.47,1.44l4.25,13.07a1.3,1.3,0,0,1-2,1.45L22.51,33.16a1.31,1.31,0,0,0-1.53,0L9.87,41.24a1.29,1.29,0,0,1-2-1.45l4.24-13.07a1.27,1.27,0,0,0-.47-1.44L.54,17.2a1.29,1.29,0,0,1,.76-2.34H15a1.29,1.29,0,0,0,1.23-.9L20.51.89A1.3,1.3,0,0,1,23,.89Z" />
        </svg>
      )
    },
    {
      title: "Amazing Resources",
      desc: "Your own treatment room fully loaded with toys and tech (Laptop and iPad).",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43.32 39.04" className="w-10 h-10 fill-ks-gold">
          <path d="M21.7,5c.42-.44.83-.89,1.28-1.31A13.84,13.84,0,0,1,28.1.54a10.92,10.92,0,0,1,8.24.63,9.05,9.05,0,0,1,2.87,2.26,15.49,15.49,0,0,1,3.63,6.4A14.28,14.28,0,0,1,42.6,18a21.91,21.91,0,0,1-3.23,6.24A41.21,41.21,0,0,1,33,31a83.62,83.62,0,0,1-10.85,7.85.81.81,0,0,1-1,0,88.17,88.17,0,0,1-9.42-6.63A44.73,44.73,0,0,1,4.57,25,23.24,23.24,0,0,1,.9,18.52,14.85,14.85,0,0,1,0,12.43a13.87,13.87,0,0,1,2-6.25A17.51,17.51,0,0,1,5.16,2.41a7.11,7.11,0,0,1,1.9-1.25A11.22,11.22,0,0,1,12.43,0a11.3,11.3,0,0,1,5.26,1.63,15.4,15.4,0,0,1,3.7,3l.23.24.08,0" />
        </svg>
      )
    },
    {
      title: "Career Progression",
      desc: "Leadership and specialist role; in house promotion preferred.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" className="w-10 h-10 fill-ks-gold">
          <path d="M32.4867 9.95441L26.1252 16.3158V34.2673C26.1252 34.9354 25.8856 35.5091 25.4063 35.9883C24.927 36.4676 24.3533 36.7073 23.6852 36.7073C23.0171 36.7073 22.4434 36.4676 21.9642 35.9883C21.4849 35.5091 21.2452 34.9354 21.2452 34.2673V25.9016H19.8509V34.2673C19.8509 34.9354 19.6113 35.5091 19.132 35.9883C18.6527 36.4676 18.079 36.7073 17.4109 36.7073C16.7428 36.7073 16.1692 36.4676 15.6899 35.9883C15.2106 35.5091 14.9709 34.9354 14.9709 34.2673V16.3158L8.60951 9.95441C8.20285 9.54775 7.99951 9.05394 7.99951 8.47299C7.99951 7.89203 8.20285 7.39822 8.60951 6.99156C9.01618 6.58489 9.50999 6.38156 10.0909 6.38156C10.6719 6.38156 11.1657 6.58489 11.5724 6.99156L16.5395 11.9587H24.5567L29.5238 6.99156C29.9305 6.58489 30.4243 6.38156 31.0052 6.38156C31.5862 6.38156 32.08 6.58489 32.4867 6.99156C32.8933 7.39822 33.0967 7.89203 33.0967 8.47299C33.0967 9.05394 32.8933 9.54775 32.4867 9.95441ZM25.4281 6.38156C25.4281 7.73227 24.9524 8.88328 24.0011 9.83459C23.0498 10.7859 21.8988 11.2616 20.5481 11.2616C19.1974 11.2616 18.0464 10.7859 17.095 9.83459C16.1437 8.88328 15.6681 7.73227 15.6681 6.38156C15.6681 5.03084 16.1437 3.87983 17.095 2.92852C18.0464 1.97721 19.1974 1.50156 20.5481 1.50156C21.8988 1.50156 23.0498 1.97721 24.0011 2.92852C24.9524 3.87983 25.4281 5.03084 25.4281 6.38156Z" fill="#FFB71A" />
        </svg>
      )
    },
  ]

  const pathways = [
    {
      title: "Positions Vacant",
      subtitle: "Apply Now",
      path: "/careers/positions-vacant",
      icon: "Positions"
    },
    {
      title: "Chat to Us",
      subtitle: "Call our Clinical Director for a confidential discussion on +91 80 4123 4567",
      path: "tel:+918041234567",
      icon: "Chat"
    },
    {
      title: "Come'n Try",
      subtitle: "Experience Kid Sense",
      path: "/careers/come-n-try",
      icon: "Try"
    }
  ]

  return (
    <div ref={sectionRef} className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ks-navy/5 to-ks-navy/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-left">
              <img 
                src="https://kidsense.in/wp-content/uploads/2022/10/kidsense-blue.svg" 
                alt="KidSense Logo" 
                className="w-48 mb-6 mx-auto lg:mx-0"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ks-navy mb-6 leading-tight">
                Careers at <span className="text-ks-gold">Kid Sense</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                Unlock the Magic. Enjoy Work, Change Lives and Progress Your Career.
              </p>
            </div>
            <div className="animate-on-scroll slide-right h-full">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-[400px] lg:h-[500px]">
                <img 
                  src="https://childdevelopment.com.au/wp-content/uploads/2022/12/banner-template-1024x619.png" 
                  alt="KidSense Careers" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="animate-on-scroll slide-up text-center p-6 rounded-2xl hover:bg-ks-gold/5 transition-all duration-300 border border-transparent hover:border-ks-gold/20" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 bg-ks-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {benefit.icon}
                </div>
                <h3 className="font-heading font-bold text-ks-navy mb-4 text-lg">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Choice Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-ks-navy mb-6">
                Choose The Career Program For You And Unlock The Magic
              </h2>
              <h3 className="text-xl md:text-2xl font-heading text-ks-gold mb-6">
                Enjoy work, Change Lives and Progress Your Career
              </h3>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
                <p>
                  Our team are the heart of the caring change that we create in our clients. We know that when we care for our team, they can care more for their clients.
                </p>
                <p>
                  Our team centric care begins with great benefits & flexibility, providing career and personal development opportunities and offering a positive and fun culture.
                </p>
              </div>
              <a href="#career-pathway" className="btn-gold inline-block">
                See our Unique Career Pathways
              </a>
            </div>
            <div className="animate-on-scroll slide-right relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
                <img 
                  src="https://childdevelopment.com.au/wp-content/uploads/2024/06/Image-04.png" 
                  alt="Career Program" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ks-navy/20 flex items-center justify-center group-hover:bg-ks-navy/30 transition-all">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-10 h-10 text-ks-gold fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Pathways */}
      <section id="career-pathway" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll slide-up">
            <h2 className="section-heading mb-4">Your Pathway to Success</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Whether you're a recent graduate or an experienced professional, we have a place for you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pathways.map((item, i) => (
              <a 
                key={i} 
                href={item.path} 
                className="animate-on-scroll slide-up bg-ks-navy rounded-3xl p-8 text-center text-white hover:bg-ks-gold transition-all duration-500 group relative overflow-hidden" 
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-ks-navy/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.39 53.01" className="w-10 h-10 fill-ks-gold group-hover:fill-white transition-colors">
                      <path d="M37,.15h0C35.45.63,33.72,5,33.27,8.4c-.21,1.68-.21,3.85,1,4.62a2.4,2.4,0,0,0,2,.33c1.48-.43,3-2.35,4.89-6.24a4.81,4.81,0,0,0,.41-1.38,6.13,6.13,0,0,0-1.77-5A2.84,2.84,0,0,0,37,.15" />
                      <path d="M12.6,2.32a3.06,3.06,0,0,0-1.53,2.62c0,2,5.36,7.83,8.61,9.37,1.18.56,2.09.59,2.69.08a3.64,3.64,0,0,0,1-2.7,12.57,12.57,0,0,0-4.08-8.88A4.66,4.66,0,0,0,18.14,2a6.4,6.4,0,0,0-5.54.32" />
                      {/* shortened path for demo */}
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold mb-4">{item.title}</h3>
                  <p className="text-white/70 group-hover:text-ks-navy transition-colors">{item.subtitle}</p>
                </div>
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11 5l-1.4 1.4L14.2 11H3v2h11.2l-4.6 4.6L11 19l7-7-7-7z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Testimonial Section */}
      <section className="py-20 bg-ks-navy text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-left order-2 lg:order-1">
              <img 
                src="https://childdevelopment.com.au/wp-content/uploads/2024/07/Layer_4.png" 
                alt="Staff Testimonial" 
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
            <div className="animate-on-scroll slide-right order-1 lg:order-2">
              <div className="flex items-center gap-2 text-ks-gold mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h2 className="text-4xl font-heading font-bold mb-8">What Our Staff Say</h2>
              <blockquote className="text-xl md:text-2xl italic text-gray-300 leading-relaxed mb-8 border-l-4 border-ks-gold pl-6">
                "Finding Kid Sense felt like finding my therapy home. The support is incredible, and I truly feel like I'm making a difference every single day while growing my own career."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-ks-gold rounded-full flex items-center justify-center font-bold text-ks-navy">
                  JS
                </div>
                <div>
                  <p className="font-bold">Jessica Sutherland</p>
                  <p className="text-sm text-gray-400">Senior Occupational Therapist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ks-gold">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-ks-navy mb-10 leading-tight">
            Ready to Unlock Your Potential? <br className="hidden md:block" />
            Join the Kid Sense Team Today.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link to="/careers/positions-vacant" className="btn-navy w-full sm:w-auto">
              View Current Vacancies
            </Link>
            <a href="tel:+918041234567" className="bg-white text-ks-navy font-bold px-10 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg w-full sm:w-auto">
              Call Clinical Director
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
