import { FormEvent, useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail, Send } from 'lucide-react';
import { Language } from '../types/portfolio';
import { profileData, uiCopy } from '../data/portfolioData';

interface ContactSectionProps {
  lang: Language;
}

export function ContactSection({ lang }: ContactSectionProps) {
  const t = uiCopy[lang].contact;

  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topicIndex, setTopicIndex] = useState(0);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 650);
  };

  return (
    <section
      id="contact"
      className="border-t border-white/[0.06] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              {t.subtitle}
            </p>

            <div className="mt-8 rounded-2xl border border-white/[0.08] bg-[#111114]/90 p-6">
              <div className="flex items-center gap-3.5 border-b border-white/[0.07] pb-4">
                <img
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full border border-emerald-400/40 object-cover object-top"
                />
                <div>
                  <div className="text-sm font-bold text-zinc-100">
                    {profileData.name}
                  </div>
                  <div className="font-mono text-[11px] text-emerald-400">
                    {t.directTitle}
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-zinc-950/90 px-4 py-3">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span className="truncate font-mono text-sm text-zinc-200">
                    {profileData.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/10 bg-zinc-900 px-2.5 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-emerald-400/50 hover:text-emerald-300"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-emerald-300">{t.copiedLabel}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>{t.copyLabel}</span>
                    </>
                  )}
                </button>
              </div>

              <p className="mt-3 text-xs text-zinc-500">{t.responseTime}</p>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-zinc-300 transition hover:border-white/25 hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-3.5 py-2 text-xs font-medium text-zinc-300 transition hover:border-white/25 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <div className="card-border-glow rounded-2xl bg-[#111114]/90 p-6 sm:p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/15 text-emerald-400">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-zinc-100">
                    {t.form.successTitle}
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm text-zinc-400">
                    {t.form.successDesc}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-xl border border-white/10 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-200 transition hover:border-white/25 hover:text-white"
                  >
                    {t.form.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-xs font-medium text-zinc-300"
                      >
                        {t.form.name}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t.form.namePlaceholder}
                        className="w-full rounded-xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-400/70 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-xs font-medium text-zinc-300"
                      >
                        {t.form.email}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.form.emailPlaceholder}
                        className="w-full rounded-xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-400/70 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-topic"
                      className="mb-2 block text-xs font-medium text-zinc-300"
                    >
                      {t.form.topic}
                    </label>
                    <select
                      id="contact-topic"
                      value={topicIndex}
                      onChange={(e) => setTopicIndex(Number(e.target.value))}
                      className="w-full rounded-xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-zinc-100 focus:border-emerald-400/70 focus:outline-none"
                    >
                      {t.form.topics.map((item, idx) => (
                        <option key={item} value={idx}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-xs font-medium text-zinc-300"
                    >
                      {t.form.message}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t.form.messagePlaceholder}
                      className="w-full resize-none rounded-xl border border-white/10 bg-zinc-950/90 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-400/70 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3.5 text-sm font-semibold text-zinc-950 shadow-lg shadow-emerald-500/15 transition hover:bg-emerald-300 disabled:opacity-60"
                  >
                    <Send className="h-4 w-4" />
                    <span>{submitting ? t.form.sending : t.form.submit}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
