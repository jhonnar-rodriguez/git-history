import {
  CoreModule as PackageCoreModule,
  ENVIRONMENT_CONFIG,
  ENVIRONMENT_VALIDATION,
  GithubModule,
} from '@jhonnar/github';
import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { HttpExceptionFilter } from './filters';
import { CorrelationIdMiddleware } from './middlewares';

@Global()
@Module({
  imports: [
    PackageCoreModule,
    GithubModule,
    ConfigModule.forRoot({
      expandVariables: true,
      isGlobal: true,
      load: [ENVIRONMENT_CONFIG],
      ...ENVIRONMENT_VALIDATION,
    }),
  ],
  exports: [],
  providers: [
    {
      provide: 'APP_FILTER',
      useClass: HttpExceptionFilter,
    },
  ],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationIdMiddleware).forRoutes('*');
  }
}
