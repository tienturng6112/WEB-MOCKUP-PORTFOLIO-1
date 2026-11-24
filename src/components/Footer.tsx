import { ArrowUp } from 'lucide-react';
import { Language } from '../types/portfolio';
import { profileData, uiCopy } from '../data/portfolioData';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const t = uiCopy[lang].footer;

  return (
    <footer className="border-t border-white/[0.06] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-xs text-zinc-500 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 text-center sm:text-left">
          <span className="font-mono text-zinc-300">
            © {new Date().getFullYear()} {profileData.name}
          </span>
          <span>·</span>
          <span>{t.builtWith}</span>
        </div>

        <a
          href="#top"
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-900/70 px-3 py-1.5 text-zinc-300 transition hover:border-white/25 hover:text-white"
        >
          <span>{t.backToTop}</span>
          <ArrowUp className="h-3.5 w-3.5" />
        </a>
      </div>
    </footer>
  );
}
