import { motion } from 'framer-motion';
import { MapPin, Clock, Star } from 'lucide-react';

const HERO_IMG = 'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=1600&q=80'; 'https://media.db.com/images/public/69cc4e907e1c2e8eea6eaf8c/6386409fa_generated_870e61b2.png';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Bar do Alfredo ambiente" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0602]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full font-sans text-sm tracking-wider uppercase">
            <Star className="w-4 h-4 fill-amber-400" />
            4.5 estrelas · 690+ avaliações
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl sm:text-6xl md:text-8xl font-bold text-white leading-tight mb-4"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Petiscaria
          <br />
          <span className="text-amber-400">Papagaio</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl text-white/60 italic mb-2"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Bar do Alfredo
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-base md:text-lg text-white/50 max-w-2xl mx-auto mb-10"
        >
          O melhor boteco de bairro de Feira de Santana. Petiscos de dar água na boca, cerveja gelada e aquele clima de casa.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#menu"
            className="bg-amber-500 text-black px-8 py-4 rounded-full font-semibold text-base hover:brightness-110 transition-all duration-300 shadow-lg shadow-amber-500/30"
          >
            Ver Cardápio
          </a>
          <a
            href="https://wa.me/5575983331421"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-base hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
          >
            Chamar no WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/40 text-sm"
        >
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            R. Hefesto, 2 – Papagaio, Feira de Santana
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            Ter-Sex 9h–15:30 · Sáb-Dom 9h–16h
          </span>
        </motion.div>
      </div>
    </section>
  );
}