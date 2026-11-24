import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';
import { Language } from '../types/portfolio';
import { profileData, uiCopy } from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
}

export function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = uiCopy[lang].nav;

  const links = [
    { href: '#about', label: t.about },
    { href: '#projects', label: t.projects },
    { href: '#experience', label: t.experience },
    { href: '#contact', label: t.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] glass-surface">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-zinc-100"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 transition group-hover:border-emerald-400/60 group-hover:bg-emerald-500/20">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="font-mono text-xs sm:text-sm">
            {profileData.handle}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm text-zinc-400 transition-colors hover:bg-white/[0.05] hover:text-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-2.5">
          {/* Language Switcher */}
          <div
            className="flex items-center rounded-full border border-white/10 bg-zinc-900/90 p-0.5"
            role="group"
            aria-label="Language switcher"
          >
            {(['vi', 'en'] as const).map((code) => {
              const active = lang === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => onToggleLang(code)}
                  className={`relative rounded-full px-2.5 py-1 font-mono text-xs font-medium uppercase transition-colors ${
                    active ? 'text-zinc-950' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="lang-pill"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                      className="absolute inset-0 rounded-full bg-emerald-400"
                    />
                  )}
                  <span className="relative z-10">{code}</span>
                </button>
              );
            })}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300 transition hover:border-emerald-400/60 hover:bg-emerald-500/20 sm:inline-flex"
          >
            <span>{t.resume}</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-zinc-900/80 text-zinc-300 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/[0.06] bg-zinc-950/95 md:hidden"
          >
            <div className="space-y-1 px-4 py-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
