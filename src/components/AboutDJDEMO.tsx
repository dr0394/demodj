import React from 'react'
import { Music, Heart, Globe, Award } from 'lucide-react'

const AboutDJDEMO = () => {
  return (
    <section id="ueber-djdemo" className="relative py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
              <img
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg"
                alt="DJDEMO - Ihr DJ für die 80er & 90er"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-2xl md:text-3xl font-bold text-white">Max Mustermann</div>
                <div className="text-lg" style={{ color: '#0EA5E9' }}>DJDEMO</div>
              </div>
            </div>
            <div
              className="absolute inset-0 -z-10 blur-3xl opacity-20"
              style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.3), transparent)' }}
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span
                  className="text-sm uppercase tracking-[0.25em] font-bold px-6 py-2 rounded-full border"
                  style={{
                    color: '#0EA5E9',
                    borderColor: 'rgba(14, 165, 233, 0.3)',
                    backgroundColor: 'rgba(14, 165, 233, 0.05)'
                  }}
                >
                  Über DJDEMO
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                80er & 90er Spezialist<br />aus Stadt
              </h2>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-gray-300/90 leading-relaxed">
                  Ich bin DJDEMO – Ihr professioneller <strong className="text-white">80er & 90er DJ</strong> aus Stadt. Mit Leidenschaft für die beste Musik zweier Jahrzehnte sorge ich für unvergessliche Momente auf Ihrer Feier.
                </p>
                <p className="text-lg text-gray-300/80 leading-relaxed">
                  Von Hochzeiten über Geburtstage bis zu Firmenevents – ich bringe die <strong className="text-white">Hits der 80er & 90er</strong> zurück auf die Tanzfläche. Mit moderner Technik, professioneller Lichtshow und persönlicher Musikberatung wird Ihr Event zum vollen Erfolg.
                </p>
                <p className="text-lg text-gray-300/80 leading-relaxed">
                  Ich bin <strong className="text-white">im Umkreis von 350 km</strong> um Stadt buchbar – das umfasst Mecklenburg-Vorpommern, Berlin, Brandenburg, Schleswig-Holstein und Niedersachsen. Ihre Musikwünsche stehen im Mittelpunkt, und ich passe mich individuell an Ihr Event an.
                </p>
                <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 border-l-4 p-4 rounded-r" style={{ borderColor: '#0EA5E9' }}>
                  <p className="text-base text-gray-300/90 leading-relaxed italic">
                    "Die 80er & 90er waren die besten Jahrzehnte für Musik – und diese Energie bringe ich zu jedem Event mit modernster DJ-Technik und perfektem Sound."
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Award,
                  title: '80er & 90er',
                  subtitle: 'Spezialist'
                },
                {
                  icon: Music,
                  title: 'Modern',
                  subtitle: 'DJ-Equipment'
                },
                {
                  icon: Globe,
                  title: '350 km',
                  subtitle: 'Reichweite'
                },
                {
                  icon: Heart,
                  title: 'Persönlich',
                  subtitle: 'Individuelle Beratung'
                }
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: 'rgba(14, 165, 233, 0.15)',
                      borderColor: 'rgba(14, 165, 233, 0.3)'
                    }}
                  >
                    <item.icon className="w-5 h-5" style={{ color: '#0EA5E9' }} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-white">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutDJDEMO
