import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Language } from '../types/portfolio';
import { experienceData, uiCopy } from '../data/portfolioData';

interface ExperienceSectionProps {
  lang: Language;
}

export function ExperienceSection({ lang }: ExperienceSectionProps) {
  const t = uiCopy[lang].experience;

  return (
    <section
      id="experience"
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

        <div className="relative mt-12 space-y-6 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-white/10 sm:before:left-6">
          {experienceData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative pl-12 sm:pl-16"
            >
              {/* Timeline Node */}
              <div className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-emerald-500/40 bg-[#09090b] text-emerald-400 sm:left-2">
                <Briefcase className="h-3.5 w-3.5" />
              </div>

              <div className="card-border-glow rounded-2xl bg-[#111114]/85 p-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100">
                      {item.role[lang]} ·{' '}
                      <span className="text-emerald-400">{item.company}</span>
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {item.location[lang]}
                    </p>
                  </div>
                  <span className="w-fit rounded-full border border-white/10 bg-zinc-900 px-3 py-1 font-mono text-xs text-zinc-300">
                    {item.period}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                  {item.summary[lang]}
                </p>

                <ul className="mt-4 space-y-2">
                  {item.highlights.map((bullet) => (
                    <li
                      key={bullet[lang]}
                      className="flex items-start gap-2.5 text-sm text-zinc-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400/80" />
                      <span>{bullet[lang]}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-zinc-400"
                    >
                      {tech}
                    </span>
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
