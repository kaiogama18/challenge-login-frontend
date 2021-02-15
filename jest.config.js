
module.exports = {
    verbose: true
}

module.exports = async () => {
    return {
        verbose: true
    }
}

module.exports = {
    transform: {
      "^.+\\.js$": "babel-jest",
      "^.+\\.svelte$": "svelte-jest"
    },
    moduleFileExtensions: ["js", "json", "svelte"],
    coverageReporters: ['html'],
    setupFilesAfterEnv: [
        "@testing-library/jest-dom/extend-expect"
    ],
    preset: 'ts-jest'

};
