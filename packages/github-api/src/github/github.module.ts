import { Global, Module } from '@nestjs/common';

import { OctokitHelper } from './helpers';
import { ApiService } from './services';

@Global()
@Module({
  imports: [],
  exports: [ApiService, OctokitHelper],
  providers: [ApiService, OctokitHelper],
})
export class GithubModule {}
