// jest.config.js
module.exports = {
    testMatch: ["<rootDir>/tests/**/*.test.js"], // Point to the tests directory
    collectCoverage: true,
    coverageDirectory: "<rootDir>/coverage", // Specify where to output the coverage report
    collectCoverageFrom: ["src/**/*.{js,jsx}"], // Collect coverage from source files
    testEnvironment: "jsdom" // Ensure correct environment for frontend testing
  };
  