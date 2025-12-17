# Quickstart Guide: Vision-Language-Action (VLA) & Capstone Educational Module

**Feature**: 4-vla-capstone
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
mkdir -p docs/vla-capstone
```

### 4. Create Chapter Files

Create four chapter files in the `docs/vla-capstone/` directory:

```bash
touch docs/vla-capstone/the-embodied-llm.mdx
touch docs/vla-capstone/the-robot-ear.mdx
touch docs/vla-capstone/the-cognitive-planner.mdx
touch docs/vla-capstone/capstone-the-autonomous-loop.mdx
```

### 5. Configure Sidebar Navigation

Update `sidebars.js` to include the new module with the VLA pipeline flow:

```javascript
module.exports = {
  docs: [
    // Other documentation sections...
    {
      type: 'category',
      label: 'Vision-Language-Action (VLA) & Capstone',
      items: [
        'vla-capstone/the-embodied-llm',
        'vla-capstone/the-robot-ear',
        'vla-capstone/the-cognitive-planner',
        'vla-capstone/capstone-the-autonomous-loop'
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
- Embodied LLM → Robot Ear → Cognitive Planner → Capstone

## Visual Learning Elements

Include simple 2D block diagrams showing data flow:
- VLA pipeline architecture
- Prompt/response templates
- Capstone integration diagram

## Summary

Brief summary of what was covered in the chapter.
```

### Adding Visual Elements

For 2D block diagrams showing data flow between AI models and ROS nodes, use pre-rendered SVGs for optimal performance:

```md
import DiagramName from './path/to/diagram.svg';

<DiagramName />
```

Ensure all SVG diagrams for the VLA pipeline are <50KB for mobile performance.

## Performance Optimization

### Image Optimization

All images should be optimized before inclusion:

```bash
# Use a tool like ImageOptim or TinyPNG to compress images
# For SVGs, use SVGO to optimize:
npx svgo docs/vla-capstone/*.svg
```

### Content Best Practices

- Focus on conceptual understanding rather than complex API integration code
- Use conceptual "Prompt/Response" blocks rather than actual API calls
- Emphasize system design narrative over implementation details
- Use simplified, pseudo-ROS commands like `Action: Navigate, Target: Kitchen`
- Include 2D block diagrams showing data flow between AI models and ROS nodes

## Testing Strategy

### "Prompt Logic Test"
Ensure that example LLM prompts provided actually produce logical, sequential robot steps in a readable format:
```bash
# Manually review each prompt example to ensure
# it produces logical, sequential robot steps
```

### Integration Clarity Check
Confirm the Capstone chapter clearly references concepts taught in Modules 1, 2, and 3:
```bash
# Review the capstone chapter to ensure it connects
# with concepts from previous modules
```

### Mobile Readability
Ensure flowcharts of the VLA pipeline are legible on small screens:
```bash
# Test all diagrams on mobile devices to ensure readability
```

## Validation

Verify terminology against current VLA model documentation:
- Check current Vision-Language-Action models and capabilities
- Confirm Whisper conceptual explanations
- Verify chain-of-thought prompting concepts

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