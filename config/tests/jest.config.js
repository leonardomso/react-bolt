// Jest configuration
// https://facebook.github.io/jest/docs/en/configuration.html

module.exports = {
    automock: false,
    browser: false,
    bail: false,
    collectCoverageFrom: [
        'src/**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/vendor/**'
    ],
    coverageDirectory: '<rootDir>/coverage',
    globals: {
        __DEV__: true
    },
    moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
    transform: {
        '^.+\\.js?$': 'babel-jest'
    },
    verbose: true,
    setupTestFrameworkScriptFile: './rtl.setup.js'
};
