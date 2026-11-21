import { ExternalLink, Github, Layers, Code2, Lock, Sparkles } from 'lucide-react';
import type { PortfolioProject } from '../data/projects';

interface ProjectCardProps {
  project: PortfolioProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`project-card ${project.isComingSoon ? 'project-card--muted' : ''}`}>
      <div className="project-card__preview">
        {project.previewImage ? (
          <img src={project.previewImage} alt={`${project.title} preview`} />
        ) : (
          <div className="project-card__placeholder">
            {project.category === 'employer' ? (
              <Layers size={28} strokeWidth={1.6} />
            ) : (
              <Sparkles size={28} strokeWidth={1.6} />
            )}
            <span>
              {project.isComingSoon
                ? 'Demo preview coming soon'
                : 'Add a screenshot or GIF in public/previews/'}
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

        <p className="project-card__section">
          <strong>Overview:</strong> {project.overview}
        </p>

        <p className="project-card__section">
          <strong>My Role:</strong> {project.myRole}
        </p>

        <div className="project-card__tags">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__footer">
          <div className="project-card__actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                View Live App
                <ExternalLink size={15} />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--secondary"
              >
                <Github size={15} />
                Source Code
              </a>
            )}
            {project.isComingSoon && (
              <span className="coming-soon-pill">
                <Code2 size={14} /> In Development
              </span>
            )}
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
