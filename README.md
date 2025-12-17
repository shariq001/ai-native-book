# AI-Native Interactive Textbook: Robotics Education Platform

This project is an educational platform designed to teach robotics and AI concepts through an interactive textbook approach. The platform is divided into frontend and backend components.

## Directory Structure

```
├── frontend/          # Educational content and UI components
│   ├── docs/          # All educational modules content
│   │   ├── ros2-nervous-system/       # Module 1: ROS 2 concepts
│   │   ├── digital-twin-simulation/   # Module 2: Gazebo & Unity
│   │   ├── ai-robot-brain/            # Module 3: NVIDIA Isaac
│   │   └── vla-capstone/              # Module 4: Vision-Language-Action
│   ├── src/           # React components for UI
│   │   └── components/ # Reusable UI components
│   ├── static/        # Static assets (images, diagrams)
│   │   └── img/       # SVG diagrams for VLA pipeline
│   ├── docusaurus.config.js # Docusaurus configuration
│   ├── sidebars.js    # Navigation structure
│   └── package.json   # Frontend dependencies
└── backend/           # Specifications, tools, and development artifacts
    ├── .qwen/         # Qwen Code tools and configurations
    ├── .specify/      # Specification-driven development tools
    ├── specs/         # Feature specifications for all modules
    └── history/       # Development history and records
```

## Frontend

The frontend contains all the educational content and user interface components. It's built with Docusaurus to create a static site that teaches robotics concepts through:

1. **Module 1: ROS 2 - The Robotic Nervous System** - Teaching ROS 2 concepts as a digital nervous system
2. **Module 2: Digital Twin (Gazebo & Unity)** - Understanding simulation with physics vs. visual engines
3. **Module 3: The AI-Robot Brain (NVIDIA Isaac™)** - How robots perceive and plan movement using AI
4. **Module 4: Vision-Language-Action (VLA) & Capstone** - Convergence of language models with physical actions

## Backend

The backend contains specifications, development tools, and project management artifacts. It follows a specification-driven development approach where:

1. Requirements are clearly defined before implementation
2. Implementation plans are automatically generated from specifications
3. Tasks are organized by user stories for independent development
4. Quality checklists ensure consistency and completeness

## Getting Started

### For Learning

Browse the educational content in the `frontend/docs/` directory to learn about robotics and AI concepts.

### For Development

1. Navigate to the `frontend/` directory to work on the educational content and UI
2. Navigate to the `backend/` directory to work on specifications and development tools
3. See individual README files in each directory for specific instructions