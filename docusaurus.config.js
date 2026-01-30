module.exports = {
  title: 'UniteHQ Docs',
  tagline: 'Internal docs and playbooks for UniteHQ',
  url: 'https://unitehq.example',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'FedX19',
  projectName: 'unitehq-docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/FedX19/unitehq/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
