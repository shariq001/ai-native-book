# AI-Robotics Textbook: Module Directory Mapping

**Feature**: 4-vla-capstone
**Created**: 2025-12-14

## Overview

This document provides a mapping of the original file names to the new organized structure following the module and chapter numbering convention.

## Module Directory Mapping

### Module 1: ROS 2 - The Robotic Nervous System
- **Original Directory**: `ros2-nervous-system`
- **New Directory**: `Module 1 - ROS 2 Nervous System`

#### Chapter Mappings:
- `digital-nervous-system.mdx` → `01-The-Digital-Nervous-System.mdx`
- `signals-reflexes.mdx` → `02-Signals-and-Reflexes.mdx`
- `python-bridge.mdx` → `03-The-Python-Bridge.mdx`
- `defining-body-urdf.mdx` → `04-Defining-the-Body-URDF.mdx`

### Module 2: Digital Twin (Gazebo & Unity)
- **Original Directory**: `digital-twin-simulation`
- **New Directory**: `Module 2 - Digital Twin Simulation`

#### Chapter Mappings:
- `the-mirror-world.mdx` → `01-The-Mirror-World.mdx`
- `laws-of-the-land.mdx` → `02-Laws-of-the-Land.mdx`
- `the-human-element.mdx` → `03-The-Human-Element.mdx`
- `synthetic-senses.mdx` → `04-Synthetic-Senses.mdx`

### Module 3: The AI-Robot Brain (NVIDIA Isaac™)
- **Original Directory**: `ai-robot-brain`
- **New Directory**: `Module 3 - AI Robot Brain`

#### Chapter Mappings:
- `infinite-training-data.mdx` → `01-Infinite-Training-Data.mdx`
- `visual-gps-vslam.mdx` → `02-Visual-GPS-VSLAM.mdx`
- `the-navigator-nav2.mdx` → `03-The-Navigator-Nav2.mdx`
- `walking-not-rolling.mdx` → `04-Walking-Not-Rolling.mdx`

### Module 4: Vision-Language-Action (VLA) & Capstone
- **Original Directory**: `vla-capstone`
- **New Directory**: `Module 4 - VLA Capstone`

#### Chapter Mappings:
- `module-summary.mdx` → `00-Module-Summary.mdx`
- `the-embodied-llm.mdx` → `01-The-Embodied-LLM.mdx`
- `the-robot-ear.mdx` → `02-The-Robot-Ear.mdx`
- `the-cognitive-planner.mdx` → `03-The-Cognitive-Planner.mdx`
- `capstone-the-autonomous-loop.mdx` → `04-Capstone-The-Autonomous-Loop.mdx`

## Technical Notes

- All file paths in `sidebars.js` have been updated to reflect the new naming convention
- The new naming convention follows the pattern: `[Chapter Number]-[Chapter Title].[extension]`
- Module directories now include their number and title for easier identification
- All visual elements (SVG diagrams) remain in the `static/img/` directory and do not require renaming
- The maintenance documentation file (`maintenance-documentation.md`) was not renamed as it's not a chapter file