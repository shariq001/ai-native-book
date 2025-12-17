# Quickstart Guide: Digital Twin Simulation Educational Module

**Feature**: 2-digital-twin-gazebo-unity
**Created**: 2025-12-14

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- Git version control
- A GitHub account for deployment (if using GitHub Pages)

## Setup Process

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Create Module Directory Structure

```bash
mkdir -p docs/digital-twin-simulation
```

### 4. Create Chapter Files

Create four chapter files in the `docs/digital-twin-simulation/` directory:

```bash
touch docs/digital-twin-simulation/the-mirror-world.mdx
touch docs/digital-twin-simulation/laws-of-the-land.mdx
touch docs/digital-twin-simulation/the-human-element.mdx
touch docs/digital-twin-simulation/synthetic-senses.mdx
```

### 5. Configure Sidebar Navigation

Update `sidebars.js` to include the new module:

```javascript
module.exports = {
  docs: [
    // Other documentation sections...
    {
      type: 'category',
      label: 'Digital Twin Simulation (Gazebo & Unity)',
      items: [
        'digital-twin-simulation/the-mirror-world',
        'digital-twin-simulation/laws-of-the-land',
        'digital-twin-simulation/the-human-element',
        'digital-twin-simulation/synthetic-senses'
      ],
    },
  ],
};
```

### 6. Start Development Server

```bash
npm run start
# or
yarn start
```

The development server will start on `http://localhost:3000` and automatically open in your default browser.

## Content Creation

### Chapter Template

Each chapter MDX file should follow this basic structure:

```md
---
title: [Chapter Title]
sidebar_position: [1-4]
description: [Brief description of the chapter content]
---

# [Chapter Title]

Your chapter content goes here with Markdown formatting. Keep it between 500-800 words.

## Key Concepts

- List key concepts covered in the chapter

## Visual Learning Elements

Include schematic diagrams to illustrate key concepts:
- Physics simulation vs. visual rendering
- Sensor ray interactions
- Collision detection concepts

## Summary

Brief summary of what was covered in the chapter.
```

### Adding Visual Elements

For schematic diagrams, use pre-rendered SVGs for optimal performance:

```md
import DiagramName from './path/to/diagram.svg';

<DiagramName />
```

## Performance Optimization

### Image Optimization

All images should be optimized before inclusion:

```bash
# Use a tool like ImageOptim or TinyPNG to compress images
# For SVGs, use SVGO to optimize:
npx svgo docs/digital-twin-simulation/*.svg
```

### Content Best Practices

- Focus on conceptual understanding rather than detailed implementation
- Use clear visual metaphors to explain complex concepts
- Include schematic diagrams showing sensor rays, collision boxes, and physics interactions
- Emphasize visual learning approaches for better comprehension

## Testing Performance

Run a production build to test actual loading times:

```bash
npm run build
```

Use the local server to test the production build:

```bash
npm run serve
```

## Deployment

### GitHub Actions (Recommended)

1. Set up GitHub Pages in your repository settings
2. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: npm

      - name: Install dependencies
        run: npm ci
      - name: Build website
        run: npm run build

      # Popular action to deploy to GitHub Pages:
      # https://github.com/peaceiris/actions-gh-pages
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          # Build output to publish to the `gh-pages` branch:
          publish_dir: ./build
```

### Manual Deployment

For manual deployment to a static hosting service:

```bash
npm run build
# Upload the contents of the "build" folder to your hosting service
```

## Development Workflow

1. Make changes to MDX files
2. View changes in the development server
3. Run `npm run build` periodically to ensure performance requirements are met
4. Commit changes to Git
5. Push to trigger automated deployment (if using GitHub Actions)