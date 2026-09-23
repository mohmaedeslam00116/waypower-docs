import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'waypower',
  tagline: 'Teach your agent how to work',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://mohmaedeslam00116.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/waypower-docs/',

  // GitHub pages deployment config.
  organizationName: 'mohmaedeslam00116',
  projectName: 'waypower-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  headTags: [
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://api.fontshare.com'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
    },
    {
      tagName: 'link',
      attributes: {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&display=swap',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400..700;1,400..700&family=JetBrains+Mono:wght@400;500;600&display=swap',
      },
    },
  ],

  onBrokenLinks: 'throw',

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
          showLastUpdateTime: true,
          editUrl:
            'https://github.com/mohmaedeslam00116/waypower-docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'waypower blog',
          blogDescription: 'Building waypower in the open — evals, releases, and the craft of agent skills',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/mohmaedeslam00116/waypower-docs/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        docsRouteBasePath: ['/docs'],
        blogRouteBasePath: ['/blog'],
        indexBlog: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        explicitSearchResultPath: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'waypower',
      logo: {
        alt: 'waypower',
        src: 'img/logo.svg',
        width: 28,
        height: 28,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://skills.sh/mohmaedeslam00116/waypower',
          label: 'skills.sh',
          position: 'right',
        },
        {
          href: 'https://github.com/mohmaedeslam00116/waypower',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: '/docs/intro',
            },
            {
              label: 'The pipeline',
              to: '/docs/pipeline',
            },
            {
              label: 'Skills reference',
              to: '/docs/skills/using-waypower',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mohmaedeslam00116/waypower',
            },
            {
              label: 'skills.sh',
              href: 'https://skills.sh/mohmaedeslam00116/waypower',
            },
            {
              label: 'Changelog',
              href: 'https://github.com/mohmaedeslam00116/waypower/blob/main/CHANGELOG.md',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Site source',
              href: 'https://github.com/mohmaedeslam00116/waypower-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} waypower contributors. MIT licensed. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.nightOwl,
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
