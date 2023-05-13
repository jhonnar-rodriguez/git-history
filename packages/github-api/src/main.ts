import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  // FYI: If you want to test the services you can follow this documentation: https://docs.nestjs.com/standalone-applications
  await app.close();
}
bootstrap();
