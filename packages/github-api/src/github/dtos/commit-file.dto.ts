import { ApiProperty } from '@nestjs/swagger';

export class CommitFileDto {
  @ApiProperty({
    required: true,
    type: Number,
  })
  additions: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  blob_url: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  changes: number;

  @ApiProperty({
    required: true,
    type: Number,
  })
  deletions: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  filename: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  patch: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  raw_url: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  status: string;
}
