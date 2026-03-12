import { Link } from 'react-router-dom'
import { Wheat, Users, TrendingDown, WhatsApp } from '../components/Icons'

const facts = [
  { number: '4', label: 'Plots of Land' },
  { number: '500+', label: 'Birds' },
  { number: '100%', label: 'Registered Business' },
  { number: '1', label: 'Mission' },
]

const impactItems = [
  {
    Icon: Wheat,
    title: 'Food Security',
    desc: "By producing locally, we reduce South Sudan's dependency on imported food and help ensure a steady supply.",
  },
  {
    Icon: Users,
    title: 'Local Employment',
    desc: 'Deagle Farm creates jobs for local workers in poultry management, logistics, and sales.',
  },
  {
    Icon: TrendingDown,
    title: 'Reducing Imports',
    desc: 'Every tray of Deagle eggs sold is one less tray imported — keeping money in the local economy.',
  },
]

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-brand font-semibold uppercase tracking-widest text-sm mb-2">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Story Behind the Farm</h1>
          <p className="text-gray-300 text-lg">
            A local farm built on a simple promise — fresh eggs, every day, for everyone.
          </p>
        </div>
      </section>

      {/* Farm Story */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg h-80 bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=800&q=80"
              alt="Deagle Farm flock"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="section-title">How It Started</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Deagle Farm was founded to solve a real problem in South Sudan — households and businesses relying on
              expensive, imported eggs with no guarantee of freshness. We saw an opportunity to do things differently.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Starting with a small flock and a few plots of land in Juba, we built a farm that prioritises quality
              above everything. Today, we raise over 500 birds and supply fresh eggs daily to families and businesses
              across the city.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every egg that leaves Deagle Farm is locally raised, carefully handled, and collected the same day it
              reaches you. That's our promise.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-brand text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-red-100 leading-relaxed">
            To provide fresh, reliable, and locally produced eggs to every household and business in South Sudan —
            reducing dependency on imports and strengthening local food security.
          </p>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title">Deagle Farm by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {facts.map(({ number, label }) => (
              <div key={label} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-brand mb-1">{number}</div>
                <div className="text-gray-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-brand font-semibold uppercase tracking-widest text-sm mb-2">Our Impact</p>
            <h2 className="section-title">More Than Just Eggs</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {impactItems.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-8">
                <div className="w-11 h-11 bg-brand/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-14 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Want to know more or place an order?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Contact Us</Link>
            <a
              href="https://wa.me/250798619966?text=Hi%20Deagle%20Farm%2C%20I%27d%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <WhatsApp className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
