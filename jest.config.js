module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ["./src"],
  testMatch: ['**/*.spec.ts'],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
}