export default {
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  clearMocks: true,
  collectCoverage: false,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testMatch: ["**/tests/*.test.ts"],
};
