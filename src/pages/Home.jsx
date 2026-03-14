import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Home as HomeIcon, Sunrise, CurrencyDollar, WhatsApp, ArrowRight } from '../components/Icons'

const WHATSAPP_URL =
  "https://wa.me/250798619966?text=Hi%20Deagle%20Farm%2C%20I%27d%20like%20to%20place%20an%20order"

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=1600&q=85',
    alt: 'Deagle Farm poultry flock',
  },
  {
    src: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=1600&q=85',
    alt: 'Fresh egg trays collected daily',
  },
  {
    src: '/Images/Quality checked before every delivery.jpeg',
    alt: 'Quality checked before every delivery',
  },
  {
    src: 'https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?w=1600&q=85',
    alt: 'Fresh eggs ready for delivery',
  },
]

const whyItems = [
  {
    Icon: HomeIcon,
    title: 'Locally Raised',
    desc: 'Our birds are raised on 4 plots of land right here in South Sudan — no long transport chains.',
  },
  {
    Icon: Sunrise,
    title: 'Fresh Daily Supply',
    desc: 'Eggs are collected every morning and available for order the same day, guaranteed fresh.',
  },
  {
    Icon: CurrencyDollar,
    title: 'Affordable Pricing',
    desc: 'We keep prices fair for households and offer bulk deals for vendors and retailers.',
  },
]

function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const pausedRef = useRef(false)

  const goTo = (index) => setCurrent((index + slides.length) % slides.length)

  // Single interval for the component lifetime — no resets on every slide change
  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) {
        setCurrent((c) => (c + 1) % slides.length)
      }
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      className="relative h-[90vh] min-h-[560px] overflow-hidden bg-gray-900"
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
    >
      {/* Slides — pointer-events-none so invisible slides don't block dot/arrow clicks */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="pointer-events-none absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
      ))}

      {/* Content overlay — pointer-events-none so dots/arrows behind it stay clickable */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
          South Sudan's Local Egg Farm
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
          Deagle<span className="text-brand"> Farm</span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-white/80 mb-10 tracking-wide">
          Purely Fresh, Daily
        </p>
        {/* Re-enable pointer events only on the button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto btn-primary text-lg px-10 py-4 inline-flex items-center gap-2"
        >
          <WhatsApp className="w-5 h-5" />
          Order Now
        </a>
      </div>

      {/* Prev arrow */}
      <button
        onClick={() => goTo(current - 1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm flex items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Next arrow */}
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm flex items-center justify-center transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-7 h-2.5 bg-brand'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroCarousel />

      {/* Value strip */}
      <section className="bg-brand text-white py-5">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 text-center">
          {['Local', 'Fresh', 'Reliable'].map((word, i) => (
            <div key={word} className="flex items-center gap-4">
              <span className="text-2xl font-bold tracking-wide">{word}</span>
              {i < 2 && <span className="hidden sm:block w-px h-6 bg-white/30" />}
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand font-semibold uppercase tracking-widest text-sm mb-2">Our Story</p>
            <h2 className="section-title">Who We Are</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Deagle Farm is a registered poultry farm based in Juba, South Sudan. We started with a simple mission — to
              provide households and businesses with fresh, locally raised eggs every single day. No imports, no
              compromise on quality.
            </p>
            <Link to="/about" className="btn-outline inline-flex items-center gap-2">
              Our Story <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg h-72 bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800&q=80"
              alt="Farm poultry house"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-brand font-semibold uppercase tracking-widest text-sm mb-2">What We Offer</p>
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">Fresh eggs — collected daily, available in trays of 30.</p>
          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="h-52 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=800&q=85"
                alt="Fresh egg tray — tray of 30 eggs"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold mb-1">Fresh Eggs</h3>
              <p className="text-gray-500 text-sm mb-3">Tray of 30 · Locally raised · Collected daily</p>
              <p className="text-brand text-xl font-bold mb-4">
                $3 – $4 <span className="text-gray-400 text-sm font-normal">/ tray</span>
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block"
              >
                Order via WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-8">
            <Link to="/products" className="btn-outline inline-flex items-center gap-2">
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-brand font-semibold uppercase tracking-widest text-sm mb-2">Why Deagle</p>
          <h2 className="section-title">Why Choose Deagle Farm?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {whyItems.map(({ Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-2xl p-8 text-center">
                <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand py-16 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-lg text-red-100 mb-8">
            Message us on WhatsApp and we'll get your fresh eggs sorted today.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-brand font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            <WhatsApp className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
