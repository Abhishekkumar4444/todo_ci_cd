module.exports = {
  // Use preset for React Native testing library, providing built-in configurations for React Native tests
  preset: '@testing-library/react-native',

  // File extensions Jest should recognize while running tests
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // Run custom setup script after environment setup (e.g., add custom matchers or global mocks)
  setupFilesAfterEnv: ['./jest-setup.js'],

  // Define how Jest transforms files using Babel (handles JS and TS files)
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'babel-jest',
  },

  // Specify which files in node_modules should not be ignored during transformation (to handle ES6+ modules)
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-redux|@reduxjs/toolkit|redux-saga|@react-native|@react-native/assets)/)',
  ],

  // Regex pattern to identify test files (e.g., files in __tests__ or ending with .test or .spec)
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',

  // Paths to ignore when running tests, such as native platform-specific folders
  testPathIgnorePatterns: ['/node_modules/', '/android/', '/ios/'],

  // Enable test coverage collection
  collectCoverage: true,

  // Directory where test coverage reports are saved
  coverageDirectory: 'coverage',

  // Specify formats for coverage reports (e.g., JSON, text summary, LCOV, Clover)
  coverageReporters: ['json', 'text', 'lcov', 'clover'],

  // Specify files from which coverage should be collected and files to exclude
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // Collect coverage from all source files
    '!src/**/*.d.ts', // Exclude TypeScript declaration files
    '!src/navigation/*.{js,jsx,ts,tsx}', // Exclude navigation files
  ],

  // Map module paths for imports, enabling aliasing and mocking of static assets
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Alias for imports from 'src'
    '\\.(png|jpg|jpeg|gif|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mock static assets
  },

  // Define global configurations for Jest, such as using Babel for TypeScript transformation
  globals: {
    'ts-jest': {
      babelConfig: true, // Allow TypeScript transformation with Babel
    },
  },
};
