import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

export type Github = {
  token: string;
  owner: string;
  repo: string;
};

export type EnvironmentConfig = {
  appPort: number;
  apiUrl: string;
  appTimezone: string;
  github: Github;
};

export default registerAs(
  'environment',
  (): EnvironmentConfig => ({
    appPort: parseInt(process.env.APP_PORT, 10) || 3000,
    apiUrl: process.env.API_URL || '',
    appTimezone: process.env.APP_TIMEZONE || 'America/Bogota',
    github: {
      token: process.env.GITHUB_TOKEN || '',
      owner: process.env.GITHUB_OWNER || '',
      repo: process.env.GITHUB_REPO || '',
    },
  }),
);

export const ENVIRONMENT_VALIDATION: Record<string, any> = {
  validationSchema: Joi.object({
    NODE_ENV: Joi.string()
      .valid('development', 'production', 'test')
      .default('development'),
    API_PORT: Joi.number().default(3000),
    API_URL: Joi.string().required(),
    APP_TIMEZONE: Joi.string().default('America/Bogota'),
    GITHUB_OWNER: Joi.string().required(),
    GITHUB_REPO: Joi.string().required(),
    GITHUB_TOKEN: Joi.string().required(),
  }),
  validationOptions: {
    abortEarly: true,
  },
};
