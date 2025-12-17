---
id: 24
title: "cognitive-planner-chapter-creation"
stage: tasks
date: "2025-12-14"
surface: "agent"
model: "Qwen Code"
feature: "4-vla-capstone"
branch: "4-vla-capstone"
user: "Muhammad Shariq"
command: "/sp.tasks"
labels: ["tasks", "education", "robotics", "ai", "vla", "llm", "cognitive-planning", "chapter-content"]
links: 
  spec: "specs/4-vla-capstone/spec.md"
  plan: "specs/4-vla-capstone/plan.md"
  ticket: null
  adr: null
  pr: null
files:
  - "docs/vla-capstone/the-cognitive-planner.mdx"
tests: []
prompt_text: "/sp.tasks\n\nContext for task generation: Module 4, Chapter 3: The Cognitive Planner Context: - Focus: Using LLMs to plan a sequence of actions. - Concept: The \"Chain of Thought.\" Instructions: 1. The Challenge: A robot doesn't know what \"Clean the room\" means. 2. **The Prompt**: How we ask the LLM to break it down. - Example Input: \"Clean the room.\" - Example LLM Output: `[\"Go to Table\", \"Find Cup\", \"Pick up Cup\", \"Go to Trash\", \"Drop Cup\"]`. 3. Explain that this list of strings is then sent to the **ROS 2 Nervous System** (Module 1) to execute."
response_text: "Successfully created the content for Module 4, Chapter 3: The Cognitive Planner. The chapter explains the challenge of translating high-level commands like 'Clean the room' into specific robot actions. It describes how the LLM uses Chain of Thought reasoning to break down commands, with the provided example input and output. The content explains how the resulting list of strings is sent to the ROS 2 Nervous System for execution. The explanation uses simple language appropriate for students ready for system integration."
outcome: "Successfully created the third chapter of the VLA & Capstone module with appropriate explanations for students ready for system integration."
evaluation: "The chapter content meets all requirements including the challenge explanation, LLM prompt process, example input/output, and explanation of ROS 2 integration."
---

# The Cognitive Planner: Using LLMs for Action Sequences

## The Challenge: From Command to Action

A robot may hear "Clean the room" via the voice-to-text system, but it doesn't understand what that means. The robot needs to break this high-level command into a sequence of specific, executable actions it can perform.

This is where the cognitive planner comes in—it translates abstract commands into specific steps.

## The Prompt: Breaking Down Commands

The cognitive planner uses a large language model (LLM) to decompose high-level commands into action sequences. Here's how it works:

**Example Input:** "Clean the room."

**LLM Output (Chain of Thought):**
```
["Go to Table", "Find Cup", "Pick up Cup", "Go to Trash", "Drop Cup"]
```

The LLM uses its training to understand the steps needed to complete the cleaning task. The "Chain of Thought" reasoning helps it generate a logical sequence of actions.

## How the Process Works

1. The voice command is converted to text
2. The text command is sent to the LLM along with the robot's capabilities
3. The LLM generates a sequence of primitive actions
4. This sequence is formatted as a list of strings that the robot can execute

The LLM leverages its vast training data to understand that cleaning a room involves finding objects, determining how to move them, and where to place them appropriately.

## Sending to the ROS 2 Nervous System

Once the LLM generates the action sequence, this list of strings is sent to the ROS 2 Nervous System (from Module 1) to execute. The ROS 2 system handles:

- Navigation to the specified locations
- Identifying objects in the environment
- Controlling robot arms and grippers
- Managing the overall execution of the task

This creates a complete pipeline from voice command to physical action.

## Key Takeaway

The cognitive planner uses LLMs to transform high-level human commands into specific sequences of robot actions. It acts as the bridge between human language and robot execution, enabling natural interaction with robots.