# Quickstart Guide: ROS 2 Nervous System Educational Module

**Feature**: 1-ros2-nervous-system
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
mkdir -p docs/ros2-nervous-system
```

### 4. Create Chapter Files

Create four chapter files in the `docs/ros2-nervous-system/` directory:

```bash
touch docs/ros2-nervous-system/digital-nervous-system.mdx
touch docs/ros2-nervous-system/signals-reflexes.mdx
touch docs/ros2-nervous-system/python-bridge.mdx
touch docs/ros2-nervous-system/defining-body-urdf.mdx
```

### 5. Configure Sidebar Navigation

Update `sidebars.js` to include the new module:

```javascript
module.exports = {
  docs: [
    // Other documentation sections...
    {
      type: 'category',
      label: 'ROS 2: The Robotic Nervous System',
      items: [
        'ros2-nervous-system/digital-nervous-system',
        'ros2-nervous-system/signals-reflexes',
        'ros2-nervous-system/python-bridge',
        'ros2-nervous-system/defining-body-urdf'
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

## Biological Analogy

Explain the ROS 2 concept using a biological nervous system analogy.

## Code Example

Use simplified Python code focusing on logic rather than boilerplate:

```python
# Your simplified Python code example here
# Import statements and boilerplate omitted to focus on logic
```

## Summary

Brief summary of what was covered in the chapter.
```

### Adding Visual Elements

For diagrams, use pre-rendered SVGs for optimal performance:

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
npx svgo docs/ros2-nervous-system/*.svg
```

### Code Example Best Practices

- Focus on logic over boilerplate
- Omit import statements to reduce cognitive load
- Use clear variable names that reinforce the biological analogy
- Include brief explanations of what each part does

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