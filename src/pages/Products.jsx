import { Link } from 'react-router-dom'
import { Leaf, Sun, ShieldCheck, Heart, Package, CheckCircle, WhatsApp } from '../components/Icons'

const WHATSAPP_URL =
  "https://wa.me/250798619966?text=Hi%20Deagle%20Farm%2C%20I%27d%20like%20to%20place%20an%20order"

const features = [
  { Icon: Leaf, label: 'Locally Produced' },
  { Icon: Sun, label: 'Collected Daily' },
  { Icon: ShieldCheck, label: 'No Preservatives' },
  { Icon: Heart, label: 'Healthy Birds' },
]

const highlights = [
  'Laid by healthy, free-range birds',
  'No preservatives, no cold-storage delays',
  'Same-day collection guarantee',
  'Bulk orders welcome for vendors & retailers',
]

export default function Products() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-brand font-semibold uppercase tracking-widest text-sm mb-2">Our Products</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fresh Eggs, Every Day</h1>
          <p className="text-gray-300 text-lg">
            Simple, honest, local. One product — done right.
          </p>
        </div>
      </section>

      {/* Product Card */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-md overflow-hidden md:flex">
            {/* Visual */}
            <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800&q=85"
                alt="Fresh egg tray — tray of 30 eggs"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Details */}
            <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                In Stock · Daily Supply
              </span>
              <h2 className="text-3xl font-bold mb-2">Fresh Eggs</h2>
              <p className="text-gray-500 mb-4">
                Locally raised · Collected daily · Available in trays of 30
              </p>
              <ul className="text-gray-600 text-sm space-y-2 mb-6">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-3xl font-bold text-brand mb-6">
                $3 – $4{' '}
                <span className="text-gray-400 text-base font-normal">/ tray of 30</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                  className="btn-primary flex-1 text-center inline-flex items-center justify-center gap-2">
                  <WhatsApp className="w-4 h-4" />
                  Order via WhatsApp
                </a>
                <Link to="/contact" className="btn-outline flex-1 text-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Orders note */}
      <section className="py-12 bg-brand/5 border-y border-brand/10">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Package className="w-6 h-6 text-brand" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-900">Bulk Orders Available</h3>
          <p className="text-gray-600 mb-6">
            Are you a vendor, restaurant, or retailer? We supply in bulk at competitive rates. Message us on WhatsApp
            or fill in the contact form to discuss pricing for larger volumes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors">
              <WhatsApp className="w-4 h-4" />
              Enquire on WhatsApp
            </a>
            <Link to="/contact" className="btn-outline">Contact Form</Link>
          </div>
        </div>
      </section>

      {/* Why our eggs */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="section-title">Why Our Eggs?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {features.map(({ Icon, label }) => (
              <div key={label} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-11 h-11 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <div className="font-semibold text-gray-800">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
