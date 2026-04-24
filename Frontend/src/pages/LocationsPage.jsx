import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function LocationsPage() {
  const sectionRef = useScrollAnimation()

  const locations = [
    {
      name: "Unley",
      address: "90 Fullarton Road, Unley SA 5061",
      phone: "08 8272 7522",
      email: "unley@childdevelopment.com.au",
      image: "https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-7.png"
    },
    {
      name: "Morphett Vale",
      address: "Shop 2, 202-208 Main South Road, Morphett Vale SA 5162",
      phone: "08 8326 6603",
      email: "morphettvale@childdevelopment.com.au",
      image: "https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-8.png"
    },
    {
      name: "Walkerville",
      address: "Shop 10, 117 Walkerville Terrace, Walkerville SA 5081",
      phone: "08 8344 3303",
      email: "walkerville@childdevelopment.com.au",
      image: "https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-6.png"
    },
    {
      name: "Golden Grove",
      address: "Shop 16, Golden Grove Village Shopping Centre, Golden Grove SA 5125",
      phone: "08 8251 1500",
      email: "goldengrove@childdevelopment.com.au",
      image: "https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-9.png"
    },
    {
      name: "West Lakes",
      address: "Shop 23, West Lakes Shopping Centre, West Lakes SA 5021",
      phone: "08 8355 5222",
      email: "westlakes@childdevelopment.com.au",
      image: "https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-4.png"
    },
    {
      name: "Glenelg",
      address: "Shop 5, 100 Jetty Road, Glenelg SA 5045",
      phone: "08 8295 5566",
      email: "glenelg@childdevelopment.com.au",
      image: "https://childdevelopment.com.au/wp-content/uploads/2025/07/Featured-Image-5.png"
    }
  ]

  return (
    <div ref={sectionRef} className="pt-20">
      {/* Hero */}
      <section className="bg-ks-navy py-20 text-white overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-on-scroll slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6">
              Our <span className="text-ks-gold">Locations</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Conveniently located across Bengaluru to provide accessible therapy for your family.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {locations.map((loc, i) => (
              <div key={i} className="animate-on-scroll slide-up bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all group" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="aspect-video relative overflow-hidden">
                  <img src={loc.image} alt={loc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ks-navy/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-heading font-bold text-white">{loc.name}</h3>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-ks-gold/10 text-ks-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 leading-relaxed font-medium">{loc.address}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a href={`tel:${loc.phone}`} className="flex items-center gap-4 text-ks-navy hover:text-ks-gold transition-colors group/link">
                      <div className="w-10 h-10 bg-ks-navy/5 text-ks-navy rounded-full flex items-center justify-center flex-shrink-0 group-hover/link:bg-ks-gold group-hover/link:text-ks-navy transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="font-bold">{loc.phone}</span>
                    </a>

                    <a href={`mailto:${loc.email}`} className="flex items-center gap-4 text-ks-navy hover:text-ks-gold transition-colors group/link">
                      <div className="w-10 h-10 bg-ks-navy/5 text-ks-navy rounded-full flex items-center justify-center flex-shrink-0 group-hover/link:bg-ks-gold group-hover/link:text-ks-navy transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="font-bold truncate">{loc.email}</span>
                    </a>
                  </div>

                  <Link to={`/locations/${loc.name.toLowerCase().replace(' ', '-')}`} className="btn-navy !w-full text-center group-hover:bg-ks-gold group-hover:text-ks-navy transition-all">
                    View Clinic Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-ks-gold">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-ks-navy mb-8">Not sure which location is right for you?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact-us" className="btn-navy !px-12">Talk to Our Team</Link>
            <a href="tel:1800543736" className="bg-white text-ks-navy font-bold px-12 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg">Call 1800 543 736</a>
          </div>
        </div>
      </section>
    </div>
  )
}
