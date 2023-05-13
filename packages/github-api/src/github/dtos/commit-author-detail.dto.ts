import { ApiProperty } from '@nestjs/swagger';

export class CommitAuthorDetailDto {
  @ApiProperty({
    required: true,
    type: Date,
  })
  date: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  email: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  name: string;
}
