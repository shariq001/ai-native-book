---
id: 1
title: Create Project Constitution
stage: constitution
date: 2025-12-13
surface: agent
model: Qwen
feature: none
branch: main
user: shariq
command: /sp.constitution
labels: ["constitution", "ai-textbook", "principles"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

```
/sp.constitution

Project: AI-Native Interactive Textbook: Physical AI & Humanoid Robotics

Core Principles:
- Radical Simplicity: Complex robotics concepts (SLAM, Inverse Kinematics) must be reduced to intuitive, digestible logic.
- Performance First: Design for low-end devices. Zero heavy animations. Content must load instantly.
- Modular Backend, Simple Frontend: Content is structured in modular blocks but presented as a seamless, clean reading experience.
- Accessible Intelligence: The "AI" feel comes from smart adaptability and clarity, not visual noise.

Key Standards:
- Pedagogical Style: "concept-first, code-second." Use simplified Python/Pseudocode logic over dense C++ boilerplate.
- Visuals: Static, high-contrast diagrams only. No resource-heavy simulations or video backgrounds.
- Interface: Minimalist typography. All chapters must be immediately visible and navigable.
- Writing: Short, punchy paragraphs. Flesch-Kincaid Grade 8-10 (High readability).

Constraints:
- Chapter Length: Micro-chapters (500-800 words max).
- Complexity Cap: Avoid deep dependency chains in code examples. Focus on the "Why" and "What," not just the syntax.
- Tech Stack: Lightweight Markdown/JSON. No heavy JS frameworks for content rendering.
- Compatibility: Must render perfectly on mobile/low-bandwidth connections.

Success Criteria:
- Content loads in <2 seconds on 3G networks.
- Users can understand a "Physical AI" concept (e.g., Gait Planning) in under 5 minutes.
- Zero "Wall of Text" formatting.

Workflow Phases:
Phase 1: Architecture Simplification (Breaking complex topics into micro-modules)
Phase 2: Draft High-Level Logic (Simplified code examples)
Phase 3: Minimalist UI/UX Structure (Clean layout design)
Phase 4: Content Generation (Short, accessible text)
Phase 5: Performance Review (Check load times/readability)
```

## Response snapshot

Successfully created the project constitution for the AI-Native Interactive Textbook: Physical AI & Humanoid Robotics project. The constitution document includes four core principles (Radical Simplicity, Performance First, Modular Backend Simple Frontend, and Accessible Intelligence), along with detailed sections on additional constraints for pedagogical style, visuals, interface requirements, writing guidelines, chapter specifications, complexity management, tech stack requirements, and compatibility standards. It also defines success criteria and development workflow phases, with governance policies and versioning information.

## Outcome

- ✅ Impact: Created comprehensive project constitution with 4 core principles and detailed implementation guidelines
- 🧪 Tests: none required
- 📁 Files: Updated .specify/memory/constitution.md
- 🔁 Next prompts: Implement features following constitutional principles
- 🧠 Reflection: The constitution provides a solid foundation for consistent development decisions throughout the project lifecycle

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): Begin feature development following constitutional principles