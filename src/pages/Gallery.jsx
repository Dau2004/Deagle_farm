const photos = [
  {
    src: '/Images/The poultry house — clean, ventilated, and well-managed.jpg',
    caption: 'The poultry house — clean, ventilated, and well-managed',
  },
  {
    src: '/Images/Freshly collected eggs ready for traying.jpg',
    caption: 'Freshly collected eggs ready for traying',
  },
  {
    src: '/Images/Trays of 30 — packed fresh daily.jpg',
    caption: 'Trays of 30 — packed fresh daily',
  },
  {
    src: '/Images/A view across the farm land in Juba.jpeg',
    caption: 'A view across the farm land in Juba',
  },
  {
    src: '/Images/Quality checked before every delivery.jpeg',
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
        </div>
      </section>
    </>
  )
}
