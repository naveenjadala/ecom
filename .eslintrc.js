const {rules} = require('eslint-config-prettier');

module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:react-native/all',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  plugin: ['import', 'react-native'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
