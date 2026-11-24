import { motion } from 'framer-motion';
import { Cpu, Layers, Zap } from 'lucide-react';
import { Language } from '../types/portfolio';
import { profileData, skillGroups, uiCopy } from '../data/portfolioData';

interface AboutSectionProps {
  lang: Language;
  activeSkill: string | null;
  onSelectSkill: (skill: string) => void;
}

const principleIcons = [Zap, Layers, Cpu];

export function AboutSection({
  lang,
  activeSkill,
  onSelectSkill,
}: AboutSectionProps) {
  const t = uiCopy[lang].about;

  const handleSkillClick = (skillName: string) => {
    onSelectSkill(skillName);
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="about"
      className="border-t border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Top Row: Narrative + Real Workspace & Team Collaboration Photography */}
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              {t.description}
            </p>

            {/* Real Team Snapshot */}
            <div className="mt-7 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111114]/80">
              <div className="grid items-center sm:grid-cols-5">
                <div className="aspect-[16/10] sm:col-span-2 sm:aspect-auto sm:h-full">
                  <img
                    src={profileData.teamImageUrl}
                    alt={
                      lang === 'vi'
                        ? 'Làm việc cùng đội ngũ kỹ sư sản phẩm'
                        : 'Collaborating with product engineering squad'
                    }
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-4 sm:col-span-3">
                  <div className="font-mono text-[11px] uppercase tracking-wider text-emerald-400">
                    {lang === 'vi' ? 'Văn hóa kỹ thuật' : 'Engineering Culture'}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                    {lang === 'vi'
                      ? 'Phối hợp trực tiếp cùng Product Manager, Designer và đội ngũ Backend tại Việt Nam & Singapore trong các sprint tốc độ cao.'
                      : 'Hands-on collaboration with Product, Design, and Backend squads across Vietnam & Singapore in fast-paced delivery cycles.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Real Workspace Photo */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-6"
          >
            <div className="card-border-glow relative overflow-hidden rounded-2xl bg-[#111114]">
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={profileData.workspaceImageUrl}
                  alt={
                    lang === 'vi'
                      ? 'Không gian làm việc thực tế của Minh Nguyễn'
                      : 'Minh Nguyen real engineering workstation'
                  }
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.07] bg-[#111114]/95 px-5 py-3.5 text-xs">
                <span className="font-medium text-zinc-200">
                  {lang === 'vi'
                    ? 'Không gian làm việc & Code Review hàng ngày'
                    : 'Daily Engineering & Architecture Workstation'}
                </span>
                <span className="font-mono text-[11px] text-emerald-400">
                  TP.HCM · Remote
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Principles */}
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.principles.map((item, idx) => {
            const Icon = principleIcons[idx % principleIcons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="card-border-glow rounded-2xl bg-[#111114]/80 p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-emerald-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Matrix */}
        <div className="mt-14 rounded-2xl border border-white/[0.08] bg-zinc-900/40 p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-2 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-center">
            <h3 className="text-lg font-semibold text-zinc-100">
              {t.skillsTitle}
            </h3>
            <p className="font-mono text-xs text-zinc-400">{t.skillsHint}</p>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.id}>
                <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-zinc-400">
                  {group.title[lang]}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => {
                    const isSelected = activeSkill === skill.name;
                    if (skill.filterable) {
                      return (
                        <button
                          key={skill.name}
                          type="button"
                          onClick={() => handleSkillClick(skill.name)}
                          className={`group inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                            isSelected
                              ? 'border-emerald-400 bg-emerald-400/15 text-emerald-300'
                              : 'border-white/10 bg-zinc-950/80 text-zinc-300 hover:border-emerald-400/50 hover:text-emerald-300'
                          }`}
                        >
                          <span>{skill.name}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60 transition group-hover:bg-emerald-400" />
                        </button>
                      );
                    }
                    return (
                      <span
                        key={skill.name}
                        className="inline-flex items-center rounded-lg border border-white/[0.07] bg-zinc-950/50 px-3 py-1.5 text-xs text-zinc-400"
                      >
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
