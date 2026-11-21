export type ProjectCategory = 'employer' | 'personal';

export interface PortfolioProject {
  id: string;
  title: string;
  category: ProjectCategory;
  badge: string;
  organization: string;
  year: string;
  overview: string;
  myRole: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  hostingNote?: string;
  previewImage?: string;
  isComingSoon?: boolean;
}

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'roanoke-permit-app',
    title: 'Roanoke County Permit Application',
    category: 'employer',
    badge: 'Custom Full-Stack',
    organization: 'Roanoke County',
    year: '2026',
    overview:
      'A custom web application built to streamline permit application workflows for Roanoke County, replacing rigid off-the-shelf forms with a tailored user experience and backend automation.',
    myRole:
      'Designed and built the custom frontend from scratch using vanilla JavaScript, HTML, and CSS, and developed a Python Flask API backend to handle server-side processing and integrations.',
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Python', 'Flask API'],
    liveUrl: 'https://cityworkstest.roanokecountyva.gov/permitapplication',
    hostingNote: 'Hosted on Roanoke County test server · Source code proprietary',
  },
  {
    id: 'roanoke-floodview',
    title: 'Roanoke County FloodView',
    category: 'employer',
    badge: 'GIS Web App',
    organization: 'Roanoke County',
    year: '2026',
    overview:
      'A public-facing interactive GIS web application enabling Roanoke County residents, planners, and property owners to explore flood zones and spatial risk layers.',
    myRole:
      'Configured and published the interactive mapping experience in Esri ArcGIS Experience Builder, structuring spatial layers, widgets, and user-friendly query workflows for the public.',
    techStack: ['ArcGIS Experience Builder', 'Esri GIS', 'Web Mapping', 'Spatial Data'],
    liveUrl: 'https://floodview.roanokecountyva.gov',
    hostingNote: 'Hosted by Roanoke County · Public GIS application',
  },
  {
    id: 'personal-gis-demo-1',
    title: 'Interactive Spatial Explorer (Coming Soon)',
    category: 'personal',
    badge: 'Personal Demo',
    organization: 'Personal Project',
    year: 'Upcoming',
    overview:
      'An open-source React + GIS web mapping demo showcasing custom spatial filtering, interactive map layers, and serverless data persistence on Firebase.',
    myRole:
      'Full-stack architecture, interactive map UI, and public GitHub repository so reviewers can inspect both the live app and source code.',
    techStack: ['React', 'TypeScript', 'Leaflet / ArcGIS SDK', 'Firebase Firestore'],
    isComingSoon: true,
  },
];
