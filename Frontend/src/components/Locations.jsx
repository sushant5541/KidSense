import { useScrollAnimation } from '../hooks/useScrollAnimation'

const locations = [
  {
    name: 'Unley',
    address: '271 Unley Rd, Malvern SA 5061',
    color: 'from-blue-500 to-ks-navy',
  },
  {
    name: 'Morphett Vale',
    address: '4/156 Main South Rd, Morphett Vale SA 5162',
    color: 'from-ks-gold to-orange-500',
  },
  {
    name: 'Walkerville',
    address: '2/74 Walkerville Tce, Walkerville SA 5081',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Golden Grove',
    address: 'The Grove Shopping Centre, Golden Grove SA 5125',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    name: 'West Lakes',
    address: 'West Lakes Mall, West Lakes SA 5021',
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'Glenelg',
    address: '2 Moseley St, Glenelg SA 5045',
    color: 'from-cyan-500 to-blue-600',
  },
]

export default function Locations() {
  const sectionRef = useScrollAnimation()

  return (
    <section ref={sectionRef} id="locations" className="py-20 lg:py-28 bg-ks-gray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll slide-up">
          <h3 className="section-heading mb-4">
            Our <span className="gradient-text">Locations</span>
          </h3>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Six convenient locations across Adelaide to serve you better
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="animate-on-scroll slide-up group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer">
                <div className={`bg-gradient-to-r ${loc.color} h-2 transition-all duration-500 group-hover:h-3`} />
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${loc.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 32.02 45.73">
                        <path d="M32,16.69a14.39,14.39,0,0,1-2.21,7.49c-4.16,7.05-8.6,13.94-13,20.84-.61.95-1,.95-1.57,0-4.41-6.9-8.88-13.76-13-20.84A16,16,0,0,1,27,4.42C30.35,7.53,32,11.44,32,16.69ZM15.9,22.87a6.76,6.76,0,0,0,7-6.76A6.85,6.85,0,1,0,9.17,16,6.76,6.76,0,0,0,15.9,22.87Z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-ks-navy text-xl mb-1">{loc.name}</h4>
                      <p className="text-gray-500 text-sm">{loc.address}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm text-gray-400">Mon - Fri: 8:15am - 5:15pm</span>
                    <svg className="w-5 h-5 text-ks-gold group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
