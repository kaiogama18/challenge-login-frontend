module.exports = {
    verbose: true
}

module.exports = {
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
    bail: 1,
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['components/**/*.js', 'pages/**/*.js'],
    coverageReporters: ['lcov', 'text'],
    // setupFilesAfterEnv: [
    //     '@testing-library/react/cleanup-after-each',
    //     '@testing-library/jest-dom/extend-expect'
    // ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}
