import { ApiProperty } from '@nestjs/swagger';

import { CommitAuthorDetailDto } from './commit-author-detail.dto';

export class CommitRelatedDto {
  @ApiProperty({
    required: true,
    type: () => CommitAuthorDetailDto,
  })
  author: CommitAuthorDetailDto;

  @ApiProperty({
    required: true,
    type: Number,
  })
  comment_count: number;

  @ApiProperty({
    required: true,
    type: () => CommitAuthorDetailDto,
  })
  committer: CommitAuthorDetailDto;

  @ApiProperty({
    required: true,
    type: String,
  })
  message: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  url: string;
}
