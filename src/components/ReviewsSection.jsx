import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'Mateus Oliveira', text: 'Comida nota 10! Recomendo o carneiro, cupim e a carne de sol. Atendimento excelente, preço justo.', rating: 5 },
  { name: 'Branco Lima', text: 'Comida excelente, farta e de qualidade. Cuidado!! Na sexta tem risco de almoçar com uma Heineken gelada e ir emendando.', rating: 5 },
  { name: 'Diego Silva', text: 'Comida caseira deliciosa e muito saborosa. Com um preço ótimo! Ambiente aconchegante.', rating: 5 },
  { name: 'André Moura', text: 'Ótimo lugar pra almoçar! Recomendo demais. Atendimento rápido e comida de qualidade.', rating: 5 },
  { name: 'Luiz Sérgio', text: 'Bom preço, ambiente agradável. Cerveja gelada, petiscos variados. Recomendo a dobradinha seca e crocante e a picanha grelhada.', rating: 4 },
  { name: 'Família Chaves', text: 'Ambiente familiar. Atendimento rápido e acima de tudo, comida de qualidade. Preço justo!', rating: 5 },
];

export default function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="reviews" className="py-24 md:py-32 px-4" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-amber-400 text-sm tracking-widest uppercase mb-4 block">Avaliações</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            O que nossos clientes
            <span className="text-amber-400"> dizem</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-white/60 text-lg">4.5 no Google · 690+ avaliações</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-amber-400/30 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-amber-400/20 mb-4" />
              <p className="text-sm text-white/70 leading-relaxed mb-4">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-amber-400">{review.name.charAt(0)}</span>
                  </div>
                  <span className="text-sm font-semibold text-white">{review.name}</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-white/20'}`} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}