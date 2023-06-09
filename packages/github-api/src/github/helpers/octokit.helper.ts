import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Octokit } from '@octokit/core';

import { ENVIRONMENT_CONFIG } from '../../core/config';
import { PaginationDto } from '../dtos';

@Injectable()
export class OctokitHelper {
  private octokit: Octokit;

  private owner: string;

  private repo: string;

  constructor(
    @Inject(ENVIRONMENT_CONFIG.KEY)
    private environment: ConfigType<typeof ENVIRONMENT_CONFIG>,
  ) {
    const { github, appTimezone, apiUrl } = this.environment;
    this.owner = github.owner;
    this.repo = github.repo;

    this.octokit = new Octokit({
      auth: github.token,
      timeZone: appTimezone,
      userAgent: apiUrl,
    });
  }

  async makeRequest<T>(
    url: string,
    pagination: PaginationDto,
    options?: any,
  ): Promise<T> {
    const additionalOptions = options || {};
    const request = await this.octokit.request(url, {
      owner: this.owner,
      repo: this.repo,
      ...pagination,
      ...additionalOptions,
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    return request?.data;
  }
}
