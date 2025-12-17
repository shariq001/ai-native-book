// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Empowering AI to Perceive, Plan, and Act in the Real World',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://shariq001.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/ai-native-book/',

  // GitHub pages deployment config.
  organizationName: 'shariq001', 
  projectName: 'ai-native-book', 

  // Recommended for GitHub Pages to prevent 404s
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Treat broken links as errors to ensure quality
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'AI-Native Robotics',
        logo: {
          alt: 'Robotics Logo',
          src: 'img/logo.png',
          height: 50, 
          style: { height: '50px', width: 'auto' },
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/shariq001/ai-native-book',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Modules',
            items: [
              {
                label: 'ROS 2: The Robotic Nervous System',
                // FIXED: Removed "01-" because the file is likely named "The-Digital-Nervous-System.md"
                to: '/docs/Module 1 - ROS 2 Nervous System/The-Digital-Nervous-System',
              },
              {
                label: 'Digital Twin (Gazebo & Unity)',
                // FIXED: Removed "01-"
                to: '/docs/Module 2 - Digital Twin Simulation/The-Mirror-World',
              },
              {
                label: 'AI-Robot Brain (NVIDIA Isaac™)',
                // FIXED: Removed "01-"
                to: '/docs/Module 3 - AI Robot Brain/Infinite-Training-Data',
              },
              {
                label: 'VLA & Capstone',
                // FIXED: Removed "01-"
                to: '/docs/Module 4 - VLA Capstone/The-Embodied-LLM',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/shariq001/ai-native-book',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI-Native Robotics Textbook, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;