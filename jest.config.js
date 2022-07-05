module.exports = {
  roots: ['<rootDir>'],
  collectCoverageFrom: ['<rootDir./src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnviroment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
