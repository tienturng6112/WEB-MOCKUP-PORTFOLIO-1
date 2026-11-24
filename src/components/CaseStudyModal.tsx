import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  CheckCircle2,
  Code2,
  Copy,
  ExternalLink,
  Github,
  X,
} from 'lucide-react';
import { Language, ProjectItem } from '../types/portfolio';
import { uiCopy } from '../data/portfolioData';
import { ProjectMockup } from './ProjectMockup';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  lang: Language;
  onClose: () => void;
}

export function CaseStudyModal({
  project,
  lang,
  onClose,
}: CaseStudyModalProps) {
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const t = uiCopy[lang].projects.modal;

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      setCopiedSnippet(false);
    };
  }, [project, onClose]);

  const handleCopyCode = async () => {
    if (!project) return;
    try {
      await navigator.clipboard.writeText(project.caseStudy.codeSnippet.code);
      setCopiedSnippet(true);
      setTimeout(() => setCopiedSnippet(false), 2000);
    } catch {
      setCopiedSnippet(true);
      setTimeout(() => setCopiedSnippet(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/15 bg-[#101014] shadow-2xl"
          >
            {/* Sticky Top Bar */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/[0.08] bg-[#101014]/90 px-5 py-4 backdrop-blur-md sm:px-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                  {project.categoryLabel[lang]} · {project.year}
                </span>
                <h3
                  id="case-study-title"
                  className="text-lg font-bold text-zinc-50 sm:text-2xl"
                >
                  {project.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label={t.close}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-zinc-900 px-3 py-2 text-xs font-medium text-zinc-300 transition hover:border-white/25 hover:text-white"
              >
                <span className="hidden sm:inline">{t.close}</span>
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Body */}
            <div className="space-y-8 p-5 sm:p-8">
              {/* Real Product Photo + Architectural Telemetry Preview */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="overflow-hidden rounded-xl border border-white/[0.08] bg-zinc-900">
                  <img
                    src={project.imageUrl}
                    alt={project.imageAlt[lang]}
                    className="h-56 w-full object-cover sm:h-64"
                  />
                </div>
                <ProjectMockup type={project.mockupType} />
              </div>

              {/* Metadata Strip */}
              <div className="grid grid-cols-1 gap-3 rounded-xl border border-white/[0.08] bg-zinc-900/50 p-4 sm:grid-cols-3">
                <div>
                  <div className="font-mono text-[11px] uppercase text-zinc-500">
                    {t.role}
                  </div>
                  <div className="mt-1 text-sm font-medium text-zinc-100">
                    {project.role[lang]}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase text-zinc-500">
                    {t.timeline}
                  </div>
                  <div className="mt-1 text-sm font-medium text-zinc-100">
                    {project.timeline}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-[11px] uppercase text-zinc-500">
                    {t.team}
                  </div>
                  <div className="mt-1 text-sm font-medium text-zinc-100">
                    {project.teamSize[lang]}
                  </div>
                </div>
              </div>

              {/* Outcomes / Metrics */}
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-400">
                  {t.outcomes}
                </h4>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {project.caseStudy.metrics.map((metric) => (
                    <div
                      key={metric.label[lang]}
                      className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.05] p-4"
                    >
                      <div className="font-mono text-2xl font-bold text-emerald-300">
                        {metric.value}
                      </div>
                      <div className="mt-1 text-xs text-zinc-400">
                        {metric.label[lang]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-white/[0.07] bg-zinc-900/40 p-5">
                  <h4 className="text-sm font-semibold text-zinc-100">
                    {t.challenge}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                    {project.caseStudy.challenge[lang]}
                  </p>
                </div>

                <div className="rounded-xl border border-white/[0.07] bg-zinc-900/40 p-5">
                  <h4 className="text-sm font-semibold text-zinc-100">
                    {t.solution}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                    {project.caseStudy.solution[lang]}
                  </p>
                </div>
              </div>

              {/* Architecture Highlights */}
              <div>
                <h4 className="text-sm font-semibold text-zinc-100">
                  {t.architecture}
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {project.caseStudy.architectureHighlights.map((item) => (
                    <li
                      key={item[lang]}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{item[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code Snapshot */}
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-100">
                    <Code2 className="h-4 w-4 text-emerald-400" />
                    <span>{t.snippet}</span>
                  </h4>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-900 px-2.5 py-1 font-mono text-xs text-zinc-300 transition hover:border-white/25 hover:text-white"
                  >
                    {copiedSnippet ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>{project.caseStudy.codeSnippet.filename}</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="mt-3 overflow-x-auto rounded-xl border border-white/[0.08] bg-[#09090b] p-4 font-mono text-xs leading-6 text-zinc-300">
                  <code>{project.caseStudy.codeSnippet.code}</code>
                </pre>
              </div>

              {/* Stack & Action Links */}
              <div className="flex flex-col justify-between gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/[0.08] bg-zinc-900 px-2.5 py-1 font-mono text-xs text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-zinc-200 transition hover:border-white/25 hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    <span>{t.sourceCode}</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-4 py-2.5 text-xs font-semibold text-zinc-950 transition hover:bg-emerald-300"
                  >
                    <span>{t.liveDemo}</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
