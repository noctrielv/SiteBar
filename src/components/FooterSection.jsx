import { Phone, MapPin, Heart } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-amber-400 mb-1" style={{ fontFamily: 'Georgia, serif' }}>Petiscaria Papagaio</h3>
            <p className="text-sm text-white/40">Bar do Alfredo · Feira de Santana – BA</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-white/40">
            <a href="tel:+5575983331421" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <Phone className="w-4 h-4" />
              (75) 98333-1421
            </a>
            <span className="hidden sm:block text-white/20">|</span>
            <a href="https://maps.app.goo.gl/aVi2hTGNZUbZqitd6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
              <MapPin className="w-4 h-4" />
              R. Hefesto, 2 – Papagaio
            </a>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-white/30 flex items-center justify-center gap-1">
            Feito com <Heart className="w-3 h-3 fill-amber-500 text-amber-500" /> para os amantes de um bom boteco
          </p>
        </div>
      </div>
    </footer>
  );
}