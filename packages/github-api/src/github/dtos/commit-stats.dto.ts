import { ApiProperty } from '@nestjs/swagger';

export class CommitStatsDto {
  @ApiProperty({
    required: true,
    type: Number,
  })
  additions: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  deletions: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  total: number;
}
