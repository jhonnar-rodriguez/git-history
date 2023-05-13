process.env.API_URL = 'https://example.com';
process.env.GITHUB_TOKEN = 'abc123';
process.env.APP_TIMEZONE = 'America/New_York';
process.env.GITHUB_OWNER = 'octocat';
process.env.GITHUB_REPO = 'hello-world';

const originalEnv = process.env;

beforeEach(() => {
  process.env = { ...originalEnv };
});

afterEach(() => {
  process.env = originalEnv;
});
