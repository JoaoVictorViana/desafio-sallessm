const { pathsToModuleNameMapper } = require('ts-jest')
const nextJest = require('next/jest')
const createJestConfig = nextJest({
  dir: './',
})
const { compilerOptions } = require('./tsconfig')
const paths = pathsToModuleNameMapper(compilerOptions.paths , { prefix: '<rootDir>/' } )
paths["^@assets/(.*)$"] = "<rootDir>/src/mocks/fileMock.js"

const customJestConfig = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['.storybook', 'cypress'],
  moduleNameMapper: paths,
}

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = createJestConfig(customJestConfig)