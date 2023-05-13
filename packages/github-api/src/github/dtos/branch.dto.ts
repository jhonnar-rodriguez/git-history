import { ApiProperty } from '@nestjs/swagger';

import { BranchCommitDto } from './branch-commit.dto';

export class BranchDto {
  @ApiProperty({
    description: 'The branch name',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'The commits related to the branch but only basic information',
    type: () => BranchCommitDto,
  })
  commit: BranchCommitDto;

  @ApiProperty({
    description: 'The commits related to the branch but only basic information',
    type: Boolean,
  })
  protected: boolean;
}
