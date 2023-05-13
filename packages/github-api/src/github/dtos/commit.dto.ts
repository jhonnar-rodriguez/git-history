import { ApiProperty } from '@nestjs/swagger';

import { BranchCommitDto } from './branch-commit.dto';
import { CommitAuthorDto } from './commit-author.dto';
import { CommitRelatedDto } from './commit-related.dto';

export class CommitDto extends BranchCommitDto {
  @ApiProperty({
    description: 'Commit author details',
    required: true,
    type: () => CommitAuthorDto,
  })
  author: CommitAuthorDto;

  @ApiProperty({
    description: 'Commit related details',
    required: true,
    type: () => CommitRelatedDto,
  })
  commit: CommitRelatedDto;
}
