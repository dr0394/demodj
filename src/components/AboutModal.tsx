import React from 'react'
import { X, Music, Award, Globe, Heart, Sparkles, Radio } from 'lucide-react'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl shadow-2xl border animate-in zoom-in-95 duration-300"
        style={{
          borderColor: 'rgba(14, 165, 233, 0.2)',
          boxShadow: '0 0 80px rgba(14, 165, 233, 0.15)'
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(14,165,233,0.08)_0%,_transparent_50%)] pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group"
          style={{
            backgroundColor: 'rgba(14, 165, 233, 0.1)',
            border: '1px solid rgba(14, 165, 233, 0.2)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(14, 165, 233, 0.2)'
            e.currentTarget.style.transform = 'scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(14, 165, 233, 0.1)'
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="relative p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <div className="relative group">
                <div className="absolute -inset-4 rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ background: 'linear-gradient(to bottom right, rgba(14, 165, 233, 0.3), rgba(6, 182, 212, 0.2))' }}
                />
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2"
                  style={{ borderColor: 'rgba(14, 165, 233, 0.3)' }}
                >
                  <img
                    src="https://alkaio.com/media/889623693444528.jpeg"
                    alt="Heiko Banaszak - DJDEMO"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, #0EA5E9, #06B6D4)',
                          boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)'
                        }}
                      >
                        <Music className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">DJDEMO</div>
                        <div className="text-sm" style={{ color: '#0EA5E9' }}>Heiko Banaszak</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Award,
                    value: '80/90s',
                    label: 'Spezialist'
                  },
                  {
                    icon: Sparkles,
                    value: '350km',
                    label: 'Reichweite'
                  },
                  {
                    icon: Globe,
                    value: 'MV-SH',
                    label: 'Region'
                  },
                  {
                    icon: Radio,
                    value: '100%',
                    label: 'Leidenschaft'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden p-5 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: 'rgba(14, 165, 233, 0.05)',
                      borderColor: 'rgba(14, 165, 233, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(14, 165, 233, 0.1)'
                      e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(14, 165, 233, 0.05)'
                      e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.2)'
                    }}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity"
                      style={{ background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4), transparent)' }}
                    />
                    <div className="relative flex flex-col items-center text-center">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                        style={{
                          backgroundColor: 'rgba(14, 165, 233, 0.15)'
                        }}
                      >
                        <item.icon className="w-6 h-6" style={{ color: '#0EA5E9' }} />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border"
                  style={{
                    background: 'linear-gradient(to right, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.1))',
                    borderColor: 'rgba(14, 165, 233, 0.3)'
                  }}
                >
                  <Heart className="w-4 h-4" style={{ color: '#0EA5E9' }} />
                  <span className="text-sm uppercase tracking-[0.25em] font-bold" style={{ color: '#0EA5E9' }}>
                    Über DJDEMO
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Ihr Event-DJ aus Demmin<br />
                  <span
                    className="inline-block bg-clip-text text-transparent"
                    style={{ backgroundImage: 'linear-gradient(to right, #0EA5E9, #06B6D4)' }}
                  >
                    mit Beat und Leidenschaft
                  </span>
                </h2>
              </div>

              <div className="space-y-6 text-gray-300/90 leading-relaxed">
                <p className="text-lg">
                  Ich bin DJDEMO – Ihr professioneller <span className="font-bold text-white">Event-DJ</span> aus Demmin (Mecklenburg-Vorpommern). Spezialisiert auf <span className="font-bold text-white">80er & 90er Musik</span> bringe ich die perfekte Stimmung auf jede Veranstaltung – ob Hochzeit, Geburtstag, Firmenfeier oder Party.
                </p>

                <p>
                  Mit modernster DJ-Technik, professioneller Lichttechnik und einem breiten Musikrepertoire sorge ich für unvergessliche Momente. <span className="font-bold text-white">Von den Kult-Hits der 80er & 90er</span> über aktuellen Pop, Rock, Dance Classics bis hin zu Disco und Charts – ich spiele die Musik, die Ihre Gäste lieben.
                </p>

                <p>
                  Buchbar im <span className="font-bold text-white">Umkreis von 350 km</span> um Demmin, betreue ich Events in ganz Mecklenburg-Vorpommern, Berlin, Brandenburg, Schleswig-Holstein und Niedersachsen. Ihre Wünsche stehen im Mittelpunkt – ich passe mich jeder Stimmung und jedem Publikum individuell an.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-xl p-6 border backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(6, 182, 212, 0.05))',
                  borderColor: 'rgba(14, 165, 233, 0.3)'
                }}
              >
                <div className="absolute top-0 left-0 w-1 h-full" style={{ background: 'linear-gradient(to bottom, #0EA5E9, #06B6D4)' }} />
                <div className="relative flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(14, 165, 233, 0.2)' }}
                  >
                    <Sparkles className="w-5 h-5" style={{ color: '#0EA5E9' }} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-2">Meine Philosophie</p>
                    <p className="text-sm text-gray-300/90 leading-relaxed italic">
                      "Gute Musik verbindet Menschen. Als DJDEMO bringe ich mit 80er & 90er Klassikern und modernen Hits die perfekte Balance zwischen Nostalgie und Party-Stimmung. Jede Veranstaltung ist einzigartig – und verdient den perfekten Sound."
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex flex-wrap gap-3">
                  {[
                    '80er/90er Spezialist',
                    'Hochzeits-DJ',
                    'Event-DJ',
                    'Moderne Technik',
                    'GEMA-registriert',
                    'Vollversichert'
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-xs font-medium border backdrop-blur-sm"
                      style={{
                        backgroundColor: 'rgba(14, 165, 233, 0.05)',
                        borderColor: 'rgba(14, 165, 233, 0.2)',
                        color: '#06B6D4'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutModal
