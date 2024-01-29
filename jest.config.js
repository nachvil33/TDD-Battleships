module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js'],
    testMatch: ['**/tests/**/*.js'],
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '\\.pnp\\.[^\\/]+$',
    ],
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  };
  