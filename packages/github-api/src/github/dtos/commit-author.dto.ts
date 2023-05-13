import { ApiProperty } from '@nestjs/swagger';

export class CommitAuthorDto {
  @ApiProperty({
    required: true,
    type: String,
  })
  avatar_url: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  events_url: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  followers_url: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  following_url: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  gravatar_id: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  id: number;

  @ApiProperty({
    required: true,
    type: String,
  })
  type: string;
}
