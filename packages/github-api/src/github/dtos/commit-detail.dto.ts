import { ApiProperty } from '@nestjs/swagger';

import { CommitAuthorDto } from './commit-author.dto';
import { CommitFileDto } from './commit-file.dto';
import { CommitRelatedDto } from './commit-related.dto';
import { CommitStatsDto } from './commit-stats.dto';

export class CommitDetailDto {
  @ApiProperty({
    required: true,
    type: () => CommitAuthorDto,
  })
  author: CommitAuthorDto;

  @ApiProperty({
    required: true,
    type: () => CommitRelatedDto,
  })
  commit: CommitRelatedDto;

  @ApiProperty({
    required: true,
    type: () => [CommitFileDto],
  })
  files: CommitFileDto[];

  @ApiProperty({
    required: true,
    type: String,
  })
  node_id: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  sha: string;

  @ApiProperty({
    required: true,
    type: () => CommitStatsDto,
  })
  stats: CommitStatsDto;

  @ApiProperty({
    required: true,
    type: String,
  })
  url: string;
}
