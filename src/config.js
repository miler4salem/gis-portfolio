/**
 * Portfolio Configuration
 *
 * Organized into three focused, top-level config exports:
 *  1. `profileConfig`       — Name, tagline, bio, contact links, and technical skills
 *  2. `experienceConfig`    — Work history entries (role, employer, period, highlights, tech)
 *  3. `employmentDocuments` — Google Drive PDFs (only `driveFileId` is needed for links)
 *
 * @typedef {Object} SkillGroup
 * @property {string} label - Category heading (e.g., Web Development)
 * @property {string[]} items - List of skills in that category
 *
 * @typedef {Object} ProfileConfig
 * @property {string} name - Display name in header and hero
 * @property {string} role - Primary professional title
 * @property {string} tagline - Short subtitle shown in the navigation bar
 * @property {string} location - City/region displayed in hero and about view
 * @property {string} githubUrl - Link to your GitHub profile
 * @property {string} heroIntro - Concise intro for the hero section
 * @property {string[]} aboutParagraphs - Bio paragraphs for the About & Experience view
 * @property {SkillGroup[]} skillGroups - Grouped technical skills
 *
 * @typedef {Object} ExperienceEntry
 * @property {string} id - Unique identifier for the entry
 * @property {string} organization - Employer or organization name
 * @property {string} role - Job title or role
 * @property {string} period - Date range or timeframe (e.g., '2022 – Present')
 * @property {string} location - City/state or Remote
 * @property {string} [summary] - Optional short overview of the role
 * @property {string[]} [technologies] - Optional key tools/technologies used
 * @property {string[]} highlights - Key accomplishments and responsibilities
 *
 * @typedef {Object} EmploymentDocument
 * @property {string} id - Unique identifier for the card
 * @property {string} title - Display title for the document
 * @property {string} fileName - Original PDF filename in Google Drive
 * @property {string} employer - Employer or organization name
 * @property {string} project - The project this document was involved with
 * @property {string} workType - What kind of work it was (e.g., Cartography, Utility GIS)
 * @property {string} whatIDid - Description of your specific contribution
 * @property {string} fileSize - Display file size
 * @property {string[]} tags - Skill or topic badges
 * @property {string} driveFileId - Google Drive file ID (from /file/d/<ID>/view)
 */

/**
 * Helper to build Google Drive view & embed preview URLs from a file ID.
 * @param {string} driveFileId
 */
export function getDriveUrls(driveFileId) {
  return {
    viewUrl: `https://drive.google.com/file/d/${driveFileId}/view?usp=sharing`,
    previewUrl: `https://drive.google.com/file/d/${driveFileId}/preview`,
  };
}

/** @type {ProfileConfig} */
export const profileConfig = {
  name: 'Kyle Nixon',
  role: 'GIS Specialist & Full-Stack Web Developer',
  tagline: 'Cartography, GIS Analysis & Custom Web Applications',
  location: 'Roanoke County, VA',
  githubUrl: 'https://github.com/miler4salem',
  heroIntro:
    'Bridging municipal GIS workflows with modern web engineering—from Esri Experience Builder mapping portals and print cartography to custom React, JavaScript, Python Flask, and Firebase applications.',
  aboutParagraphs: [
    'I am a GIS specialist and full-stack web developer based in Roanoke County, Virginia, focused on turning complex spatial datasets and municipal workflows into clear, accessible digital tools.',
    'My work spans both sides of the geospatial spectrum: building custom web applications with JavaScript, React, Python Flask, and Firebase alongside producing interactive Esri web maps, utility exhibits, and publication-grade cartography.',
  ],
  skillGroups: [
    {
      label: 'Web Development',
      items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Vite'],
    },
    {
      label: 'GIS & Cartography',
      items: [
        'Esri ArcGIS Experience Builder',
        'ArcGIS Pro / Desktop',
        'Spatial Analysis',
        'Cartographic Design',
        'Web Mapping',
      ],
    },
    {
      label: 'Backend & Cloud',
      items: ['Python', 'Flask API', 'Firebase Hosting', 'Cloud Firestore', 'Git & GitHub'],
    },
  ],
};

/** @type {ExperienceEntry[]} */
export const experienceConfig = [
  {
    id: 'roanoke-county',
    organization: 'Roanoke County',
    role: 'GIS & Custom Web Application Developer',
    period: 'Current',
    location: 'Roanoke County, VA',
    summary:
      'Building custom municipal web software and interactive public GIS applications supporting local government operations.',
    technologies: ['JavaScript', 'HTML5 / CSS3', 'Python', 'Flask API', 'ArcGIS Experience Builder'],
    highlights: [
      'Designed and built a custom permit application frontend from scratch using JavaScript, HTML5, and CSS3 paired with a Python Flask API backend.',
      'Configured and published public-facing interactive GIS applications in Esri ArcGIS Experience Builder, including Roanoke County FloodView.',
    ],
  },
  {
    id: 'louis-berger',
    organization: 'Louis Berger',
    role: 'GIS Specialist & Cartographer',
    period: 'Previous',
    location: 'Consulting',
    summary:
      'Delivered spatial analysis, master planning cartography, and utility siting map exhibits for federal and infrastructure clients.',
    technologies: ['ArcGIS Desktop / Pro', 'Cartography', 'Spatial Analysis', 'Utility GIS'],
    highlights: [
      'Produced comprehensive GIS mapping figures and installation layout deliverables for the Joint Base Anacostia-Bolling (JBAB) Master Plan.',
      'Created multi-sheet corridor map series (Lancaster–Honeybrook) and electric utility transmission siting exhibits (FirstEnergy OceanView 230kV).',
    ],
  },
];

/** @type {EmploymentDocument[]} */
export const employmentDocuments = [
  {
    id: 'louis-berger-jbab-master-plan',
    title: 'JBAB Master Plan',
    fileName: 'JBAB Master Plan.pdf',
    employer: 'Louis Berger',
    project: 'Joint Base Anacostia-Bolling (JBAB) Master Plan',
    workType: 'Master Planning & GIS Cartography',
    whatIDid:
      'Produced GIS mapping figures and spatial planning layouts supporting the installation master plan deliverable.',
    fileSize: '58.5 MB',
    tags: ['GIS Mapping', 'Master Planning', 'Cartography', 'PDF'],
    driveFileId: '1iuH4vSFGa9cWRmt6T5Icy3RiuWbiNJNh',
  },
  {
    id: 'louis-berger-lancaster-honeybrook',
    title: 'Lancaster–Honeybrook Map Series',
    fileName: 'Lancaster-Honeybrook-Maps.pdf',
    employer: 'Louis Berger',
    project: 'Lancaster–Honeybrook Corridor Study',
    workType: 'Cartography & Spatial Analysis',
    whatIDid:
      'Created a multi-sheet GIS map series integrating spatial layers, symbology, and print-ready cartographic design.',
    fileSize: '21.1 MB',
    tags: ['Cartography', 'Map Series', 'Spatial Analysis', 'PDF'],
    driveFileId: '12DhfWEqSL-x-7aWDP3tEbkEv2V1SnL3f',
  },
  {
    id: 'louis-berger-oceanview-230kv',
    title: 'OceanView 230kV – FirstEnergy',
    fileName: 'OceanView230kV_FirstEnergy.pdf',
    employer: 'Louis Berger',
    project: 'FirstEnergy OceanView 230kV Transmission Project',
    workType: 'Utility GIS & Transmission Siting',
    whatIDid:
      'Developed electric transmission corridor maps and spatial exhibits for utility infrastructure planning.',
    fileSize: '7.7 MB',
    tags: ['Utility GIS', 'Transmission Siting', 'Cartography', 'PDF'],
    driveFileId: '1bO2sSOUzpJQXnklQxsiAQ-Q1AdIz_fhX',
  },
];

export const siteConfig = {
  profile: profileConfig,
  experience: experienceConfig,
  documents: employmentDocuments,
};
