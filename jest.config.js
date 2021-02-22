module.exports = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    bail: 1,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['components/**/*.js', 'pages/**/*.js'],
    coverageReporters: ['lcov', 'text'],
  };

// module.exports = {
//     verbose: true
// }

// module.exports = async () => {
//     return {
//         verbose: true
//     }
// }

// module.exports = {
//     transform: {
//         '^.+\\.js$': 'babel-jest',
//         '^.+\\.svelte$': 'svelte-jest'
//     },
//     moduleFileExtensions: ['js', 'json', 'svelte'],
//     coverageReporters: ['html'],
//     setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
//     preset: 'ts-jest'
// }
