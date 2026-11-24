import { motion } from 'framer-motion';
import { BadgeCheck, Quote } from 'lucide-react';
import { Language } from '../types/portfolio';
import { testimonialsData, uiCopy } from '../data/portfolioData';

interface TestimonialsSectionProps {
  lang: Language;
}

export function TestimonialsSection({ lang }: TestimonialsSectionProps) {
  const t = uiCopy[lang].testimonials;

  return (
    <section
      id="testimonials"
      className="border-t border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
            {t.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonialsData.map((item, idx) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="card-border-glow flex flex-col justify-between rounded-2xl bg-[#111114]/90 p-6"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                    <BadgeCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{t.verifiedBadge}</span>
                  </span>
                  <Quote className="h-5 w-5 text-zinc-700" />
                </div>

                <blockquote className="mt-5 text-sm leading-relaxed text-zinc-300">
                  {item.quote[lang]}
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center gap-3.5 border-t border-white/[0.07] pt-5">
                <img
                  src={item.avatarUrl}
                  alt={`${item.name} — ${item.role[lang]}, ${item.company}`}
                  loading="lazy"
                  className="h-12 w-12 shrink-0 rounded-full border border-white/15 object-cover object-top"
                />
                <div className="min-w-0">
                  <div className="truncate text-sm font-bold text-zinc-100">
                    {item.name}
                  </div>
                  <div className="truncate text-xs text-zinc-400">
                    {item.role[lang]} ·{' '}
                    <span className="text-emerald-400">{item.company}</span>
                  </div>
                  <div className="mt-0.5 truncate font-mono text-[10px] text-zinc-500">
                    {item.relationship[lang]}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
