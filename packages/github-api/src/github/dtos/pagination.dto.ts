import { ApiProperty } from '@nestjs/swagger';

export class PaginationDto {
  @ApiProperty({
    description: 'Number of page',
    required: true,
    type: Number,
  })
  page: number;

  @ApiProperty({
    description: 'Records per page',
    required: true,
    type: Number,
  })
  perPage: number;
}
