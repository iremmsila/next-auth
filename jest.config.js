const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jose|openid-client|@panva|uuid)/)',
  ],
  testMatch: [
    '<rootDir>/src/**/__test__/**/*.{js,ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,ts,tsx}',
  ],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx"],
}

module.exports = createJestConfig(customJestConfig)