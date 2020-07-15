module.exports = {
  stories: ['../src/stories/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-knobs',
    'storybook-addon-react-docgen',
    '@storybook/addon-actions',
    'storybook-addon-designs',
    '@storybook/addon-viewport/register',
  ],
};
