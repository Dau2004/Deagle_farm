import { Camera } from '../components/Icons'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80',
    caption: 'Our flock of 500+ healthy laying hens',
  },
  {
    src: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800&q=80',
    caption: 'The poultry house — clean, ventilated, and well-managed',
  },
  {
    src: 'https://images.unsplash.com/photo-1506434793329-ce9944342e63?w=800&q=80',
    caption: 'Freshly collected eggs ready for traying',
  },
  {
    src: 'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=800&q=80',
    caption: 'Trays of 30 — packed fresh daily',
  },
  {
    src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80',
    caption: 'A view across the farm land in Juba',
  },
  {
    src: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800&q=80',
    caption: 'Quality checked before every delivery',
  },
]

export default function Gallery() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-brand font-semibold uppercase tracking-widest text-sm mb-2">Gallery</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Real Farm</h1>
          <p className="text-gray-300 text-lg">
            See the operation — no stock photos, no gimmicks. Just Deagle Farm.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map(({ src, caption }, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="h-56 overflow-hidden bg-gray-100">
                  <img
                    src={src}
                    alt={caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <p className="text-sm text-gray-600">{caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder note */}
          <div className="mt-12 bg-gray-50 border border-gray-200 rounded-2xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
              <Camera className="w-5 h-5 text-gray-500" />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              <span className="font-semibold text-gray-800">Real farm photos coming soon.</span>{' '}
              These are placeholder images — we'll replace them with actual Deagle Farm photography.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
