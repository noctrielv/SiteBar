import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Droplets } from 'lucide-react';

const BEER_IMG = 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&q=80';
const COCKTAIL_IMG = 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=600&q=80';
 'https://media.db.com/images/public/69cc4e907e1c2e8eea6eaf8c/be322a422_generated_07c7cfc9.png';

const drinks = [
  { name: 'Cerveja Gelada', desc: 'Chopp, long neck e latão sempre estupidamente gelada no ponto' },
  { name: 'Caipirinha', desc: 'De limão, maracujá, morango ou a clássica com cachaça da terra' },
  { name: 'Drinks Especiais', desc: 'Coquetéis autorais criados pelo Alfredo pra refrescar seu dia' },
  { name: 'Refrigerantes & Sucos', desc: 'Opções pra toda a família curtir junto' },
];

export default function DrinksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="drinks" className="py-24 md:py-32 px-4 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-amber-400 text-sm tracking-widest uppercase mb-4 block">Bebidas</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Gelada que
              <span className="text-amber-400"> congela a alma</span>
            </h2>
            <p className="text-white/50 mb-10 leading-relaxed">
              De cerveja estupidamente gelada a caipirinhas que dão vontade de ficar o dia inteiro.
              Aqui a bebida é tão boa quanto a companhia.
            </p>

            <div className="space-y-4">
              {drinks.map((drink, i) => (
                <motion.div
                  key={drink.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/30 transition-colors duration-300"
                >
                  <div className="bg-amber-500/10 p-2.5 rounded-lg shrink-0">
                    <Droplets className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{drink.name}</h4>
                    <p className="text-xs text-white/50 mt-0.5">{drink.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img src={BEER_IMG} alt="Cerveja gelada" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-8">
                <img src={COCKTAIL_IMG} alt="Caipirinhas e drinks" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/5 border border-white/10 rounded-full px-6 py-3 shadow-xl whitespace-nowrap">
              <p className="text-sm text-white font-semibold text-center">
                🍺 Sexta é dia de risco: almoço + Heineken gelada
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}