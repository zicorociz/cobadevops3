module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom', // Menentukan jsdom untuk pengujian React
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect', // Memastikan toBeInTheDocument tersedia
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Menggunakan babel-jest untuk transformasi
  },
  moduleFileExtensions: ['js', 'jsx'],
};
