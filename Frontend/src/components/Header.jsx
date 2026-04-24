import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const topMenuItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About', path: '/about-kid-sense',
    children: [
      { label: 'About Kid Sense', path: '/about-kid-sense' },
      { label: 'Cultural Inclusivity', path: '/about/cultural-inclusivity' },
      { label: 'Neuro Diverse Approach', path: '/about/neuro-diverse-approach' },
      { label: 'Trauma Informed Practice', path: '/about/trauma-informed-practice' },
      { label: 'Child Safe Environment', path: '/about/child-safe-environment' },
    ]
  },
  {
    label: 'Corporate', path: '/corporate',
    children: [
      { label: 'Our Vision and Values', path: '/corporate' },
    ]
  },
  { label: 'Support Services', path: '/support-services' },
  { label: 'Careers', path: '/careers',
    children: [
      { label: 'Careers at Kid Sense', path: '/careers' },
      { label: 'Professional Development Events', path: '/careers/professional-development' },
      { label: 'Positions Vacant', path: '/careers/positions-vacant' },
      { label: "Come'n Try", path: '/careers/come-n-try' },
    ]
  },
  { label: 'Meet Our Team', path: '/our-team' },
  { label: 'Contact Us', path: '/contact-us' },
]

const mainMenuItems = [
  { label: 'Occupational Therapy', path: '/occupational-therapy' },
  { label: 'Speech Therapy', path: '/speech-therapy' },
  {
    label: 'Therapy Delivery', path: '/therapy-delivery',
    children: [
      { label: 'Block Therapy Explained', path: '/therapy-delivery/block-therapy' },
      { label: 'In-Clinic', path: '/therapy-delivery/in-clinic' },
      { label: 'Holiday Intensive Therapy', path: '/therapy-delivery/holiday-intensive' },
      { label: 'Tele-therapy', path: '/therapy-delivery/tele-therapy' },
      { label: 'In Community', path: '/therapy-delivery/in-community' },
      { label: 'Functional Capacity Assessments', path: '/therapy-delivery/functional-capacity-assessments' },
    ]
  },
  {
    label: 'Educator Options', path: '/educator',
    children: [
      { label: 'Educator Focused Support', path: '/educator/focused-support' },
      { label: 'Presentations & Workshops', path: '/educator/presentations-workshops' },
      { label: 'Developmental Screening', path: '/educator/developmental-screening' },
      { label: 'In-Education Service', path: '/educator/in-education-service' },
    ]
  },
  {
    label: 'Your Concerns', path: '/areas-of-concern',
    children: [
      { label: 'Concerns', path: '/areas-of-concern#concerns' },
      { label: 'Fact Sheets', path: '/areas-of-concern#factSheets' },
      { label: 'Diagnoses', path: '/areas-of-concern#diagnose' },
    ]
  },
  {
    label: 'Resources', path: '/resources',
    children: [
      { label: 'Charts and Checklists', path: '/resources/charts-checklists' },
      { label: 'Self-Assessments', path: '/resources/self-assessments' },
    ]
  },
  {
    label: 'Locations', path: '/locations',
    children: [
      { label: 'Indiranagar', path: '/locations/indiranagar' },
      { label: 'Koramangala', path: '/locations/koramangala' },
      { label: 'Jayanagar', path: '/locations/jayanagar' },
      { label: 'HSR Layout', path: '/locations/hsr-layout' },
      { label: 'Whitefield', path: '/locations/whitefield' },
      { label: 'Malleshwaram', path: '/locations/malleshwaram' },
    ]
  },
  {
    label: 'Parent Tools', path: '#',
    children: [
      { label: 'Interactive Quiz', path: '/quiz' },
      { label: 'Growth Tracker', path: '/growth-tracker' },
      { label: 'Login / Register', path: '/auth' },
    ]
  },
]

function DropdownMenu({ items }) {
  return (
    <div className="nav-dropdown">
      {items.map((item, i) => (
        <Link 
          key={i} 
          to={item.path} 
          className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-ks-gold/10 hover:text-ks-gold transition-colors whitespace-nowrap"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

function NavItem({ item, textClass = "text-gray-600" }) {
  const location = useLocation()
  const isActive = location.pathname === item.path || (item.children && item.children.some(c => c.path === location.pathname))

  return (
    <div className="nav-item relative group">
      <Link 
        to={item.path === '#' ? location.pathname : item.path} 
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${
          isActive ? 'text-ks-gold' : textClass + ' hover:text-ks-gold'
        } nav-link-glow`}
      >
        {item.label}
        {item.children && (
          <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </Link>
      {item.children && <DropdownMenu items={item.children} />}
    </div>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-header shadow-lg py-0 shimmer-border' 
          : 'bg-white py-0 border-b border-gray-100'
      }`}
    >
      <div className="hidden lg:block bg-ks-navy text-white/90">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-10">
          <div></div>
          <nav className="flex items-center h-full">
            {topMenuItems.map((item, i) => (
              <NavItem key={i} item={item} textClass="text-white/70 hover:text-ks-gold text-[11px] uppercase tracking-wider" />
            ))}
          </nav>
          <a 
            href="tel:+918041234567" 
            className="flex items-center gap-2 text-[11px] text-ks-gold hover:text-white transition-colors h-full px-2"
          >
            <PhoneIcon />
            <span className="font-bold uppercase tracking-widest">Free 15min Consultation</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <KidSenseLogo />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center">
            {mainMenuItems.map((item, i) => (
              <NavItem key={i} item={item} textClass="text-ks-navy" />
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+918041234567" className="text-ks-gold hover:text-ks-gold-dark transition-colors">
              <PhoneIcon />
            </a>
            <Link to="/new-enquiry" className="btn-gold text-sm !px-6 !py-2.5 whitespace-nowrap">
              Book an Appointment
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-ks-navy"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? 'max-h-[80vh] overflow-y-auto' : 'max-h-0'}`}>
        <div className="bg-white border-t shadow-lg px-4 py-4 space-y-1">
          {[...topMenuItems, ...mainMenuItems].map((item, i) => (
            <MobileNavItem key={i} item={item} />
          ))}
          <div className="pt-4 border-t mt-4">
            <Link to="/new-enquiry" className="btn-gold block text-center text-sm">
              Book an Appointment
            </Link>
            <a href="tel:+918041234567" className="mt-3 btn-outline-gold block text-center text-sm">
              📞 +91 80 4123 4567
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileNavItem({ item }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isActive = location.pathname === item.path

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link 
          to={item.path === '#' ? '#' : item.path} 
          className={`block py-2.5 text-sm font-medium hover:text-ks-gold ${isActive ? 'text-ks-gold' : 'text-ks-navy'}`}
        >
          {item.label}
        </Link>
        {item.children && (
          <button onClick={() => setOpen(!open)} className="p-2 text-gray-400">
            <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
      {item.children && open && (
        <div className="pl-4 pb-2 space-y-1 border-l-2 border-gray-100 ml-2">
          {item.children.map((child, i) => (
            <Link 
              key={i} 
              to={child.path} 
              className={`block py-2 text-sm hover:text-ks-gold ${location.pathname === child.path ? 'text-ks-gold' : 'text-gray-500'}`}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function PhoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M37.167 28.2V33.2C37.169 33.664 37.074 34.124 36.888 34.549C36.702 34.974 36.43 35.356 36.088 35.67C35.746 35.984 35.342 36.222 34.902 36.371C34.462 36.52 33.996 36.575 33.534 36.533C28.405 35.976 23.479 34.224 19.151 31.417C15.124 28.858 11.71 25.444 9.151 21.417C6.334 17.069 4.581 12.118 4.034 6.967C3.992 6.506 4.047 6.041 4.195 5.603C4.343 5.164 4.58 4.761 4.892 4.419C5.204 4.078 5.584 3.804 6.007 3.617C6.43 3.431 6.888 3.334 7.351 3.333H12.351C13.16 3.325 13.944 3.612 14.557 4.139C15.17 4.667 15.571 5.399 15.684 6.2C15.895 7.8 16.287 9.371 16.851 10.883C17.075 11.48 17.124 12.128 16.991 12.751C16.858 13.375 16.549 13.947 16.101 14.4L13.984 16.517C16.357 20.689 19.812 24.144 23.984 26.517L26.101 24.4C26.554 23.952 27.126 23.643 27.749 23.51C28.373 23.377 29.021 23.426 29.617 23.65C31.13 24.214 32.701 24.606 34.301 24.817C35.11 24.931 35.85 25.339 36.378 25.962C36.907 26.586 37.188 27.383 37.167 28.2Z" stroke="#FFB71A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function KidSenseLogo() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-10 h-10 bg-ks-navy rounded-lg flex items-center justify-center">
        <span className="text-white font-heading font-bold text-lg">K</span>
      </div>
      <div>
        <span className="font-heading font-bold text-ks-navy text-xl leading-none block">
          Kid<span className="text-ks-gold">Sense</span>
        </span>
        <span className="text-[9px] text-gray-400 leading-none">CHILD DEVELOPMENT</span>
      </div>
    </div>
  )
}
