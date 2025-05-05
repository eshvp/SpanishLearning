// Environment configuration

type Environment = 'development' | 'production' | 'test';

interface EnvironmentConfig {
  apiUrl: string;
  timeout: number;
}

const configs: Record<Environment, EnvironmentConfig> = {
  development: {
    apiUrl: 'http://localhost:3000',
    timeout: 10000,
  },
  production: {
    apiUrl: 'https://your-production-api.com', // Change to your production URL
    timeout: 15000,
  },
  test: {
    apiUrl: 'http://localhost:3000',
    timeout: 5000,
  }
};

// Determine current environment
const getEnvironment = (): Environment => {
  // You can use platform-specific env detection here
  return (process.env.NODE_ENV as Environment) || 'development';
};

export const env = configs[getEnvironment()];