import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import { CoreModule } from './core';

@Module({
  imports: [
    CoreModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
      renderPath: /^((?!\/api).)*$/,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
