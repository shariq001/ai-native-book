---
id: 20
title: "navigator-nav2-chapter-creation"
stage: tasks
date: "2025-12-14"
surface: "agent"
model: "Qwen Code"
feature: "3-ai-robot-brain-isaac"
branch: "3-ai-robot-brain-isaac"
user: "Muhammad Shariq"
command: "/sp.tasks"
labels: ["tasks", "education", "robotics", "ai", "isaac", "navigation", "nav2", "chapter-content"]
links: 
  spec: "specs/3-ai-robot-brain-isaac/spec.md"
  plan: "specs/3-ai-robot-brain-isaac/plan.md"
  ticket: null
  adr: null
  pr: null
files:
  - "docs/ai-robot-brain/the-navigator-nav2.mdx"
tests: []
prompt_text: "/sp.tasks\n\nContext for task generation: Module 3, Chapter 3: The Navigator (Nav2) Context: - Focus: Path Planning (Nav2 Stack). - Concept: \"How do I get there?\" Instructions: 1. Introduce the **Costmap**: A grid where obstacles are red (danger) and empty space is white (safe). 2. Explain **Global Planner**: Planning the main route (Google Maps style). 3. Explain **Local Planner**: dodging a sudden obstacle (Reflex style). 4. **Visual**: Description for a 2D Costmap diagram showing a path around a box."
response_text: "Successfully created the content for Module 3, Chapter 3: The Navigator (Nav2). The chapter explains the Costmap concept with red areas for danger and white areas for safety. It describes the Global Planner as planning the main route like Google Maps, and the Local Planner as handling immediate decisions like reflexes. The content includes a visual diagram description of a 2D costmap showing a path around an obstacle. The explanation uses simple language appropriate for AI developers and roboticists."
outcome: "Successfully created the third chapter of the AI-Robot Brain module with appropriate explanations for AI developers and roboticists."
evaluation: "The chapter content meets all requirements including explanation of costmap, global planner, local planner, and visual diagram description."
---

# The Navigator (Nav2): How Do I Get There?

## The Costmap: A Robot's Safety Grid

Before a robot can navigate, it needs to understand which areas are safe and which are dangerous. This is where the "Costmap" comes in—a grid-based representation of the environment where:

- **White areas** represent safe, traversable space
- **Red areas** represent obstacles and danger zones
- **Lighter red areas** might represent uncertain or risky terrain
- **Black areas** represent unknown space that hasn't been explored yet

Think of it as a heat map for navigation safety. The robot uses this costmap to plan routes that avoid obstacles and risky areas, like a hiker choosing a path to avoid steep cliffs and dense forests.

## Global Planner: The Long-Term Strategy

The Global Planner is like Google Maps for robots—it plans the main route from the starting point to the destination. It takes the costmap and figures out the most efficient, safe path across the entire area.

The global planner:
- Looks at the big picture of the environment
- Plans the overall route, accounting for known obstacles
- Creates a sequence of waypoints to follow
- Updates the plan if the destination changes

This is the "think ahead" part of navigation, where the robot decides on the general path to take.

## Local Planner: The Reflexive Navigator

While the Global Planner handles the long-term route, the Local Planner handles immediate decisions—like your reflexes when you suddenly see an obstacle in your path. The Local Planner operates in real-time and can:

- Deviate from the global path to avoid sudden obstacles
- Handle dynamic obstacles like people or moving objects
- Make micro-adjustments that keep the robot safe and on course
- React quickly to situations the Global Planner didn't anticipate

This is the "react now" part of navigation, providing the agility needed to handle unexpected situations.

## The Navigation Process

[DIAGRAM: 2D Costmap diagram showing a path around a box - displaying a 2D grid with obstacles marked in red, free space in white, a robot position marked with an arrow, and a goal position marked with a flag. A global path is shown as a dotted line going around an obstacle box, while the local path is shown as a solid line showing the robot's actual movement with small deviations from the global path to avoid temporary obstacles]

The navigation system works as a team:
1. The costmap provides the safety information
2. The Global Planner creates the main route
3. The Local Planner adjusts the path in real-time
4. The robot follows the combined plan to reach its destination

## Key Takeaway

Navigation in robots uses both strategic planning (Global Planner) and reflexive responses (Local Planner), guided by a Costmap that shows safe vs. dangerous areas. This two-level approach allows robots to plan efficient routes while staying safe and adapting to unexpected obstacles.