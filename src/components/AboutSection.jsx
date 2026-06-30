import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Beer, Utensils, Users, Heart } from 'lucide-react';

const INTERIOR_IMG = 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80'; 'https://media.db.com/images/public/69cc4e907e1c2e8eea6eaf8c/313cf498a_generated_95c33731.png';

const features = [
  { icon: Beer, label: 'Cerveja Gelada', desc: 'Sempre estupidamente gelada' },
  { icon: Utensils, label: 'Comida Caseira', desc: 'Tempero de mãe baiana' },
  { icon: Users, label: 'Ambiente Familiar', desc: 'Bar de bairro acolhedor' },
  { icon: Heart, label: 'Preço Justo', desc: 'R$40–60 por pessoa' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 px-4 overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={INTERIOR_IMG} alt="Interior do Bar do Alfredo" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-black rounded-2xl p-6 shadow-xl">
              <p className="text-3xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>690+</p>
              <p className="text-sm opacity-80">Avaliações no Google</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-amber-400 text-sm tracking-widest uppercase mb-4 block">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              O boteco que virou
              <br />
              <span className="text-amber-400">ponto de encontro</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              No coração do bairro Papagaio, em Feira de Santana, o Bar do Alfredo é aquele lugar
              onde todo mundo se sente em casa. Churrasco na brasa, carne-de-sol com macaxeira,
              cupim derretendo na boca e a cerveja mais gelada da região. Venha a qualquer hora
              de manhã, na hora do almoço ou pra um petisco no final da tarde.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="bg-amber-500/10 p-2 rounded-lg">
                    <f.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{f.label}</p>
                    <p className="text-xs text-white/50">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}