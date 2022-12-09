const {defaults} = require('jest-config');

const config = {
  ...defaults.moduleFileExtensions,
  preset: 'react-native',
  rootDir: '.',
  setupFilesAfterEnv: ['./src/jest.setup.js'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/e2e'],
};

module.exports = config;
