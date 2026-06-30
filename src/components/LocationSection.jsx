import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const hours = [
  { day: 'Segunda', time: 'Fechado', closed: true },
  { day: 'Terça', time: '9h – 15:30' },
  { day: 'Quarta', time: '9h – 15:30' },
  { day: 'Quinta', time: '9h – 15:30' },
  { day: 'Sexta', time: '9h – 15:30' },
  { day: 'Sábado', time: '9h – 16h' },
  { day: 'Domingo', time: '9h – 16h' },
];

export default function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="location" className="py-24 md:py-32 px-4 bg-white/[0.02]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm tracking-widest uppercase mb-4 block">Localização</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Venha nos
            <span className="text-amber-400"> visitar</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-xl shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Endereço</p>
                  <p className="text-sm text-white/50">R. Hefesto, 2 – Papagaio<br />Feira de Santana – BA, 44059-400</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-3 rounded-xl shrink-0">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Telefone / WhatsApp</p>
                  <a href="tel:+5575983331421" className="text-sm text-amber-400 hover:underline">(75) 98333-1421</a>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/aVi2hTGNZUbZqitd6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-amber-500 text-black py-3 rounded-xl font-semibold text-sm hover:brightness-110 transition-all duration-300"
              >
                <Navigation className="w-4 h-4" />
                Abrir no Google Maps
              </a>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-500/10 p-3 rounded-xl">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <p className="text-sm font-semibold text-white">Horário de Funcionamento</p>
              </div>
              <div className="space-y-2">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center text-sm">
                    <span className={h.closed ? 'text-white/40' : 'text-white'}>{h.day}</span>
                    <span className={h.closed ? 'text-red-400' : 'text-amber-400 font-medium'}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-white/10 min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.5!2d-38.9470177!3d-12.2089401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71438fff47ba8e9%3A0x3aeff5e0a607948b!2sPetiscaria%20Papagaio%20-%20Bar%20Do%20Alfredo!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Bar do Alfredo"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}