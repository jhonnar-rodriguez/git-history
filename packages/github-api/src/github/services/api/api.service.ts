import { Injectable } from '@nestjs/common';

import {
  BranchDto,
  CommitDetailDto,
  CommitDto,
  PaginationDto,
} from '../../dtos';
import { Endpoints } from '../../enums';
import { RequestError } from '../../errors';
import { OctokitHelper } from '../../helpers';

@Injectable()
export class ApiService {
  constructor(private readonly octokitHelper: OctokitHelper) {}

  async getBranches(pagination: PaginationDto): Promise<BranchDto[]> {
    try {
      return await this.octokitHelper.makeRequest<BranchDto[]>(
        Endpoints.GET_BRANCHES,
        pagination,
      );
    } catch (error: any) {
      throw new RequestError(
        error.response?.status,
        error.message,
        ApiService.name,
      );
    }
  }

  async getCommitsByBranch(
    branch: string,
    pagination: PaginationDto,
  ): Promise<CommitDto[]> {
    try {
      return await this.octokitHelper.makeRequest<CommitDto[]>(
        Endpoints.GET_COMMITS_BY_BRANCH,
        pagination,
        {
          branch,
        },
      );
    } catch (error: any) {
      throw new RequestError(
        error.response?.status,
        error.message,
        ApiService.name,
      );
    }
  }

  async getCommitDetails(
    commit: string,
    pagination: PaginationDto,
  ): Promise<CommitDetailDto[]> {
    try {
      return await this.octokitHelper.makeRequest<CommitDetailDto[]>(
        Endpoints.GET_COMMITS_DETAILS,
        pagination,
        {
          commit,
        },
      );
    } catch (error: any) {
      throw new RequestError(
        error.response?.status,
        error.message,
        ApiService.name,
      );
    }
  }
}
