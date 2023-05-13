import { Module } from '@nestjs/common';

import { CoreModule } from './core';
import { GithubModule } from './github';

@Module({
  imports: [CoreModule, GithubModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
