import React from 'react'
import { Phone, Mail, MessageCircle } from 'lucide-react'

const Contact = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hallo DJDEMO! Ich möchte gerne mehr über Ihre Leistungen erfahren.')
    window.open(`https://wa.me/4915201798664?text=${message}`, '_blank')
  }

  return (
    <section id="kontakt" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Kontakt
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Lassen Sie uns Ihre perfekte Veranstaltung planen. Ich freue mich auf Ihre Anfrage!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-cyan-500/30 transition-all backdrop-blur-sm text-center">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgba(14, 165, 233, 0.1)', borderColor: 'rgba(14, 165, 233, 0.3)', borderWidth: '2px' }}>
              <Mail className="w-8 h-8" style={{ color: '#0EA5E9' }} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">E-Mail</h3>
            <a href="mailto:heikobanaszak1@web.de" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg block break-all">
              heikobanaszak1@web.de
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-cyan-500/30 transition-all backdrop-blur-sm text-center">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgba(14, 165, 233, 0.1)', borderColor: 'rgba(14, 165, 233, 0.3)', borderWidth: '2px' }}>
              <Phone className="w-8 h-8" style={{ color: '#0EA5E9' }} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Facebook</h3>
            <a href="https://www.facebook.com/profile.php?id=615863744646074" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors text-lg block">
              DJDEMO
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8 hover:border-green-500/30 transition-all backdrop-blur-sm text-center">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.3)', borderWidth: '2px' }}>
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">WhatsApp</h3>
            <button
              onClick={handleWhatsApp}
              className="text-gray-300 hover:text-green-400 transition-colors text-lg"
            >
              Nachricht senden
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
