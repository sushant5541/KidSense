import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ks-navy-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-ks-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">K</span>
              </div>
              <div>
                <span className="font-heading font-bold text-white text-xl leading-none block">
                  Kid<span className="text-ks-gold">Sense</span>
                </span>
                <span className="text-[9px] text-white/40 leading-none">CHILD DEVELOPMENT</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Occupational Therapy & Speech Therapy for children. Helping kids reach their full potential for over 20 years.
            </p>
            <div className="flex gap-3">
              {['facebook', 'instagram', 'linkedin', 'youtube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-ks-gold transition-colors duration-300"
                  aria-label={social}
                >
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                { label: 'Occupational Therapy', path: '/occupational-therapy' },
                { label: 'Speech Therapy', path: '/speech-therapy' },
                { label: 'In-Clinic Therapy', path: '/therapy-delivery/in-clinic' },
                { label: 'Community Therapy', path: '/therapy-delivery/in-community' },
                { label: 'Tele-therapy', path: '/therapy-delivery/tele-therapy' },
                { label: 'Functional Assessments', path: '/therapy-delivery/functional-capacity-assessments' }
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-white/60 text-sm hover:text-ks-gold transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-ks-gold/50 rounded-full" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Kid Sense', path: '/about-kid-sense' },
                { label: 'Meet Our Team', path: '/our-team' },
                { label: 'Careers', path: '/careers' },
                { label: 'Resources', path: '/resources' },
                { label: 'Your Concerns', path: '/areas-of-concern' },
                { label: 'Support Services', path: '/support-services' }
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-white/60 text-sm hover:text-ks-gold transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-ks-gold/50 rounded-full" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href="tel:+918041234567" className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-ks-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-ks-gold/20 transition-colors">
                  <svg className="w-5 h-5 text-ks-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs">Phone</p>
                  <p className="text-white font-semibold group-hover:text-ks-gold transition-colors">+91 80 4123 4567</p>
                </div>
              </a>

              <a href="mailto:contact@kidsense.in" className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-ks-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-ks-gold/20 transition-colors">
                  <svg className="w-5 h-5 text-ks-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs">Email</p>
                  <p className="text-white text-sm font-semibold group-hover:text-ks-gold transition-colors break-all">contact@kidsense.in</p>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-ks-gold/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-ks-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs">Hours</p>
                  <p className="text-white text-sm font-semibold">Mon - Fri: 8:15am - 5:15pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Kid Sense Child Development. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">Terms of Service</a>
            <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">Quality Assurance</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ name }) {
  const icons = {
    facebook: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
    instagram: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    linkedin: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    youtube: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white" />
      </svg>
    ),
  }
  return icons[name] || null
}
