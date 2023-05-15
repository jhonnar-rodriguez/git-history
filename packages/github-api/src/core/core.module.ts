import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';

import { winstonConfig } from './config';
import {
  ENVIRONMENT_CONFIG,
  ENVIRONMENT_VALIDATION,
} from './config/env.config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      isGlobal: true,
      load: [ENVIRONMENT_CONFIG],
      ...ENVIRONMENT_VALIDATION,
    }),
    WinstonModule.forRoot(winstonConfig),
  ],
  exports: [],
  providers: [],
})
export class CoreModule {}
