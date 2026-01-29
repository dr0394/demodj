import React from 'react'
import { Music, Settings, Camera } from 'lucide-react'

const ServicesOverview = () => {
  const services = [
    {
      icon: Music,
      title: 'DJ Service',
      description: 'Spezialisiert auf 80er & 90er Musik mit breitem Repertoire: Rock, Pop, Disco, Dance Classics, Charts und mehr',
      features: ['80er/90er Spezialist', 'Alle gängigen Musikstile', 'Individuelle Musikwünsche'],
      color: '#0EA5E9',
      colorRgb: '14, 165, 233'
    },
    {
      icon: Settings,
      title: 'Eventtechnik & Equipment',
      description: 'Professionelle Ton- und Lichttechnik mit modernem DJ-Equipment für perfekte Atmosphäre',
      features: ['Premium DJ-Controller', 'Professionelle PA-Anlage', 'Moderne Lichttechnik & Effekte'],
      color: '#06B6D4',
      colorRgb: '6, 182, 212'
    },
    {
      icon: Camera,
      title: 'Komplettservice',
      description: 'Rundum-Sorglos-Paket mit Beratung, Planung und Durchführung für Ihre perfekte Veranstaltung',
      features: ['Persönliche Beratung', 'Event-Planung', 'Professionelle Moderation'],
      color: '#38BDF8',
      colorRgb: '56, 189, 248'
    }
  ]

  return (
    <section id="leistungen" className="relative py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-block">
            <span
              className="text-sm uppercase tracking-[0.25em] font-bold px-6 py-2 rounded-full border"
              style={{
                color: '#0EA5E9',
                borderColor: 'rgba(14, 165, 233, 0.3)',
                backgroundColor: 'rgba(14, 165, 233, 0.05)'
              }}
            >
              Unsere Leistungen
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Professionell. Modern. Zuverlässig.
          </h2>
          <p className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed">
            Von der Musik über die Technik bis zur Moderation – Ihr Event in den besten Händen
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border rounded-lg p-8 transition-all duration-500 overflow-hidden"
              style={{
                borderColor: `rgba(${service.colorRgb}, 0.2)`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(${service.colorRgb}, 0.5)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `rgba(${service.colorRgb}, 0.2)`
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(to bottom right, rgba(${service.colorRgb}, 0.08), transparent)`
                }}
              />

              <div className="relative space-y-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    borderColor: `rgba(${service.colorRgb}, 0.4)`,
                    backgroundColor: `rgba(${service.colorRgb}, 0.15)`
                  }}
                >
                  <service.icon className="w-8 h-8" style={{ color: service.color }} />
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-300/80 leading-relaxed">{service.description}</p>
                </div>

                <div
                  className="h-px"
                  style={{ background: `linear-gradient(to right, rgba(${service.colorRgb}, 0.4), transparent)` }}
                />

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: service.color }}
                      />
                      <span className="text-sm text-gray-300/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesOverview
