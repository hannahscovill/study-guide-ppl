import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Aviation Study Guide',
  tagline: 'PPL Ground',
  favicon: 'img/tiny-plane.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Hannah Scovill', // Usually your GitHub org/user name.
  projectName: 'Pilot Study Guide', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/hannahscovill/study-guide-ppl/blob/main/'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark', // This sets dark mode as the default
      disableSwitch: false, // Set to true if you want to hide the light/dark mode switch
      respectPrefersColorScheme: true, // Set to true if you want to respect user system preferences
    },
    navbar: {
      title: 'Aviation Study Guide',
      logo: {
        alt: 'Tiny Apirplane',
        src: 'img/tiny-plane.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'groundSchoolPPLSidebar',
          position: 'left',
          label: 'PPL Ground School Notes',
        },
        {
          type: 'docSidebar',
          sidebarId: 'phakSidebar',
          position: 'left',
          label: 'PHAK Book Club',
        },
        {
          href: 'https://github.com/hannahscovill/study-guide-ppl',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Resources',
        //   items: [
        //     {
        //       label: 'FAA Aviation Handbooks & Manuals',
        //       to: 'https://www.faa.gov/regulations_policies/handbooks_manuals',
        //     },
        //   ],
        // },
        {
          title: 'Ground School Resources & Syllabi',
          items: [
            {
              label: 'MIT OpenCourseWare PPL Ground School',
              to: 'https://ocw.mit.edu/courses/16-687-private-pilot-ground-school-january-iap-2019/',
            },
            {
              label: 'Gleim Free Downloads',
              to: 'https://www.gleimaviation.com/resources/free-downloads/',
            },
            {
              label: 'ASA Complete Pilot Series',
              to: 'https://asa2fly.com/pilot-library/textbooks/the-complete-pilot-series/',
            },
            {
              label: 'EAA',
              to: 'https://www.eaa.org/eaa/eaa-chapters/eaa-chapter-resources/~/media/44814cf21110417fac3f8b6ec735f826.ashx',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'FAA Aviation Handbooks & Manuals',
              to: 'https://www.faa.gov/regulations_policies/handbooks_manuals',
            },
            {
              label: 'Join the book club!',
              to: '/bookClub',
            },
            {
              label: 'Acronyms & Initialisms',
              to: '/acronyms',
            },
            {
              label: 'Class Directory',
              to: '/classDirectory',
            },
            {
              label: 'RV12 Preflight Checklist',
              to: '/rv12Checklist',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/hannahscovill/study-guide-ppl',
            },
          ],
        },
      ],
      // copyright: `Copyright © 2025 Hannah Scovill, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

if (process.env.NODE_ENV === 'development') {
  (config.themeConfig as Preset.ThemeConfig).navbar.items.push({
      type: 'docSidebar',
      sidebarId: 'localOnly',
      position: 'left',
      label: 'Local',
    })
}

export default config;
