# WayToMoksha Architecture

## Current Architecture Goal

The current goal is not to build the full enterprise platform.

The current goal is to build a clean public website that can grow into a larger platform.

## Development Stack

Preferred initial stack:

- Next.js
- React
- Tailwind CSS
- Cursor for AI-first coding
- GitHub for source control

## Hosting Options

For early demo:

- GitHub Pages or Vercel

For Azure-aligned production:

- Azure Static Web Apps

For future media:

- Azure Blob Storage

For future APIs:

- Azure App Service
- Azure Functions

For future structured data:

- Azure SQL Database

## Project 1 Architecture: Public Website

The website should initially be static or semi-static.

Pages:

- Home
- About
- Daily Sessions
- Retreats
- Volunteer
- Donate
- Contact

Suggested folder structure:

```text
src/
  app/
    page.tsx
    about/
    daily-sessions/
    retreats/
    volunteer/
    donate/
    contact/

  components/
    layout/
      Header.tsx
      Footer.tsx
    sections/
    cards/
    ui/

  data/
    retreats.ts
    sessions.ts
    donations.ts
    navigation.ts

  styles/