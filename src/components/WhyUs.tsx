import React from 'react'
import { Award, Heart, Shield, Clock, Users, Sparkles } from 'lucide-react'

const WhyUs = () => {
  const reasons = [
    {
      icon: Award,
      title: '80er & 90er Spezialist',
      description: 'Professionelle DJ-Erfahrung mit Fokus auf die besten Hits der 80er und 90er Jahre'
    },
    {
      icon: Shield,
      title: 'GEMA-registriert & versichert',
      description: 'Vollständig GEMA-registriert mit Berufshaftpflichtversicherung'
    },
    {
      icon: Clock,
      title: 'Zuverlässig & pünktlich',
      description: 'Aufbau vor Eintreffen der Gäste, professionelle Vorbereitung'
    },
    {
      icon: Users,
      title: '350 km Reichweite',
      description: 'Buchbar in MV, Berlin, Brandenburg, SH und Niedersachsen'
    },
    {
      icon: Heart,
      title: 'Persönliche Beratung',
      description: 'Individuelle Musikplanung und Berücksichtigung Ihrer Wünsche'
    },
    {
      icon: Sparkles,
      title: 'Moderne Technik',
      description: 'Professionelle DJ-Ausrüstung mit modernster Licht- und Tontechnik'
    }
  ]

  return (
    <section id="vorteile" className="relative py-24 px-6 sm:px-10 lg:px-16">
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
              Warum DJ Jackobeat
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ihr Partner für<br />unvergessliche Events
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative space-y-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-transform duration-500"
                  style={{
                    borderColor: 'rgba(14, 165, 233, 0.3)',
                    backgroundColor: 'rgba(14, 165, 233, 0.1)'
                  }}
                >
                  <reason.icon className="w-7 h-7" style={{ color: '#0EA5E9' }} />
                </div>

                <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                <p className="text-gray-300/80 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
