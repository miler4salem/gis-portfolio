# GIS & Web Development Portfolio

A React + TypeScript + Vite portfolio web app designed for **Firebase Hosting (Free Spark Plan)** with **Cloud Firestore** ready for future full-stack features and GIS demos.

## Local Development

```powershell
# Install dependencies (use npm.cmd if PowerShell blocks npm.ps1)
npm.cmd install

# Start the local dev server
npm.cmd run dev
```

## Connecting Firebase (Free Spark Plan)

1. Create a project in the [Firebase Console](https://console.firebase.google.com/) on the **Spark (free)** plan.
2. Register a **Web App** in Project Settings and copy the config values into `.env.local` (see `.env.example`).
3. Update `.firebaserc` with your Firebase Project ID.
4. Deploy to Firebase Hosting:

```powershell
npx.cmd firebase-tools login
npm.cmd run deploy
```

## Adding Project Screenshots

Drop screenshots or short looping GIFs into `public/previews/` and set `previewImage: '/previews/your-file.png'` in `src/data/projects.ts`.
