import { useEffect } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { getDriveUrls, type EmploymentDocument } from '../config.js';

interface PdfPreviewModalProps {
  document: EmploymentDocument | null;
  onClose: () => void;
}

export function PdfPreviewModal({ document, onClose }: PdfPreviewModalProps) {
  useEffect(() => {
    if (!document) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [document, onClose]);

  if (!document) return null;

  const { viewUrl, previewUrl } = getDriveUrls(document.driveFileId);

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdf-modal-title"
      onClick={onClose}
    >
      <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <p className="modal-eyebrow">
              {document.employer} • {document.workType} • {document.fileSize}
            </p>
            <h3 id="pdf-modal-title" className="modal-title">
              {document.title}
            </h3>
          </div>
          <div className="modal-header__actions">
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              Open in Drive
              <ExternalLink size={15} />
            </a>
            <button
              type="button"
              className="modal-close"
              onClick={onClose}
              aria-label="Close preview"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="modal-body">
          <iframe
            src={previewUrl}
            title={`${document.title} PDF preview`}
            className="pdf-iframe"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
}
