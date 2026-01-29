import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Youtube, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div>
            <div className="mb-3">
              <div className="text-2xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #0EA5E9, #06B6D4)' }}>
                DJDEMO
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Heiko Kohlfärber
            </p>
            <p className="text-xs text-gray-500 mt-2">
              80er & 90er Spezialist aus Demmin
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/profile.php?id=615863744646074"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-cyan-500/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-400 hover:text-cyan-400" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm text-white font-semibold mb-3">Kontakt</h3>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <a href="mailto:heikobanaszak1@web.de" className="hover:text-cyan-400 transition-colors">
                  heikobanaszak1@web.de
                </a>
              </li>
              <li className="text-xs">
                Lerchenweg 9<br />17109 Demmin
              </li>
              <li className="pt-2 text-gray-500">
                Buchbar im Umkreis von 350 km
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-white font-semibold mb-3">Leistungen</h3>
            <ul className="space-y-1 text-xs text-gray-400">
              <li>DJ Service</li>
              <li>80er & 90er Musik</li>
              <li>Eventtechnik & Equipment</li>
              <li>Hochzeiten</li>
              <li>Geburtstage & Partys</li>
              <li>Firmenfeiern & Events</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm text-white font-semibold mb-3">Rechtliches</h3>
            <ul className="space-y-1 text-xs text-gray-400">
              <li>
                <Link to="/impressum" className="hover:text-cyan-400 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-cyan-400 transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link to="/agb" className="hover:text-cyan-400 transition-colors">
                  AGB
                </Link>
              </li>
              <li>
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  EU-Streitbeilegung
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mt-6">
          <div className="text-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} DJDEMO - Heiko Kohlfärber. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
