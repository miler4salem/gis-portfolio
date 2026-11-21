import { useState } from 'react';
import { Compass, MapPin, Database } from 'lucide-react';
import { PORTFOLIO_PROJECTS, type ProjectCategory } from './data/projects';
import { ProjectCard } from './components/ProjectCard';
import { isFirebaseConfigured } from './lib/firebase';

type FilterOption = 'all' | ProjectCategory;

export default function App() {
  const [filter, setFilter] = useState<FilterOption>('all');

  const filteredProjects =
    filter === 'all'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <Compass size={16} />
            <span>GIS &amp; Full-Stack Web Development</span>
          </div>
          <h1 className="hero__title">Spatial Applications &amp; Custom Web Software</h1>
          <p className="hero__subtitle">
            Bridging municipal GIS workflows with modern web engineering—from custom JavaScript &amp;
            Python Flask applications to interactive Esri mapping portals and React demos.
          </p>
          <div className="hero__status">
            <span className="status-chip">
              <MapPin size={14} /> Roanoke County, VA
            </span>
            <span className="status-chip">
              <Database size={14} />
              Firebase Spark:{' '}
              {isFirebaseConfigured ? 'Connected' : 'Ready to configure (.env.local)'}
            </span>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="section-header">
          <div>
            <h2>Featured Projects</h2>
            <p>Production applications hosted by Roanoke County alongside upcoming personal demos.</p>
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

        <section className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </main>

      <footer className="footer">
        <p>Built with React, TypeScript, Vite &amp; Firebase Hosting (Spark Plan).</p>
      </footer>
    </div>
  );
}
