import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
      whitelist: true,
    }),
  );
  app.setGlobalPrefix('api');
  app.enableCors();

  if (!['production', 'qa', 'staging'].includes(process.env.NODE_ENV)) {
    const options = new DocumentBuilder()
      .setTitle('Git History')
      .setDescription(
        'Provide the required endpoints for our app to show git commit history on the same project we are working on.',
      )
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('api/swagger', app, document);
  }

  await app.listen(3000);

  // eslint-disable-next-line no-console
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
