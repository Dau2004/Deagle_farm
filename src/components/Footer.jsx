import { Link } from 'react-router-dom'
import { MapPin, Clock, WhatsApp, Facebook, LinkedIn } from './Icons'

const socialLinks = [
  {
    href: 'https://www.facebook.com/deagelfarm2026/',
    label: 'Facebook',
    Icon: Facebook,
  },
  {
    href: 'https://www.linkedin.com/company/deagle-farm/',
    label: 'LinkedIn',
    Icon: LinkedIn,
  },
]

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/logo.png" alt="Deagle Farm" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Purely Fresh, Daily. Locally raised eggs delivered to households and businesses across South Sudan.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-brand transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get in Touch</h4>
            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-brand flex-shrink-0" />
                Juba, South Sudan
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Clock className="w-4 h-4 text-brand flex-shrink-0" />
                Response within 24 hours
              </div>
            </div>
            <a
              href="https://wa.me/250798619966?text=Hi%20Deagle%20Farm%2C%20I%27d%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <WhatsApp className="w-4 h-4" />
              WhatsApp Us
            </a>

            <div className="flex items-center gap-3 mt-5">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-xs">
          <span>© {new Date().getFullYear()} Deagle Farm. All rights reserved. · Juba, South Sudan</span>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-brand transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
