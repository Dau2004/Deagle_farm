import { WhatsApp } from './Icons'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/250798619966?text=Hi%20Deagle%20Farm%2C%20I%27d%20like%20to%20place%20an%20order"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <WhatsApp className="w-7 h-7" />
    </a>
  )
}
