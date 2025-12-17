# Quickstart Guide: AI-Robot Brain Educational Module

**Feature**: 3-ai-robot-brain-isaac
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
mkdir -p docs/ai-robot-brain
```

### 4. Create Chapter Files

Create four chapter files in the `docs/ai-robot-brain/` directory:

```bash
touch docs/ai-robot-brain/infinite-training-data.mdx
touch docs/ai-robot-brain/visual-gps-vslam.mdx
touch docs/ai-robot-brain/the-navigator-nav2.mdx
touch docs/ai-robot-brain/walking-not-rolling.mdx
```

### 5. Configure Sidebar Navigation

Update `sidebars.js` to include the new module with the Perception-Planning-Action flow:

```javascript
module.exports = {
  docs: [
    // Other documentation sections...
    {
      type: 'category',
      label: 'AI-Robot Brain (NVIDIA Isaac)',
      items: [
        'ai-robot-brain/infinite-training-data',
        'ai-robot-brain/visual-gps-vslam',
        'ai-robot-brain/the-navigator-nav2',
        'ai-robot-brain/walking-not-rolling'
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

## Sequential Flow Context

Each chapter builds on the previous one in this sequence:
- Data Generation (Isaac Sim) → Localization (VSLAM) → Planning (Nav2) → Bipedal Navigation

## Visual Learning Elements

Include 2D flowcharts and diagrams to illustrate key concepts:
- Costmap visualization
- VSLAM landmark recognition
- Path planning logic
- Point cloud abstractions

## Summary

Brief summary of what was covered in the chapter.
```

### Adding Visual Elements

For 2D flowcharts and navigation logic diagrams, use pre-rendered SVGs for optimal performance:

```md
import DiagramName from './path/to/diagram.svg';

<DiagramName />
```

Ensure all SVG diagrams for path planning are <50KB for mobile performance.

## Performance Optimization

### Image Optimization

All images should be optimized before inclusion:

```bash
# Use a tool like ImageOptim or TinyPNG to compress images
# For SVGs, use SVGO to optimize:
npx svgo docs/ai-robot-brain/*.svg
```

### Content Best Practices

- Focus on conceptual understanding rather than hardware-specific details
- Use "Landmark Recognition" analogy for VSLAM instead of matrix algebra
- Emphasize 2D "Occupancy Grids" rather than complex 3D navigation
- Prioritize NVIDIA Isaac high-level concepts over generic ROS navigation stacks
- Include 2D flowcharts for navigation logic (Costmaps, A* paths)

## Testing Strategy

### "Explain Like I'm 5" Check
Ensure content is accessible to beginners in the field:
```bash
# Manually review each chapter to ensure
# non-experts can understand "Synthetic Data" and "SLAM"
```

### Diagram Clarity
Test that diagrams clearly distinguish between "Free Space" and "Obstacles" on small screens:
```bash
# Review each diagram and confirm it's clear on mobile devices
```

### Mobile Load Time
Ensure SVG diagrams for path planning are <50KB:
```bash
# Check file sizes:
ls -la docs/ai-robot-brain/*.svg
```

## Validation

Verify terminology against latest NVIDIA Isaac Sim documentation:
- Check Isaac Sim "Replicator" details
- Confirm Nav2 "Behavior Trees" concepts
- Ensure VSLAM explanations align with current understanding

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