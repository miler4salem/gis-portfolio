import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Eye, FileText } from 'lucide-react';
import { getDriveUrls, type EmploymentDocument } from '../config.js';

interface DocumentCardProps {
  document: EmploymentDocument;
  onPreview: (doc: EmploymentDocument) => void;
}

export function DocumentCard({ document, onPreview }: DocumentCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { viewUrl } = getDriveUrls(document.driveFileId);

  return (
    <article className="doc-card">
      <div className="doc-card__top">
        <div className="doc-card__icon" aria-hidden="true">
          <FileText size={21} strokeWidth={1.6} />
        </div>
        <div className="doc-card__heading">
          <div className="project-card__meta">
            <span>{document.employer}</span>
            <span>•</span>
            <span>{document.fileSize}</span>
          </div>
          <h3 className="doc-card__title">{document.title}</h3>
        </div>
      </div>

      <div className="project-card__stack">
        <span className="stack-label">Focus</span>
        <p className="stack-list">{document.tags.join(' · ')}</p>
      </div>

      <p className="project-card__section">
        <strong>Project:</strong> {document.project}
      </p>

      <p className="project-card__section">
        <strong>Type of Work:</strong> {document.workType}
      </p>

      {expanded && (
        <div className="project-card__details">
          <p className="project-card__section">
            <strong>What I Did:</strong> {document.whatIDid}
          </p>
        </div>
      )}

      <div className="doc-card__actions">
        <div className="project-card__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => onPreview(document)}
          >
            <Eye size={14} />
            Preview PDF
          </button>
          <a
            href={viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            Open in Drive
            <ExternalLink size={14} />
          </a>
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
    </article>
  );
}
