import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Flame } from 'lucide-react';

const dishes = [
  {
    name: 'Picanha na Brasa',
    desc: 'Grelhada no ponto, acompanha farofa, vinagrete e arroz',
    img: 'https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80',
    tag: 'Mais Pedido',
  },
  {
    name: 'Carne de Sol',
    desc: 'Com macaxeira cremosa, manteiga de garrafa e cebola caramelizada',
    img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    tag: 'Especialidade',
  },
  {
    name: 'Cupim Assado',
    desc: 'Derretendo na boca, com farofa crocante e salada fresca',
    img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
    tag: 'Novidade',
  },
  {
    name: 'Petiscos Variados',
    desc: 'Aipim frito, pastéis, bolinhos e muito mais pra compartilhar',
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80',
    tag: 'Pra Dividir',
  },
];

export default function MenuSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="menu" className="py-24 md:py-32 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm tracking-widest uppercase mb-4 block">Cardápio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Pratos que fazem
            <span className="text-amber-400"> história</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Comida feita com amor e tempero baiano. Do churrasco à carne de sol, cada prato conta uma história de sabor.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 bg-amber-500/90 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  <Flame className="w-3 h-3" />
                  {dish.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Georgia, serif' }}>{dish.name}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{dish.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}