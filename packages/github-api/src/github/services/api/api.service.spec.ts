import { Test, TestingModule } from '@nestjs/testing';

import {
  mockedBranches,
  mockedCommitDetails,
  mockedCommitsByBranch,
} from '../../../../test/mocks/api.mock';
import { CoreModule } from '../../../core/core.module';
import { RequestError } from '../../errors/request.error';
import { OctokitHelper } from '../../helpers';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let apiService: ApiService;
  let octokitHelper: OctokitHelper;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [ApiService, OctokitHelper],
      imports: [CoreModule],
    }).compile();

    apiService = moduleRef.get<ApiService>(ApiService);
    octokitHelper = moduleRef.get<OctokitHelper>(OctokitHelper);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getBranches', () => {
    it('should return an array of branches', async () => {
      jest
        .spyOn(octokitHelper, 'makeRequest')
        .mockResolvedValueOnce(mockedBranches);

      const result = await apiService.getBranches(null);

      expect(octokitHelper.makeRequest).toHaveBeenCalled();
      expect(result).toEqual(mockedBranches);
    });

    it('should getBranches throw RequestError when makeRequest throws an exception', async () => {
      jest.spyOn(octokitHelper, 'makeRequest').mockRejectedValueOnce({
        response: { status: 500 },
        message: 'Server is down',
      });

      await expect(apiService.getBranches(null)).rejects.toThrow(RequestError);
      expect(octokitHelper.makeRequest).toHaveBeenCalled();
    });
  });

  describe('getCommitsByBranch', () => {
    it('should return an array of commits', async () => {
      jest
        .spyOn(octokitHelper, 'makeRequest')
        .mockResolvedValueOnce(mockedCommitsByBranch);

      const result = await apiService.getCommitsByBranch('main', null);

      expect(octokitHelper.makeRequest).toHaveBeenCalledWith(
        expect.any(String), // Route
        null, // Pagination
        {
          branch: 'main', // Additional Params
        },
      );
      expect(result).toEqual(mockedCommitsByBranch);
    });

    it('should throw RequestError when makeRequest throws an exception', async () => {
      jest.spyOn(octokitHelper, 'makeRequest').mockRejectedValueOnce({
        response: { status: 404 },
        message: 'Branch not found',
      });

      await expect(
        apiService.getCommitsByBranch('non-existent-branch', null),
      ).rejects.toThrow(RequestError);
      expect(octokitHelper.makeRequest).toHaveBeenCalled();
    });
  });

  describe('getCommitDetails', () => {
    it('should return an array of commit details', async () => {
      jest
        .spyOn(octokitHelper, 'makeRequest')
        .mockResolvedValueOnce(mockedCommitDetails);

      const result = await apiService.getCommitDetails('12345', null);

      expect(octokitHelper.makeRequest).toHaveBeenCalledWith(
        expect.any(String),
        null,
        {
          commit: '12345',
        },
      );
      expect(result).toEqual(mockedCommitDetails);
    });

    it('should throw RequestError when makeRequest throws an exception', async () => {
      jest.spyOn(octokitHelper, 'makeRequest').mockRejectedValueOnce({
        response: { status: 403 },
        message: 'Forbidden',
      });

      await expect(apiService.getCommitDetails('12345', null)).rejects.toThrow(
        RequestError,
      );
      expect(octokitHelper.makeRequest).toHaveBeenCalled();
    });
  });
});
