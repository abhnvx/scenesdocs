// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Scenes Docs',
  tagline: 'The Ultimate Community Platform',
  url: 'https://abhnvx.github.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'abhnvx', // Usually your GitHub org/user name.
  projectName: 'scenesdocs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
          

          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Scenes Docs',
        logo: {
          alt: 'Scenes Docs',
          src: 'img/LogoDoc.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            href: 'https://buildonscenes.com',
            label: 'Website',
            position: 'right',
          },
        ],
      },

      
      footer: {
        style: 'light',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          {
            title: 'Product',
            items: [
              {
                label: 'Features',
                href: 'https://www.buildonscenes.com/#features',
              },
              {
                label: 'Use Cases',
                href: 'https://www.buildonscenes.com/#use-cases',
              },
              {
                label: 'Changelog',
                href: 'https://www.buildonscenes.com/changelog',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'Investors',
                href: 'https://www.buildonscenes.com/investors',
              },
              {
                label: 'Contact Us',
                href: 'https://www.buildonscenes.com/joinwhitelist',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Avalon Scenes. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
