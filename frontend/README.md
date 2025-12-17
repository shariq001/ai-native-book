# Frontend: AI-Native Interactive Textbook

This directory contains all frontend components for the AI-Native Interactive Textbook project.

## Structure

- `docs/` - Educational content for all modules (Module 1 - ROS 2 Nervous System, Module 2 - Digital Twin Simulation, Module 3 - AI Robot Brain, Module 4 - VLA Capstone)
- `src/` - React components and styling
  - `components/` - Reusable UI components (ModuleContainer, ChapterContent, etc.)
  - `css/` - Custom styles
- `static/` - Static assets like images and diagrams
  - `img/` - SVG diagrams for VLA pipeline, cognitive planning, and capstone flow
- `docusaurus.config.js` - Main Docusaurus configuration
- `sidebars.js` - Navigation structure
- `package.json` - Frontend dependencies

## Key Features

This educational platform focuses on teaching robotics and AI concepts through an interactive textbook approach:

1. **Module 1: ROS 2 - The Robotic Nervous System** - Teaching ROS 2 concepts as a digital nervous system
2. **Module 2: Digital Twin (Gazebo & Unity)** - Understanding simulation with physics vs. visual engines
3. **Module 3: The AI-Robot Brain (NVIDIA Isaac™)** - How robots perceive and plan movement using AI
4. **Module 4: Vision-Language-Action (VLA) & Capstone** - Convergence of language models with physical actions

## Technologies Used

- Docusaurus - Static site generator
- React - Component-based UI
- Markdown/MDX - Content authoring
- Tailwind CSS - Styling
- SVG - Visual diagrams

## Performance Goals

- Load time under 2 seconds on low-end devices
- Mobile-responsive design
- Accessible content (WCAG 2.1 AA compliant)
- Lightweight assets for fast loading