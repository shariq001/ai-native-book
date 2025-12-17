import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ai-native-book/__docusaurus/debug',
    component: ComponentCreator('/ai-native-book/__docusaurus/debug', 'bf0'),
    exact: true
  },
  {
    path: '/ai-native-book/__docusaurus/debug/config',
    component: ComponentCreator('/ai-native-book/__docusaurus/debug/config', '587'),
    exact: true
  },
  {
    path: '/ai-native-book/__docusaurus/debug/content',
    component: ComponentCreator('/ai-native-book/__docusaurus/debug/content', '318'),
    exact: true
  },
  {
    path: '/ai-native-book/__docusaurus/debug/globalData',
    component: ComponentCreator('/ai-native-book/__docusaurus/debug/globalData', '757'),
    exact: true
  },
  {
    path: '/ai-native-book/__docusaurus/debug/metadata',
    component: ComponentCreator('/ai-native-book/__docusaurus/debug/metadata', 'f6e'),
    exact: true
  },
  {
    path: '/ai-native-book/__docusaurus/debug/registry',
    component: ComponentCreator('/ai-native-book/__docusaurus/debug/registry', 'e58'),
    exact: true
  },
  {
    path: '/ai-native-book/__docusaurus/debug/routes',
    component: ComponentCreator('/ai-native-book/__docusaurus/debug/routes', 'adc'),
    exact: true
  },
  {
    path: '/ai-native-book/docs',
    component: ComponentCreator('/ai-native-book/docs', 'f39'),
    routes: [
      {
        path: '/ai-native-book/docs',
        component: ComponentCreator('/ai-native-book/docs', '19f'),
        routes: [
          {
            path: '/ai-native-book/docs',
            component: ComponentCreator('/ai-native-book/docs', '716'),
            routes: [
              {
                path: '/ai-native-book/docs/Module 1 - ROS 2 Nervous System/Defining-the-Body-URDF',
                component: ComponentCreator('/ai-native-book/docs/Module 1 - ROS 2 Nervous System/Defining-the-Body-URDF', '8cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-native-book/docs/Module 1 - ROS 2 Nervous System/Signals-and-Reflexes',
                component: ComponentCreator('/ai-native-book/docs/Module 1 - ROS 2 Nervous System/Signals-and-Reflexes', '270'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-native-book/docs/Module 1 - ROS 2 Nervous System/The-Digital-Nervous-System',
                component: ComponentCreator('/ai-native-book/docs/Module 1 - ROS 2 Nervous System/The-Digital-Nervous-System', 'dc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-native-book/docs/Module 1 - ROS 2 Nervous System/The-Python-Bridge',
                component: ComponentCreator('/ai-native-book/docs/Module 1 - ROS 2 Nervous System/The-Python-Bridge', '392'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-native-book/docs/Module 2 - Digital Twin Simulation/Laws-of-the-Land',
                component: ComponentCreator('/ai-native-book/docs/Module 2 - Digital Twin Simulation/Laws-of-the-Land', 'd85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-native-book/docs/Module 2 - Digital Twin Simulation/Synthetic-Senses',
                component: ComponentCreator('/ai-native-book/docs/Module 2 - Digital Twin Simulation/Synthetic-Senses', '568'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-native-book/docs/Module 2 - Digital Twin Simulation/The-Human-Element',
                component: ComponentCreator('/ai-native-book/docs/Module 2 - Digital Twin Simulation/The-Human-Element', '30c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-native-book/docs/Module 2 - Digital Twin Simulation/The-Mirror-World',
                component: ComponentCreator('/ai-native-book/docs/Module 2 - Digital Twin Simulation/The-Mirror-World', 'afc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-native-book/docs/Module 3 - AI Robot Brain/Infinite-Training-Data',
                component: ComponentCreator('/ai-native-book/docs/Module 3 - AI Robot Brain/Infinite-Training-Data', '4e4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-native-book/docs/Module 3 - AI Robot Brain/The-Navigator-Nav2',
                component: ComponentCreator('/ai-native-book/docs/Module 3 - AI Robot Brain/The-Navigator-Nav2', '5c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-native-book/docs/Module 3 - AI Robot Brain/Visual-GPS-VSLAM',
                component: ComponentCreator('/ai-native-book/docs/Module 3 - AI Robot Brain/Visual-GPS-VSLAM', 'f81'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-native-book/docs/Module 3 - AI Robot Brain/Walking-Not-Rolling',
                component: ComponentCreator('/ai-native-book/docs/Module 3 - AI Robot Brain/Walking-Not-Rolling', '5fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-native-book/docs/Module 4 - VLA Capstone/Capstone-The-Autonomous-Loop',
                component: ComponentCreator('/ai-native-book/docs/Module 4 - VLA Capstone/Capstone-The-Autonomous-Loop', '697'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-native-book/docs/Module 4 - VLA Capstone/maintenance-documentation',
                component: ComponentCreator('/ai-native-book/docs/Module 4 - VLA Capstone/maintenance-documentation', 'cf0'),
                exact: true
              },
              {
                path: '/ai-native-book/docs/Module 4 - VLA Capstone/Module-Summary',
                component: ComponentCreator('/ai-native-book/docs/Module 4 - VLA Capstone/Module-Summary', 'e91'),
                exact: true
              },
              {
                path: '/ai-native-book/docs/Module 4 - VLA Capstone/The-Cognitive-Planner',
                component: ComponentCreator('/ai-native-book/docs/Module 4 - VLA Capstone/The-Cognitive-Planner', 'cdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-native-book/docs/Module 4 - VLA Capstone/The-Embodied-LLM',
                component: ComponentCreator('/ai-native-book/docs/Module 4 - VLA Capstone/The-Embodied-LLM', '0d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-native-book/docs/Module 4 - VLA Capstone/The-Robot-Ear',
                component: ComponentCreator('/ai-native-book/docs/Module 4 - VLA Capstone/The-Robot-Ear', '613'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ai-native-book/',
    component: ComponentCreator('/ai-native-book/', 'e2d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
