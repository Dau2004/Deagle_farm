import { useState } from 'react'
import { MapPin, Clock, Package, WhatsApp, CheckCircle } from '../components/Icons'

const WHATSAPP_URL =
  "https://wa.me/250798619966?text=Hi%20Deagle%20Farm%2C%20I%27d%20like%20to%20place%20an%20order"

const infoItems = [
  { Icon: MapPin, title: 'Location', value: 'Juba, South Sudan' },
  { Icon: Clock, title: 'Response Time', value: 'We respond within 24 hours' },
  { Icon: Package, title: 'Bulk Orders', value: 'Available for vendors and retailers — ask us' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hi Deagle Farm! My name is ${form.name}.\nContact: ${form.contact}\n\nMessage: ${form.message}`
    )
    window.open(`https://wa.me/250798619966?text=${text}`, '_blank')
    setSent(true)
    setForm({ name: '', contact: '', message: '' })
  }

  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-brand font-semibold uppercase tracking-widest text-sm mb-2">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-300 text-lg">
            Order fresh eggs, ask a question, or discuss a bulk deal — we're here.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">

          {/* Left — Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Reach Us Directly</h2>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white rounded-2xl p-5 mb-6 transition-colors"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <WhatsApp className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-lg">Chat on WhatsApp</div>
                <div className="text-green-100 text-sm">Tap to open a chat — fastest way to order</div>
              </div>
            </a>

            {/* Info cards */}
            <div className="space-y-4">
              {infoItems.map(({ Icon, title, value }) => (
                <div key={title} className="bg-white rounded-xl p-4 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{title}</div>
                    <div className="text-gray-500 text-sm">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h2>

            {sent ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Message sent!</p>
                <p className="text-gray-500 text-sm">We've opened WhatsApp with your message. We'll reply shortly.</p>
                <button className="mt-6 btn-outline text-sm" onClick={() => setSent(false)}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. John Deng"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone or Email</label>
                  <input
                    type="text"
                    name="contact"
                    required
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="Your WhatsApp number or email"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need — e.g. 10 trays weekly delivery"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
                <p className="text-xs text-gray-400 text-center">
                  This will open WhatsApp with your message pre-filled.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
