import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter, RotateCcw, X } from 'lucide-react';
import { Language, ProjectCategory, ProjectItem } from '../types/portfolio';
import { projectsData, uiCopy } from '../data/portfolioData';

interface ProjectsSectionProps {
  lang: Language;
  activeCategory: ProjectCategory;
  onChangeCategory: (cat: ProjectCategory) => void;
  activeSkill: string | null;
  onSelectSkill: (skill: string | null) => void;
  onOpenProject: (project: ProjectItem) => void;
}

const FILTER_SKILLS = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Redis',
  'WebSockets',
];

export function ProjectsSection({
  lang,
  activeCategory,
  onChangeCategory,
  activeSkill,
  onSelectSkill,
  onOpenProject,
}: ProjectsSectionProps) {
  const t = uiCopy[lang].projects;

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchCat =
        activeCategory === 'all' || project.category === activeCategory;
      const matchSkill =
        !activeSkill || project.stack.includes(activeSkill);
      return matchCat && matchSkill;
    });
  }, [activeCategory, activeSkill]);

  const handleReset = () => {
    onChangeCategory('all');
    onSelectSkill(null);
  };

  return (
    <section
      id="projects"
      className="border-t border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
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
        </div>

        {/* Category & Skill Filters */}
        <div className="mt-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {t.categories.map((cat) => {
              const active = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onChangeCategory(cat.id)}
                  className={`relative rounded-xl px-4 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                    active
                      ? 'text-zinc-950'
                      : 'border border-white/10 bg-zinc-900/60 text-zinc-300 hover:border-white/25 hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="project-cat-pill"
                      transition={{ type: 'spring', stiffness: 450, damping: 34 }}
                      className="absolute inset-0 rounded-xl bg-emerald-400"
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Skill Tag Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 pr-1 font-mono text-xs text-zinc-500">
              <Filter className="h-3.5 w-3.5" />
              <span>Stack:</span>
            </span>

            {FILTER_SKILLS.map((skill) => {
              const selected = activeSkill === skill;
              return (
                <button
                  key={skill}
                  type="button"
                  onClick={() => onSelectSkill(selected ? null : skill)}
                  className={`rounded-lg border px-2.5 py-1 font-mono text-xs transition ${
                    selected
                      ? 'border-emerald-400/70 bg-emerald-400/15 text-emerald-300'
                      : 'border-white/[0.08] bg-zinc-900/50 text-zinc-400 hover:border-white/20 hover:text-zinc-200'
                  }`}
                >
                  {skill}
                </button>
              );
            })}

            {activeSkill && (
              <button
                type="button"
                onClick={() => onSelectSkill(null)}
                className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs text-zinc-400 transition hover:text-white"
              >
                <X className="h-3.5 w-3.5" />
                <span>{t.clearSkill}</span>
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-white/15 bg-zinc-900/30 p-12 text-center">
            <h3 className="text-lg font-semibold text-zinc-200">
              {t.emptyTitle}
            </h3>
            <p className="mt-2 text-sm text-zinc-400">{t.emptyDesc}</p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-300"
            >
              <RotateCcw className="h-4 w-4" />
              <span>{t.resetFilters}</span>
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="card-border-glow group flex flex-col justify-between rounded-2xl bg-[#111114]/90 p-5"
                >
                  <div>
                    {/* Real Project Photo */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900">
                      <img
                        src={project.imageUrl}
                        alt={project.imageAlt[lang]}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                      <div className="absolute inset-x-3 bottom-2.5 flex items-center justify-between gap-2">
                        <span className="rounded-md bg-zinc-950/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-emerald-300 backdrop-blur-sm">
                          {project.year}
                        </span>
                        <span className="rounded-full border border-white/15 bg-zinc-950/80 px-2.5 py-0.5 font-mono text-[11px] text-zinc-200 backdrop-blur-sm">
                          {project.impactBadge[lang]}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400">
                        {project.categoryLabel[lang]}
                      </span>
                    </div>

                    <h3 className="mt-1.5 text-xl font-bold tracking-tight text-zinc-100 transition group-hover:text-emerald-300">
                      {project.title}
                    </h3>

                    <p className="mt-1.5 text-sm font-medium text-zinc-300">
                      {project.tagline[lang]}
                    </p>

                    <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-zinc-400">
                      {project.summary[lang]}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-white/[0.06] pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-md px-2 py-0.5 font-mono text-[11px] ${
                            activeSkill === tech
                              ? 'bg-emerald-400/20 text-emerald-300'
                              : 'bg-white/[0.04] text-zinc-400'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-zinc-500">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenProject(project)}
                      className="mt-4 inline-flex w-full items-center justify-between rounded-xl border border-white/10 bg-zinc-900/90 px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-emerald-400/50 hover:bg-emerald-400/10 hover:text-emerald-300"
                    >
                      <span>{t.viewCaseStudy}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
