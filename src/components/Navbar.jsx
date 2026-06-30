import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#about' },
  { label: 'Cardápio', href: '#menu' },
  { label: 'Bebidas', href: '#drinks' },
  { label: 'Avaliações', href: '#reviews' },
  { label: 'Localização', href: '#location' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: scrolled ? 'rgba(10,6,2,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.5s',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="text-xl md:text-2xl font-bold text-amber-400 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
          Papagaio
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-amber-400 transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5575983331421"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-amber-500 text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            Reservar
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: 'rgba(10,6,2,0.98)', borderTop: '1px solid rgba(255,255,255,0.1)' }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base text-white/80 hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://wa.me/5575983331421"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 text-black px-6 py-3 rounded-full text-sm font-semibold mt-2"
              >
                <Phone className="w-4 h-4" />
                Reservar Mesa
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}