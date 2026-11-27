import { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Code2,
  ExternalLink,
  Github,
  Layers,
  Lock,
  Sparkles,
} from 'lucide-react';
import type { PortfolioProject } from '../data/projects';

interface ProjectCardProps {
  project: PortfolioProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`project-card ${project.isComingSoon ? 'project-card--muted' : ''}`}>
      <div className="project-card__preview">
        {project.previewImage ? (
          <img src={project.previewImage} alt={`${project.title} preview`} />
        ) : (
          <div className="project-card__placeholder">
            {project.category === 'employer' ? (
              <Layers size={28} strokeWidth={1.5} />
            ) : (
              <Sparkles size={28} strokeWidth={1.5} />
            )}
            <span>
              {project.isComingSoon
                ? 'Demo preview coming soon'
                : 'Screenshot / preview slot (public/previews/)'}
            </span>
          </div>
        )}
        <span className="project-card__badge">{project.badge}</span>
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span>{project.organization}</span>
          <span>•</span>
          <span>{project.year}</span>
        </div>

        <h3 className="project-card__title">{project.title}</h3>

        <div className="project-card__stack">
          <span className="stack-label">Made with</span>
          <p className="stack-list">{project.techStack.join(' · ')}</p>
        </div>

        <p className="project-card__section">{project.overview}</p>

        {expanded && (
          <div className="project-card__details">
            <p className="project-card__section">
              <strong>My Role:</strong> {project.myRole}
            </p>
          </div>
        )}

        <div className="project-card__footer">
          <div className="project-card__footer-row">
            <div className="project-card__actions">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  View Live App
                  <ExternalLink size={14} />
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                >
                  <Github size={14} />
                  Source Code
                </a>
              )}
              {project.isComingSoon && (
                <span className="coming-soon-pill">
                  <Code2 size={14} /> In Development
                </span>
              )}
            </div>

            <button
              type="button"
              className="btn btn--ghost"
              aria-expanded={expanded}
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? 'Show Less' : 'Read More'}
              {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
            </button>
          </div>

          {project.hostingNote && (
            <p className="project-card__note">
              <Lock size={12} />
              {project.hostingNote}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
