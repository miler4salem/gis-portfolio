import { useState } from 'react';
import { Compass, ExternalLink, FileText, Github, MapPin } from 'lucide-react';
import { PORTFOLIO_PROJECTS, type ProjectCategory } from './data/projects';
import {
  employmentDocuments,
  experienceConfig,
  profileConfig,
  type EmploymentDocument,
} from './config.js';
import { ProjectCard } from './components/ProjectCard';
import { DocumentCard } from './components/DocumentCard';
import { PdfPreviewModal } from './components/PdfPreviewModal';

type FilterOption = 'all' | ProjectCategory;
type ActiveView = 'portfolio' | 'about';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('portfolio');
  const [filter, setFilter] = useState<FilterOption>('all');
  const [activeDoc, setActiveDoc] = useState<EmploymentDocument | null>(null);

  const filteredProjects =
    filter === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="app-shell">
      <nav className="top-nav" aria-label="Primary navigation">
        <div className="top-nav__inner">
          <button
            type="button"
            className="top-nav__brand"
            onClick={() => setActiveView('portfolio')}
          >
            <span className="top-nav__name">{profileConfig.name}</span>
            <span className="top-nav__tagline">{profileConfig.tagline}</span>
          </button>

          <div className="top-nav__links">
            <button
              type="button"
              className={`nav-tab ${activeView === 'portfolio' ? 'nav-tab--active' : ''}`}
              onClick={() => setActiveView('portfolio')}
            >
              Portfolio
            </button>
            <button
              type="button"
              className={`nav-tab ${activeView === 'about' ? 'nav-tab--active' : ''}`}
              onClick={() => setActiveView('about')}
            >
              About &amp; Experience
            </button>
            <a
              href={profileConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="GitHub profile"
              title="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </nav>

      {activeView === 'portfolio' ? (
        <>
          <header className="hero">
            <div className="hero__inner">
              <div className="hero__eyebrow">
                <Compass size={15} />
                <span>Spatial Engineering &amp; Cartography</span>
              </div>
              <h1 className="hero__title">{profileConfig.name}</h1>
              <div className="hero__role-pill">{profileConfig.role}</div>
              <p className="hero__subtitle">{profileConfig.heroIntro}</p>
              <div className="hero__meta">
                <span className="meta-item">
                  <MapPin size={14} /> {profileConfig.location}
                </span>
                <a
                  href={profileConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta-link"
                >
                  <Github size={14} />
                  github.com/miler4salem
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </header>

          <main className="main-content">
            <section aria-labelledby="featured-projects-heading">
              <div className="section-header">
                <div>
                  <p className="section-overline">Web GIS &amp; Software</p>
                  <h2 id="featured-projects-heading">Featured Projects</h2>
                  <p>
                    Production applications hosted by Roanoke County alongside upcoming personal
                    GIS demos.
                  </p>
                </div>

                <div className="filter-bar" role="tablist" aria-label="Filter projects">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={filter === 'all'}
                    className={`filter-btn ${filter === 'all' ? 'filter-btn--active' : ''}`}
                    onClick={() => setFilter('all')}
                  >
                    All ({PORTFOLIO_PROJECTS.length})
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={filter === 'employer'}
                    className={`filter-btn ${filter === 'employer' ? 'filter-btn--active' : ''}`}
                    onClick={() => setFilter('employer')}
                  >
                    Roanoke County
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={filter === 'personal'}
                    className={`filter-btn ${filter === 'personal' ? 'filter-btn--active' : ''}`}
                    onClick={() => setFilter('personal')}
                  >
                    Personal Demos
                  </button>
                </div>
              </div>

              <div className="section-divider" />

              <div className="projects-grid">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </section>

            <section className="docs-section" aria-labelledby="past-work-heading">
              <div className="section-header">
                <div>
                  <p className="section-overline">
                    <FileText size={13} />
                    <span>Past Employer Portfolio • Louis Berger</span>
                  </p>
                  <h2 id="past-work-heading">Cartography &amp; GIS Deliverables</h2>
                  <p>
                    Selected PDF map series, utility exhibits, and master planning deliverables from
                    past consulting work at Louis Berger.
                  </p>
                </div>
              </div>

              <div className="section-divider" />

              <div className="docs-grid">
                {employmentDocuments.map((doc) => (
                  <DocumentCard key={doc.id} document={doc} onPreview={setActiveDoc} />
                ))}
              </div>
            </section>
          </main>
        </>
      ) : (
        <main className="main-content main-content--editorial">
          <section className="about-section" aria-labelledby="about-heading">
            <p className="section-overline">Profile</p>
            <h1 id="about-heading" className="about-title">
              About Me
            </h1>
            <div className="section-divider" />

            <div className="about-card">
              {profileConfig.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx} className="about-paragraph">
                  {paragraph}
                </p>
              ))}
              <div className="about-meta">
                <span className="meta-item">
                  <MapPin size={15} /> {profileConfig.location}
                </span>
                <a
                  href={profileConfig.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="meta-link"
                >
                  <Github size={15} />
                  github.com/miler4salem
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </section>

          <section className="about-section" aria-labelledby="skills-heading">
            <p className="section-overline">Capabilities</p>
            <h2 id="skills-heading">Technical Skills</h2>
            <div className="section-divider" />

            <div className="skills-list">
              {profileConfig.skillGroups.map((group) => (
                <div key={group.label} className="skill-group">
                  <h3 className="skill-group__label">{group.label}</h3>
                  <p className="skill-group__items">{group.items.join('  |  ')}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="about-section" aria-labelledby="experience-heading">
            <p className="section-overline">Background</p>
            <h2 id="experience-heading">Experience</h2>
            <div className="section-divider" />

            <div className="experience-list">
              {experienceConfig.map((item) => (
                <article key={item.id} className="experience-item">
                  <div className="experience-item__header">
                    <div>
                      <h3 className="experience-item__role">{item.role}</h3>
                      <p className="experience-item__org">
                        {item.organization}
                        {item.location ? ` · ${item.location}` : ''}
                      </p>
                    </div>
                    <span className="experience-item__period">{item.period}</span>
                  </div>
                  {item.summary && <p className="experience-item__summary">{item.summary}</p>}
                  {item.technologies && item.technologies.length > 0 && (
                    <p className="experience-item__tech">{item.technologies.join(' · ')}</p>
                  )}
                  <ul className="experience-item__bullets">
                    {item.highlights.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </main>
      )}

      <footer className="footer">
        <p>
          {profileConfig.name} • {profileConfig.location} • Built with React, TypeScript &amp;
          Firebase Hosting
        </p>
      </footer>

      <PdfPreviewModal document={activeDoc} onClose={() => setActiveDoc(null)} />
    </div>
  );
}
