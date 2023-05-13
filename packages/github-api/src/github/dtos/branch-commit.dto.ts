import { ApiProperty } from '@nestjs/swagger';

export class BranchCommitDto {
  @ApiProperty({
    description: 'The commit secure hash algorithm',
    required: true,
    type: String,
  })
  sha: string;

  @ApiProperty({
    description: 'The commit url',
    required: true,
    type: String,
  })
  url: string;
}
