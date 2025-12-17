// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Module 1. The Nervous System',
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Module 1 - ROS 2 Nervous System/The-Digital-Nervous-System',
          label: '1.1 Introduction to Middleware',
        },
        {
          type: 'doc',
          id: 'Module 1 - ROS 2 Nervous System/Signals-and-Reflexes',
          label: '1.2 Communication Patterns',
        },
        {
          type: 'doc',
          id: 'Module 1 - ROS 2 Nervous System/The-Python-Bridge',
          label: '1.3 Python Integration',
        },
        {
          type: 'doc',
          id: 'Module 1 - ROS 2 Nervous System/Defining-the-Body-URDF',
          label: '1.4 Robot Description (URDF)',
        },
      ],
    },
    {
      type: 'category',
      label: 'Module 2. The Digital Twin',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'Module 2 - Digital Twin Simulation/The-Mirror-World',
          label: '2.1 Simulation Fundamentals',
        },
        {
          type: 'doc',
          id: 'Module 2 - Digital Twin Simulation/Laws-of-the-Land',
          label: '2.2 Physics Engines & Collision',
        },
        {
          type: 'doc',
          id: 'Module 2 - Digital Twin Simulation/The-Human-Element',
          label: '2.3 Rendering & Visuals',
        },
        {
          type: 'doc',
          id: 'Module 2 - Digital Twin Simulation/Synthetic-Senses',
          label: '2.4 Sensor Simulation',
        },
      ],
    },
    {
      type: 'category',
      label: 'Module 3. The AI Brain',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'Module 3 - AI Robot Brain/Infinite-Training-Data',
          label: '3.1 Synthetic Data Generation',
        },
        {
          type: 'doc',
          id: 'Module 3 - AI Robot Brain/Visual-GPS-VSLAM',
          label: '3.2 Visual Localization (VSLAM)',
        },
        {
          type: 'doc',
          id: 'Module 3 - AI Robot Brain/The-Navigator-Nav2',
          label: '3.3 Path Planning (Nav2)',
        },
        {
          type: 'doc',
          id: 'Module 3 - AI Robot Brain/Walking-Not-Rolling',
          label: '3.4 Bipedal Control Dynamics',
        },
      ],
    },
    {
      type: 'category',
      label: 'Module 4. Embodied Intelligence',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'doc',
          id: 'Module 4 - VLA Capstone/The-Embodied-LLM',
          label: '4.1 VLA Model Architecture',
        },
        {
          type: 'doc',
          id: 'Module 4 - VLA Capstone/The-Robot-Ear',
          label: '4.2 Speech Processing Pipeline',
        },
        {
          type: 'doc',
          id: 'Module 4 - VLA Capstone/The-Cognitive-Planner',
          label: '4.3 LLM-Based Planning',
        },
        {
          type: 'doc',
          id: 'Module 4 - VLA Capstone/Capstone-The-Autonomous-Loop',
          label: '4.4 Capstone: System Integration',
        },
      ],
    },
  ],
};

export default sidebars;