import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Copy,
  Github,
  Linkedin,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { Language } from '../types/portfolio';
import { profileData, uiCopy } from '../data/portfolioData';

interface HeroProps {
  lang: Language;
}

export function Hero({ lang }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const t = uiCopy[lang].hero;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
    >
      {/* Subtle architectural grid */}
      <div className="bg-tech-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            {/* Status Pill */}
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/[0.08] px-3.5 py-1.5 text-xs font-medium text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span>{profileData.availability[lang]}</span>
            </div>

            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-zinc-400">
              {profileData.name} — {t.roleLabel}
            </p>

            <h1 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.12]">
              {t.headlinePrefix}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                {t.headlineHighlight}
              </span>
              {t.headlineSuffix}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {t.subheadline}
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-zinc-500">
              <MapPin className="h-3.5 w-3.5 text-emerald-400/80" />
              <span>{profileData.location[lang]}</span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300"
              >
                <span>{t.primaryCta}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900/90 px-4 py-3 text-sm font-medium text-zinc-200 transition hover:border-white/25 hover:bg-zinc-800/90"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-300">{t.copiedEmail}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-zinc-400" />
                    <span>{t.copyEmail}</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 pl-1">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/70 text-zinc-400 transition hover:border-white/25 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-zinc-900/70 text-zinc-400 transition hover:border-white/25 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Real Developer Portrait & Verified Metrics Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="card-border-glow overflow-hidden rounded-2xl bg-[#111114]/95 shadow-2xl">
              {/* Real Portrait Frame */}
              <div className="relative aspect-[4/4.2] w-full overflow-hidden border-b border-white/[0.07] bg-zinc-900">
                <img
                  src={profileData.avatarUrl}
                  alt={`${profileData.name} — ${t.roleLabel}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111114] via-[#111114]/20 to-transparent" />

                {/* Verified Identity Badge Overlay */}
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-zinc-950/80 px-2.5 py-1 text-[11px] font-medium text-emerald-300 backdrop-blur-md">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      <span>
                        {lang === 'vi'
                          ? 'Kỹ sư chính · Sản phẩm thực tế'
                          : 'Verified Senior Engineer'}
                      </span>
                    </div>
                    <div className="mt-2 text-lg font-bold text-white">
                      {profileData.name}
                    </div>
                    <div className="font-mono text-xs text-zinc-300">
                      React · TypeScript · Node.js
                    </div>
                  </div>
                </div>
              </div>

              {/* Metrics 2x2 Grid */}
              <div className="grid grid-cols-2 divide-x divide-y divide-white/[0.06]">
                {t.metrics.map((metric) => (
                  <div key={metric.label} className="p-4 sm:p-5">
                    <div className="font-mono text-xl font-bold tracking-tight text-zinc-100 sm:text-2xl">
                      {metric.value}
                    </div>
                    <div className="mt-1 text-xs text-zinc-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
