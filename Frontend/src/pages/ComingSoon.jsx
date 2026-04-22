import { useLocation } from 'react-router-dom'

export default function ComingSoon() {
  const location = useLocation()
  const pageName = location.pathname.split('/').pop().split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 pt-20 px-4">
      <div className="max-w-2xl w-full text-center p-12 bg-white rounded-3xl shadow-xl border border-gray-100">
        <div className="w-20 h-20 bg-ks-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-8 animate-bounce">
          <svg className="w-10 h-10 text-ks-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-ks-navy mb-4">
          {pageName || 'Page'} Content Coming Soon
        </h1>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed">
          We're currently working on updating our website with more information. 
          Please check back shortly or contact our friendly team for any specific enquiries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/" className="btn-gold !px-8">
            Back to Home
          </a>
          <a href="/contact-us" className="btn-outline-gold !px-8">
            Contact Team
          </a>
        </div>
      </div>
    </div>
  )
}
