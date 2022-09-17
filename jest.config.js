const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1'
  },
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.test.[jt]s?(x)'],
  collectCoverage: true,
  collectCoverageFrom: ['components/**/*.[jt]s?(x)', 'pages/**/*.[jt]s?(x)'],
  coveragePathIgnorePatterns: [
    '<rootDir>/pages/_app.tsx',
    '<rootDir>/pages/_document.tsx',
    '<rootDir>/components/Icon/svgs/*.[jt]s?(x)'
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 80,
      statements: 0
    }
  }
};

module.exports = createJestConfig(customJestConfig);
