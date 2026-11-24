import { useEffect, useState } from 'react';
import { Language, ProjectCategory, ProjectItem } from './types/portfolio';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ExperienceSection } from './components/ExperienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [lang, setLang] = useState<Language>('vi');
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <Navbar lang={lang} onToggleLang={setLang} />

      <main>
        <Hero lang={lang} />
        <AboutSection
          lang={lang}
          activeSkill={activeSkill}
          onSelectSkill={(skill) =>
            setActiveSkill((prev) => (prev === skill ? null : skill))
          }
        />
        <ProjectsSection
          lang={lang}
          activeCategory={activeCategory}
          onChangeCategory={setActiveCategory}
          activeSkill={activeSkill}
          onSelectSkill={setActiveSkill}
          onOpenProject={setSelectedProject}
        />
        <ExperienceSection lang={lang} />
        <TestimonialsSection lang={lang} />
        <ContactSection lang={lang} />
      </main>

      <Footer lang={lang} />

      <CaseStudyModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default App;
